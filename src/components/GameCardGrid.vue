<template>
    <div
        class="games__grid">
        <GameCardItem
            v-for="game in games"
            :key="game.id"
            :game="game"
            :platformType="platformType"
            :genreType="genreType"
            :mediaType="mediaType"
            @editGame="editGame"
            @deleteGame="deleteGame">
        </GameCardItem>
    </div>
</template>

<script>
import GameCardItem from "@/components/GameCardItem";

export default {
    components: {
        GameCardItem,
    },
    props: {
        games: {
            type: Array,
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
        }
    }
}
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------

.games__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
}

// ---------------------------------------------
// Element
// ---------------------------------------------



// ---------------------------------------------
// Modifier
// ---------------------------------------------




</style>