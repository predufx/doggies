<template>
    <div class="page-container">
        <div class="logo"></div>
        <h1>The Doggies Explorer</h1>
        <label for="SearchInput">Token ID</label>
        <input type="search" v-model="tokenId" name="search" id="SearchInput" placeholder="Type ID..." />
        <input type="button" @click="fetchDoggieData" value="Search">
        <!-- Display Doggie Data -->
        <div v-if="doggieData">
            <div>
                <div>Title and Owner</div>
                <h2>{{ doggieData.name }}</h2>
                <h2>{{ doggieData.owner }}</h2>
                <div class="nft"><img :src="doggieData.image" alt="Doggie Image" /></div>
                <p>{{ doggieData.description }}</p>
                <h3>Traits:</h3>
                <ul>
                    <li v-for="(attribute, index) in doggieData.attributes" :key="index">
                        {{ attribute.trait_type }}: {{ attribute.value }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
import Web3 from 'web3';
import DoggiesContractABI from '@/contracts/DoggiesContractABI.json';

const contractAddress = '0xC7dF86762ba83f2a6197e1Ff9Bb40ae0f696B9E6';
const infuraUrl = 'https://mainnet.infura.io/v3/e19b1682d0314164ab343d4020d73173';
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

export default {
    name: 'HomePage',
    data() {
        return {
            tokenId: '',
            doggieData: null,
            contract: new web3.eth.Contract(DoggiesContractABI, contractAddress),
        };
    },
    methods: {
        async fetchDoggieData() {
            if (!this.tokenId) {
                alert("Please enter a token ID.");
                return;
            }

            try {
                const tokenURI = await this.contract.methods.tokenURI(this.tokenId).call();
                const ownerAddress = await this.contract.methods.ownerOf(this.tokenId).call();

                console.log(tokenURI);

                // Fetch metadata from the tokenURI
                const response = await fetch(tokenURI);
                const metadata = await response.json();

                this.doggieData = {
                    name: metadata.name,
                    image: metadata.image_url, // Use image_url from the metadata
                    owner: ownerAddress,
                    description: metadata.description, // Add description
                    attributes: metadata.attributes, // Add attributes
                };
            } catch (error) {
                console.error('Error fetching data:', error);
                this.doggieData = null; // Reset data in case of error
                alert("Failed to fetch data for the given token ID.");
            }
        },
    },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    align-items: center;
}

.logo {
    width: 100px;
    height: 100px;
    background-image: url('../assets/logo.png');
    background-size: contain;
    background-color: red;
}

.nft img {
    max-width: 300px;
    max-height: 300px;
}
</style>
  