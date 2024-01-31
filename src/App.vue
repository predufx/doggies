<template>
  <div class="btn-theme" ref="btnTheme" @click="toggleTheme">&#9728;</div>
  <div class="app-container">

    <!-- Loader -->
    <div v-if="loading" class="loader"><span></span></div>

    <!-- Header -->
    <header class="header">

      <div class="header__logo"></div>
      <h1>THE DOGGIES EXPLORER</h1>
      <div class="header__separator">
        <svg viewBox="0 0 751 35">
          <path
            d="M315 17H319V21H315V17ZM306 17H310V21H306V17ZM297 17H301V21H297V17ZM288 17H292V21H288V17ZM279 17H283V21H279V17ZM270 17H274V21H270V17ZM261 17H265V21H261V17ZM252 17H256V21H252V17ZM243 17H247V21H243V17ZM234 17H238V21H234V17ZM225 17H229V21H225V17ZM216 17H220V21H216V17ZM207 17H211V21H207V17ZM198 17H202V21H198V17ZM189 17H193V21H189V17ZM180 17H184V21H180V17ZM171 17H175V21H171V17ZM162 17H166V21H162V17ZM153 17H157V21H153V17ZM144 17H148V21H144V17ZM135 17H139V21H135V17ZM126 17H130V21H126V17ZM117 17H121V21H117V17ZM108 17H112V21H108V17ZM99 17H103V21H99V17ZM90 17H94V21H90V17ZM81 17H85V21H81V17ZM72 17H76V21H72V17ZM63 17H67V21H63V17ZM54 17H58V21H54V17ZM45 17H49V21H45V17ZM36 17H40V21H36V17ZM27 17H31V21H27V17ZM18 17H22V21H18V17ZM9 17H13V21H9V17ZM0 17H4V21H0V17ZM747 17H751V21H747V17ZM738 17H742V21H738V17ZM729 17H733V21H729V17ZM720 17H724V21H720V17ZM711 17H715V21H711V17ZM702 17H706V21H702V17ZM693 17H697V21H693V17ZM684 17H688V21H684V17ZM675 17H679V21H675V17ZM666 17H670V21H666V17ZM657 17H661V21H657V17ZM648 17H652V21H648V17ZM639 17H643V21H639V17ZM630 17H634V21H630V17ZM621 17H625V21H621V17ZM612 17H616V21H612V17ZM603 17H607V21H603V17ZM594 17H598V21H594V17ZM585 17H589V21H585V17ZM576 17H580V21H576V17ZM567 17H571V21H567V17ZM558 17H562V21H558V17ZM549 17H553V21H549V17ZM540 17H544V21H540V17ZM531 17H535V21H531V17ZM522 17H526V21H522V17ZM513 17H517V21H513V17ZM504 17H508V21H504V17ZM495 17H499V21H495V17ZM486 17H490V21H486V17ZM477 17H481V21H477V17ZM468 17H472V21H468V17ZM459 17H463V21H459V17ZM450 17H454V21H450V17ZM441 17H445V21H441V17ZM432 17H436V21H432V17ZM392.99 23.107C389.819 21.8581 386.412 21.3181 383.01 21.525C385.42 18.5678 387.052 15.0555 387.76 11.307C387.817 11.0448 387.802 10.7722 387.717 10.5176C387.633 10.2631 387.482 10.0358 387.279 9.85956C387.077 9.6833 386.831 9.56446 386.568 9.51547C386.304 9.46648 386.032 9.48911 385.78 9.58099C383.155 10.5103 380.736 11.9434 378.66 13.8C378.487 9.59343 377.347 5.48322 375.33 1.78799C375.203 1.54511 375.012 1.34166 374.777 1.19974C374.543 1.05782 374.274 0.98287 374 0.983002H373.99C373.714 0.986097 373.444 1.0646 373.21 1.21002C372.976 1.35544 372.785 1.56225 372.66 1.80801C370.695 5.58055 369.628 9.75547 369.54 14.008C367.426 12.0514 364.935 10.547 362.22 9.58701C361.968 9.49512 361.696 9.47249 361.432 9.52148C361.169 9.57048 360.923 9.68928 360.721 9.86554C360.518 10.0418 360.367 10.2691 360.283 10.5237C360.198 10.7782 360.183 11.0508 360.24 11.313C360.948 15.0607 362.581 18.5722 364.99 21.529C361.588 21.3218 358.182 21.8614 355.01 23.11C354.741 23.2109 354.506 23.3871 354.334 23.6176C354.162 23.8481 354.06 24.1231 354.04 24.41C354.02 24.6967 354.081 24.9832 354.218 25.2361C354.354 25.4891 354.56 25.6982 354.81 25.839C357.452 27.3947 360.383 28.395 363.425 28.7788C366.467 29.1626 369.555 28.9218 372.5 28.071V33.471C372.5 33.8688 372.658 34.2503 372.939 34.5316C373.221 34.813 373.602 34.971 374 34.971C374.398 34.971 374.779 34.813 375.061 34.5316C375.342 34.2503 375.5 33.8688 375.5 33.471V28.071C377.514 28.6437 379.596 28.9413 381.69 28.956C385.728 28.9232 389.688 27.8497 393.19 25.839C393.44 25.6982 393.646 25.4891 393.782 25.2361C393.919 24.9832 393.98 24.6967 393.96 24.41C393.94 24.1226 393.839 23.8469 393.667 23.6158C393.495 23.3848 393.26 23.2081 392.99 23.107Z" />
        </svg>
      </div>
    </header>

    <!-- SearchBar -->
    <SearchBar :tokenId="tokenId" @update:tokenId="tokenId = $event" @search="fetchDoggyDataWrapper"
      @random-search="fetchRandomDoggyDataWrapper" />

    <!-- SnoopDogg welcome -->
    <section v-if="!doggyData" class="snoop-welcome">
      <div class="snoop-welcome__graphic"></div>
    </section>

    <!-- Nft Card Details -->
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
      isDarkTheme: true,
    };
  },
  mounted() {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      this.$refs.btnTheme.innerHTML = '&#9728;'; // Sun emoji, since dark theme is default
    }
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
        this.tokenId = ''; // Clear the search input value if previously a token ID was searched
        this.doggyData = await fetchRandomDoggyData();
      } catch (error) {
        alert("Failed to perform random search.");
        this.doggyData = null;
      }
      this.loading = false;
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      if (this.isDarkTheme) {
        document.body.classList.add('dark-theme');
        this.$refs.btnTheme.innerHTML = '&#9728;'; // Use the sun emoji for light theme
      } else {
        document.body.classList.remove('dark-theme');
        this.$refs.btnTheme.innerHTML = '&#9790;'; // Use the moon emoji for dark theme
      }
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Roboto Condensed', sans-serif;
  background-image: url('./assets/background-img.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  min-height: calc(100vh - 1rem);
  position: relative;
}

