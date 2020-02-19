<template>
    <div class="games-detail">
        <div class="games-detail__nav">
            <router-link
                tag="button"
                :to="{ name: 'GamesPage' }"
                class="button button--01">
                Back
            </router-link>
        </div>

        <h1 class="games-detail__title">{{ game.title }}</h1>

        <div>
            <img 
                class="games-detail__poster"
                :src="game.posterImg"
                :alt="game.title">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                this.$router.push({ name: "GamesPage" });
            }
        });
    },
    data() {
        return {
            game: this.$route.params.game
        }
    }
}
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------



// ---------------------------------------------
// Element
// ---------------------------------------------

.games-detail__title {
    margin: 0 0 20px 0;
    font-size: 45px;
    font-weight: 300;    
	font-family: "Roboto", sans-serif;
    color: map-get($colors, 01);
}

.games-detail__nav {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
}

.games-detail__poster {
    max-width: 600px;
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------




</style>