<template>
  <div class="app-container">
    <!-- Loader -->
    <div v-if="loading" class="loader"><span></span></div>
    <div class="logo"></div>
    <h1>The Doggies Explorer</h1>
    <SearchBar :tokenId="tokenId" @update:tokenId="tokenId = $event" @search="fetchDoggyDataWrapper"
      @random-search="fetchRandomDoggyDataWrapper" />
    <NFTDisplay :doggyData="doggyData" />
  </div>
</template>

<script>
import { fetchDoggyData, fetchRandomDoggyData } from './utils/blockchainService';
import SearchBar from './components/SearchBar.vue';
import NFTDisplay from './components/NFTDisplay.vue';

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
      loading: false,
    };
  },
  methods: {
    async fetchDoggyDataWrapper() {
      this.loading = true;
      try {
        this.doggyData = await fetchDoggyData(this.tokenId);
      } catch (error) {
        alert("Failed to fetch data for the given token ID.");
        this.doggyData = null;
      }
      this.loading = false;
    },
    async fetchRandomDoggyDataWrapper() {
      this.loading = true;
      try {
        this.doggyData = await fetchRandomDoggyData();
      } catch (error) {
        alert("Failed to perform random search.");
        this.doggyData = null;
      }
      this.loading = false;
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