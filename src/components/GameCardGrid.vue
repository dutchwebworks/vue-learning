<template>
    <div>
        <h3 class="sub-heading">Filter by platform:</h3>

        <ul class="filter">
            <li 
                v-for="(platform, index) in platforms"
                :key="index"
                class="filter__item paragraph">
                <label class="filter__label">
                    <input type="checkbox" v-model="filteredByPlatform" :value="platform">
                    {{ platformType[platform].title }}
                </label>
            </li>
        </ul>

        <h3 class="sub-heading">Sort by:</h3>

        <div>
            <select
                v-model="sortedBy">
                <option                    
                    v-for="(sort, index) in sortBy"
                    :key="index"
                    :value="sort.value">
                    {{ sort.name }}
                </option>
            </select>
        </div>

        <h2 class="sub-heading">{{ showingTotal }}</h2>

        <div
            class="games__grid">
            <GameCardItem
                v-for="game in filteredGames"
                :key="game.id"
                :game="game"
                :platformType="platformType"
                :genreType="genreType"
                :mediaType="mediaType"
                @editGame="editGame"
                @deleteGame="deleteGame">
            </GameCardItem>
        </div>
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
    data() {
        return {
            platforms: [],
            sortBy: [
                {
                    name: "Title",
                    value: "title"
                },
                {
                    name: "Publication year",
                    value: "publicationYear"
                },
                {
                    name: "Purchase year",
                    value: "purchaseYear"
                }
            ],
            filteredByPlatform: [],
            sortedBy: ""
        }
    },
    created() {
        this.getPlatformIds();
    },
    mounted() {
        this.$nextTick(function() { this.sortedBy = this.sortBy[0].value });        
    },
    methods: {
        editGame(game) {
            this.$emit("editGame", game);
        },
        deleteGame(game) {
            this.$emit("deleteGame", game);
        },
        getPlatformIds() {
            this.platforms = _.uniq(_.map(this.games, 'platformId'));
        },
        gamePassesPlatformFilter(game) {
            if(!this.filteredByPlatform.length) {
                return true;
            } else {
                return this.filteredByPlatform.find(platformId => game.platformId === platformId);
            }
        }
    },
    computed: {
        showingTotal() {
            return "Showing: " +  this.filteredGames.length + " result" + (this.filteredGames.length > 0 ? "s" : "");
        },
        filteredGames() {
            return _.sortBy(this.games.filter(this.gamePassesPlatformFilter), this.sortedBy);
        }        
    },
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

.filter {
    display: flex;
    margin: 0;
    padding: 0;
}

.filter__item {
    display: flex;
    align-self: center;
    list-style: none;
    margin-right: 10px;
    font-size: 22px;
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------




</style>