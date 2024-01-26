<template>
    <div class="search-bar">
        <input type="search" :value="tokenId" @input="$emit('update:tokenId', $event.target.value)" id="SearchInput"
            placeholder="Type Token ID..." />
        <input type="button" @click="onSearchClick" value="Search" />
        <input type="button" @click="onRandomSearchClick" value="Random Search" />
    </div>
</template>
  
<script>
export default {
    name: 'SearchBar',
    props: {
        tokenId: String,
    },
    methods: {
        onSearchClick() {
            this.$emit('search');
        },
        onRandomSearchClick() {
            this.$emit('random-search');
        },
    },
};
</script>
  
<style scoped>
.search-bar {
    display: flex;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-bar input[type="search"] {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #949494;
    border-radius: 8px;
    margin-right: 8px;
}

.search-bar input[type="button"] {
    padding: 8px 15px;
    background-color: #0080ff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 10px;
}

.search-bar input[type="button"]:hover {
    background-color: #0066cc;
}
</style>