a {
  color: #0080ff;
}

h1,
h2,
h3,
h4 {
  font-weight: 400;
}

.btn-theme {
  position: absolute;
  top: 20px;
  right: 10px;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: auto;

  img {
    max-width: 100%;
  }

  .loader {
    width: 100vw;
    position: absolute;
    background-color: rgba(0, 0, 0, .25);
    z-index: 99;
    top: 0;
    bottom: 0;

    span {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #75ad32;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      animation: spin 2s linear infinite;
      background-color: #d3d3d3;
      display: block;
      margin: auto;
      margin-top: 30vh;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    &__logo {
      margin-top: 10px;
      width: 250px;
      height: 100px;
      background-image: url('./assets/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }

    &__separator {
      display: flex;
      justify-content: center;

      svg {
        fill: #fff;
        width: 500px;
        max-width: 80%;
      }
    }

    h1 {
      font-weight: 300;
    }
  }

  .snoop-welcome {
    width: 100%;
    height: 600px;

    &__graphic {
      background-image: url('./assets/snoopDog_welcome.png');
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      margin-top: 30px;
    }
  }

  // Mobile View Media Queries
  @media (max-width: 768px) {
    .snoop-welcome {
      height: 100vw;

      &__graphic {
        background-image: url('./assets/snoopDog_welcome.png');
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        margin-top: 30px;
      }
    }
  }
}

// Dark theme
body.dark-theme {
  background-image: url('./assets/background-img-dark.jpg');
}

.dark-theme .loader {

  span {
    border: 4px solid #384e1e;
    border-top: 4px solid #75ad32;
    background-color: #000000;
  }
}

// Loader animation
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>