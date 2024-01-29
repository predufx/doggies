<template>
    <article v-if="doggyData" class="nft-container">

        <section class="nft-container__nft-details">

            <!-- Element: header within the nft-container block -->
            <section class="nft-container__nft-details__header">
                <div class="nft-container__nft-details__header__title">
                    <img :src="doggyData.image" alt="Image of {{ doggyData.name }}"
                        class="nft-container__nft-details__header__title__avatar" />
                    <h2 class="nft-container__nft-details__header__title__id">{{ doggyData.name }}</h2>
                </div>
                <h2>Owner</h2>
                <p class="nft-container__nft-details__header__owner">{{ doggyData.owner }}</p>
                <h2>Description</h2>
                <figcaption class="nft-container__nft-details__header__caption">{{ doggyData.description }}</figcaption>
            </section>

            <!-- Element: figure container within the nft-container block -->
            <div class="nft-container__nft-details__3d">
                <iframe :src="doggyData.iframe" class="nft-container__nft-details__3d__nft-iframe" frameborder="0"></iframe>
            </div>
        </section>

        <!-- Element: traits section within the nft-container block -->
        <section class="nft-container__nft-traits">
            <h2 class="nft-container__nft-traits__title">Traits:</h2>
            <ul class="nft-container__nft-traits__list">
                <!-- Modifier: trait item within the traits list -->
                <li v-for="(attribute, index) in doggyData.attributes" :key="index"
                    class="nft-container__nft-traits__list__trait">
                    <span class="nft-container__nft-traits__list__trait__type">{{ attribute.trait_type }}:</span>
                    <span class="nft-container__nft-traits__list__trait__value">{{ attribute.value || '-' }}</span>
                </li>
            </ul>
        </section>

    </article>
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
  
<style lang="scss" scoped>
.nft-container {
    background-color: rgba($color: #000000, $alpha: 0.5);
    margin-top: 50px;
    color: #565d54;
    border-radius: 5px;

    &__nft-details {
        margin-top: -20px;
        width: calc(100% - 80px);
        margin-left: 20px;
        background-color: rgba($color: #D1E2C6, $alpha: 1);
        padding: 20px;
        display: flex;
        border-radius: 5px;

        &__header {
            max-width: 50%;

            p,
            figcaption {
                margin-top: -10px;
                color: #7a7d78;
            }

            &__title {
                display: flex;
                align-items: center;
                gap: 15px;

                &__avatar {
                    width: 50px;
                    height: 50px;
                    background-color: rgb(177, 177, 177);
                    border-radius: 5px;
                }

                &__id {
                    font-size: 1.2rem;
                    text-decoration: underline;
                }
            }
        }

        &__3d {
            width: 100%;

            &__nft-iframe {
                width: 100%;
                height: 100%;
                min-height: 350px;
                background-color: rgb(177, 177, 177);
                border-radius: 5px;
            }
        }
    }

    &__nft-traits {
        margin-top: 2px;
        width: calc(100% - 80px);
        margin-left: 20px;
        background-color: rgba($color: #D1E2C6, $alpha: 1);
        padding: 20px;
        border-radius: 5px;
        margin-bottom: 20px;

        &__title {
            margin-top: 0;
        }

        &__list {
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            list-style: none;
            justify-content: space-between;
            padding: 0;

            &__trait {
                width: 43%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px;
                background-color: #dfecd9;
                margin: 5px;

                &__type {
                    text-transform: uppercase;
                }

                &__value {
                    font-weight: 700;
                    color: #357230;
                    font-size: 1.1rem;
                }
            }
        }
    }

    // Mobile View Media Queries
    @media (max-width: 768px) {
        &__nft-details {
            flex-direction: column;

            &__header {
                max-width: 100%;

                &__title {
                    width: 100%;

                    &__id {
                        width: 100%;
                    }
                }
            }

            &__3d {
                order: -1;
            }
        }

        &__nft-traits {

            &__list {
                column-gap: 0;

                &__trait {
                    width: 100%;
                    margin-bottom: 0;
                }

            }
        }
    }
}
</style>