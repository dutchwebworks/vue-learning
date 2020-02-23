<template>
    <div>
        <hr>

        <section class="filters">
            <h3 class="sub-heading">Search by title:</h3>

            <div class="search">
                <input 
                    type="text" 
                    class="search__input"
                    v-model="searchByTitle">
                <button
                    class="search__button button button--01"
                    @click="searchByTitle = ''">
                    &times;
                </button>
            </div>
            
            <h3 class="sub-heading">Filter by platform:</h3>

            <ul class="filter-options">
                <li 
                    v-for="(platform, index) in platforms"
                    :key="index"
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                        <input type="checkbox" v-model="filteredByPlatform" :value="platform">
                        {{ platformType[platform].title }}
                    </label>
                </li>
            </ul>

            <h3 class="sub-heading">Filter by media:</h3>

            <ul class="filter-options">
                <li 
                    v-for="(item, index) in media"
                    :key="index"
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                        <input type="checkbox" v-model="filteredByMedia" :value="item">
                        {{ mediaType[item].title }}
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
        </section>
        
        <hr>

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
            searchByTitle: "",
            platforms: [],
            media: [],          
            filteredByPlatform: [],
            filteredByMedia: [],
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
            sortedBy: ""
        }
    },
    created() {
        this.getPlatformIds();
        this.getMediaIds();
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
            this.platforms = _.uniq(_.map(this.games, "platformId"));
        },
        getMediaIds() {
            this.media = _.uniq(_.map(this.games, "mediaId"));
        },
        gamePassesSearchByTitleFilter(game) {
            return this.searchByTitle == "" ? true : game.title.toLowerCase().includes(this.searchByTitle);
        },
        gamePassesPlatformFilter(game) {
            return !this.filteredByPlatform.length ? true : this.filteredByPlatform.find(platformId => game.platformId === platformId);
        },
        gamePassesMediaFilter(game) {
            return !this.filteredByMedia.length ? true : this.filteredByMedia.find(mediaId => game.mediaId === mediaId);
        }
    },
    computed: {
        showingTotal() {
            return "Showing: " +  this.filteredGames.length + " result" + (this.filteredGames.length > 0 ? "s" : "");
        },
        filteredGames() {
            return _.sortBy(this.games
                .filter(this.gamePassesPlatformFilter)
                .filter(this.gamePassesSearchByTitleFilter)
                .filter(this.gamePassesMediaFilter)
            , this.sortedBy);
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

.filters {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: 20px;

    .sub-heading {
        margin: 0;
        font-size: 22px;
        color: map-get($colors, 02);
    }
}

.filter-options {
    display: flex;
    margin: 0;
    padding: 0;
}

.filter-options__items {
    display: flex;
    align-self: center;
    list-style: none;
    margin-right: 10px;
    font-size: 22px;
}

.search {  
    display: flex;
}

.search__input {
    padding: 10px;
    border-radius: 10px;
    font-size: 22px;
    color: map-get($colors, 01);
    border: 1px solid black;
    margin-right: 10px;
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------




</style>