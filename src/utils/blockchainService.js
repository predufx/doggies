import Web3 from 'web3';
import DoggiesContractABI from '../contracts/DoggiesContractABI.json';

const contractAddress = '0xC7dF86762ba83f2a6197e1Ff9Bb40ae0f696B9E6';
const infuraUrl = 'https://mainnet.infura.io/v3/e19b1682d0314164ab343d4020d73173';
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
const contract = new web3.eth.Contract(DoggiesContractABI, contractAddress);

export async function fetchDoggyData(tokenId) {
    try {
        const tokenURI = await contract.methods.tokenURI(tokenId).call();
        const ownerAddress = await contract.methods.ownerOf(tokenId).call();

        const response = await fetch(tokenURI);
        const metadata = await response.json();

        return {
            name: metadata.name,
            iframe: metadata.iframe_url,
            image: metadata.image_url,
            owner: ownerAddress,
            description: metadata.description,
            attributes: metadata.attributes,
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function fetchTotalSupply() {
    try {
        return await contract.methods.totalSupply().call();
    } catch (error) {
        console.error('Error fetching total supply:', error);
        throw error;
    }
}

export async function fetchRandomDoggyData() {
    const totalSupply = await fetchTotalSupply();
    const totalSupplyNumber = Number(totalSupply);
    const randomTokenId = Math.floor(Math.random() * totalSupplyNumber) + 1;
    return fetchDoggyData(randomTokenId.toString());
}