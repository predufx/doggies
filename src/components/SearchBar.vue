<template>
    <section class="search-bar">
        <input type="search" :value="tokenId" @input="$emit('update:tokenId', $event.target.value)" id="SearchInput"
            class="search-bar__input" placeholder="Type ID..." aria-label="Search Token ID" />
        <button type="button" @click="onSearchClick" class="search-bar__button search-bar__button--search">
            Search
        </button>
        <span> or </span>
        <button type="button" @click="onRandomSearchClick" class="search-bar__button search-bar__button--random">
            Random ID
        </button>
    </section>
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
  
<style lang="scss" scoped>
.search-bar {
    display: flex;
    position: relative;
    margin-top: 20px;

    &__input {
        height: 48px;
        border-radius: 50px;
        width: 250px;
        border: none;
        font-size: 1.2rem;
        padding-left: 10px;
        padding-right: 30px;
    }

    &__button {
        height: 40px;
        border-radius: 50px;
        min-width: 100px;
        border: none;
        color: #fff;
        font-size: 1.1rem;
        cursor: pointer;
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 4px;

        &--search {
            position: absolute;
            left: calc(250px - 104px);
            background-color: #75ad32;

        }

        &--random {
            background-color: #23b3a7;
        }

        &:active {
            background-color: #000000;
        }

        @media (min-width: 769px) {
            &:hover {
                background-color: #000000;
            }
        }
    }

    span {
        display: flex;
        align-self: center;
        margin-left: 10px;
        margin-right: 10px;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 300;
    }
}

// Mobile View Media Queries
@media (max-width: 768px) {
    .search-bar {
        flex-direction: column;

        &__button {
            width: 100%;
            position: static;
            margin-top: 10px;
        }

        span {
            display: none;
        }
    }
}

// Dark theme
.dark-theme {
    .search-bar {

        &__input {
            background-color: #000000;
            border: 1px solid #75ad32;
            color: #fff;
        }

        &__button {
            color: #fff;

            &--search {
                background-color: #75ad32;

            }

            &--random {
                background-color: #23b3a7;
            }
        }
    }
}
</style>