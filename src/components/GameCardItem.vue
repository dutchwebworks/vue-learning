<template>
    <article
        class="games__grid-item">
        <router-link
            :to="{ name: 'GamesDetailPage', params: game }">
            <img 
                :src="game.posterImg" 
                :alt="game.title"
                class="games__poster-img">
        </router-link>

        <h3 class="games__title">{{ game.title }}</h3>

        <p class="games__platform"><small>{{ platformType[game.platformId].shortTitle }}</small></p>

        <ul class="games__genre-list">
            <li 
                v-for="genreId in game.genreIds"
                :key="genreId">
                {{ genreType[genreId].shortTitle }}
            </li>
        </ul>

        <div class="games__grid-nav">
            <button 
                class="games__delete-button button button--01"
                @click="editGame(game)"
                title="Edit this game">
                Edit
            </button>

            &nbsp;

            <button 
                class="games__delete-button button button--02"
                @click="deleteGame(game)"
                title="Delete this game">
                &times;
            </button>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        game: {
            type: Object,
            required: true
        },
        platformType: {
            type: Object,
            required: true
        },
        genreType: {
            type: Object,
            required: true
        },
        mediaType: {
            type: Object,
            required: true
        }
    },
    methods: {
        editGame(game) {
            this.$emit("editGame", game);
        },
        deleteGame(game) {
            this.$emit("deleteGame", game);
        },
    }
}
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------

.games__grid-item {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    border-radius: 8px;
    background-color: map-get($colors, 05);
}

.games__title {
    margin: 10px 0 0 0;
}

.games__grid-nav {
    display: flex;
    margin-top: auto;

    button {
        padding: 10px 15px;
        flex: 1 0 auto;
    }

    button + button {
        margin-left: 10px;
    }
}

.games__poster-img {
    width: auto;
    max-width: 100%;
    height: 200px;
    justify-content: center;
    align-self: center;
    object-fit: contain;
    margin-bottom: 20px;
}

.games__platform {
    margin: 10px 0;
    font-size: 16px;
    font-weight: 300;    
    font-family: "Roboto", sans-serif;
    color: map-get($colors, 02);
    font-size: 22px;
}

.games__title,
.games__genre-list {  
    margin: 0; 
    font-weight: 300;    
	font-family: "Roboto", sans-serif;
}

.games__title {
    font-size: 26px;
    color: map-get($colors, 01);
}

.games__genre-list {
    margin: 0 0 20px 20px; 
    padding: 0;
}

// ---------------------------------------------
// Element
// ---------------------------------------------



// ---------------------------------------------
// Modifier
// ---------------------------------------------


</style>