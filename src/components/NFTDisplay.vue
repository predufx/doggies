<template>
    <div v-if="doggyData" class="nft-display">
        <h2>Title and Owner:</h2>
        <div class="title">
            <img :src="doggyData.image" />
            <div>{{ doggyData.name }}</div>
        </div>
        <p>{{ doggyData.owner }}</p>
        <div class="nft-container">
            <iframe :src="doggyData.iframe" class="nft-iframe" frameborder="0"></iframe>
        </div>
        <h2>Description:</h2>
        <p>{{ doggyData.description }}</p>
        <h2>Traits:</h2>
        <ul>
            <li v-for="(attribute, index) in doggyData.attributes" :key="index">
                {{ attribute.trait_type }}: {{ attribute.value }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'NFTDisplay',
    props: {
        doggyData: {
            type: Object,
            default: () => { },
        },
    },
};
</script>
  
<style scoped>
.nft-display {
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
}

.nft-display .nft-container {
    width: 400px;
    height: 400px;
    display: block;
    border-radius: 8px;
}

.nft-iframe {
    width: 400px;
    /* Adjust width as needed */
    height: 400px;
    /* Adjust height as needed */
    border: none;
    border-radius: 8px;
    /* Optional: if you want rounded corners */
}

.title {
    display: flex;
    gap: 10px;
    font-weight: bold;
    align-items: center;
}

.title img {
    width: 35px;
    height: 35px;
    border-radius: 5px;
}

.nft-display h2,
h3 {
    color: #333;
}

.nft-display p {
    color: #666;
}
</style>