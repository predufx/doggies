<template>
  <div class="app-container">
    <!-- Loader -->
    <div v-if="loading" class="loader"><span></span></div>
    <div class="logo"></div>
    <h1>The Doggies Explorer</h1>
    <SearchBar :tokenId="tokenId" @update:tokenId="tokenId = $event" @search="() => fetchdoggyData(tokenId)"
      @random-search="fetchRandomdoggyData" />
    <NFTDisplay :doggyData="doggyData" />
  </div>
</template>

<script>
import Web3 from 'web3';
import DoggiesContractABI from './contracts/DoggiesContractABI.json';
import SearchBar from './components/SearchBar.vue';
import NFTDisplay from './components/NFTDisplay.vue';

const contractAddress = '0xC7dF86762ba83f2a6197e1Ff9Bb40ae0f696B9E6';
const infuraUrl = 'https://mainnet.infura.io/v3/e19b1682d0314164ab343d4020d73173';
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

export default {
  name: 'App',
  components: {
    SearchBar,
    NFTDisplay,
  },
  data() {
    return {
      tokenId: '',
      doggyData: null,
      contract: new web3.eth.Contract(DoggiesContractABI, contractAddress),
      loading: false,
    };
  },
  methods: {
    async fetchdoggyData(tokenId) {
      console.log("Getting doggy Data...");
      this.loading = true;
      if (!tokenId) {
        alert("Please enter a token ID.");
        this.loading = false;
        return;
      }

      try {
        const tokenURI = await this.contract.methods.tokenURI(tokenId).call();
        const ownerAddress = await this.contract.methods.ownerOf(tokenId).call();

        // Fetch metadata from the tokenURI
        const response = await fetch(tokenURI);
        const metadata = await response.json();

        this.doggyData = {
          name: metadata.name,
          iframe: metadata.iframe_url,
          image: metadata.image_url,
          owner: ownerAddress,
          description: metadata.description,
          attributes: metadata.attributes,
        };
      } catch (error) {
        console.error('Error fetching data:', error);
        this.doggyData = null; // Reset data in case of error
        this.loading = false;
      }
      this.loading = false;
    },

    // Total supply of doggies needed for the random number generator
    async fetchTotalSupply() {
      console.log("Fething total supply...");
      try {
        return await this.contract.methods.totalSupply().call();
      } catch (error) {
        console.error('Error fetching total supply:', error);
        return null;
      }
    },

    async fetchRandomdoggyData() {
      console.log("Random search triggered");
      this.loading = true;
      this.tokenId = '';
      const totalSupply = await this.fetchTotalSupply();
      const totalSupplyNumber = Number(totalSupply);

      if (totalSupplyNumber) {
        const randomTokenId = Math.floor(Math.random() * totalSupplyNumber) + 1;
        console.log("Random NFT", randomTokenId);
        this.fetchdoggyData(String(randomTokenId));
      } else {
        console.error("Failed to fetch total supply of Doggies.");
        alert("Failed to fetch total supply of Doggies.");
      }
    }
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #efefef;
  color: #333;
  margin: 0;
  padding: 0;
}

a {
  color: #0080ff;
}

.app-container {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  align-items: center;
}

.loader {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, .25);
}

.loader span {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  background-color: #d3d3d3;
  display: block;
  margin: auto;
  margin-top: 20vh;
}

.logo {
  width: 100px;
  height: 100px;
  background-image: url('./assets/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>