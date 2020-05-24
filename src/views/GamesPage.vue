<template>
    <main class="games">
        <h1 class="heading">Games</h1>

        <section class="games__nav-view">
            <button 
                @click="showManagerPopup = true"
                class="button button--01">
                Add new game
            </button>

            <button 
                v-show="gameView == 'GameTable'"
                @click="switchView('GameCardGrid')"
                class="button button--02">
                Grid view
            </button>

            <button 
                v-show="gameView == 'GameCardGrid'"
                @click="switchView('GameTable')"
                class="button button--02">
                Table view
            </button>
        </section>

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

            <ul
                v-show="filteredGames.length >= 1"
                class="filter-options">
                <li 
                    v-for="(platform, index) in sortedPlatforms"
                    :key="index"
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                        <input
                            type="checkbox"
                            v-model="filteredByPlatform" 
                            :value="platform.id">
                        {{ platform.title }}
                    </label>
                </li>
            </ul>

            <h3 class="sub-heading">Filter by genre:</h3>

            <ul
                v-show="filteredGames.length >= 1"
                class="filter-options">
                <li 
                    v-for="(genre, key, index) in sortedGenres"
                    :key="index"
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                        <input
                            type="checkbox"
                            v-model.number="filteredByGenre" 
                            :value="genre.id">
                        {{ genre.title }}
                    </label>
                </li>
            </ul>

            <h3 class="sub-heading">Filter by media:</h3>

            <ul
                v-show="filteredGames.length >= 1"
                class="filter-options">
                <li 
                    v-for="(media, index) in sortedMedia"
                    :key="index"
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                        <input
                            type="checkbox"
                            v-model="filteredByMedia" 
                            :value="media.id">
                        {{ media.title }}
                    </label>
                </li>
            </ul>

            <h3 class="sub-heading">Finished:</h3>

            <ul class="filter-options">
                <li
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                    <input 
                        type="checkbox"
                        v-model="filterByFinished">
                        Show finished games
                    </label>
                </li>
            </ul>

            <h3 class="sub-heading">PSN free game:</h3>

            <ul class="filter-options">
                <li
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                    <input 
                        type="checkbox"
                        v-model="filterByIsPSN">
                        Show free PSN games
                    </label>
                </li>
            </ul>

            <h3 class="sub-heading">PS VR game:</h3>

            <ul class="filter-options">
                <li
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                    <input 
                        type="checkbox"
                        v-model="filterByIsPSVR">
                        Show PSVR games
                    </label>
                </li>
            </ul>

            <h3 class="sub-heading">Subscription based:</h3>

            <ul class="filter-options">
                <li
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                    <input 
                        type="checkbox"
                        v-model="filterByIsSubscriptionBased">
                        Show subscription based games
                    </label>
                </li>
            </ul>

            <h3 class="sub-heading">On wishlist:</h3>

            <ul class="filter-options">
                <li
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                    <input 
                        type="checkbox"
                        v-model="filterByIsOnWishList">
                        Show games on wishlist
                    </label>
                </li>
            </ul>

            <h3 class="sub-heading">Starred:</h3>

            <ul class="filter-options">
                <li
                    class="filter-options__items paragraph">
                    <label class="filter__label">
                    <input 
                        type="checkbox"
                        v-model="filterByIsStarred">
                        Show starred games
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

        <p
            v-if="games.length == 0"
            class="games__loading paragraph">Loading games from Firebase &hellip;</p>

        <component
            v-else
            :is="gameView"
            :games="filteredGames"
            :platformType="platformType"
            :genreType="genreType"
            :mediaType="mediaType"
            @editGame="editGame"
            @deleteGame="deleteGame">
        </component>

        <ModalWindow
            v-show="showManagerPopup"
            @onConfirm="showManagerPopup = false"
            @onCancel="showManagerPopup = false"
            :showModalFooter="false"
            title="Manage game">
            <form 
                @submit.prevent="onSubmit"
                class="games__form">

                <div class="games__form-overflow">
                    <label
                        class="games__labels paragraph">
                        Title:
                    </label>

                    <input
                        ref="title"
                        type="text"
                        v-model="editItem.title"
                        class="games__input paragraph"
                        required>

                    <label
                        class="games__labels paragraph">
                        Platform:
                    </label>

                    <select
                        name="platformId"
                        v-model.number="editItem.platformId">
                        <option
                            v-for="(platform, name, index) in platformType"
                            :key="index"
                            :value="name">
                            {{ platform.title }}
                        </option>
                    </select>

                    <label
                        class="games__labels paragraph">
                        Media:
                    </label>

                    <select
                        name="mediaId"
                        v-model.number="editItem.mediaId">
                        <option
                            v-for="(media, name, index) in mediaType"
                            :key="index"
                            :value="name">
                            {{ media.title }}
                        </option>
                    </select>

                    <label
                        class="games__labels paragraph">
                        Genre:
                    </label>

                    <select
                        multiple
                        name="platformId"
                        class="games__genres"
                        v-model.number="editItem.genreIds">
                        <option
                            v-for="(genre, name, index) in genreType"
                            :key="index"
                            :value="name">
                            {{ genre.title }}
                        </option>
                    </select>

                    <label
                        class="games__labels paragraph">
                        Poster image:
                    </label>

                    <input
                        type="text"
                        v-model="editItem.posterImg"
                        class="games__input paragraph">

                    <label
                        class="games__labels paragraph">
                        Purchase price:
                    </label>

                    <input
                        type="text"
                        v-model="editItem.purchasePrice"
                        class="games__input paragraph">
                    
                    <label
                        class="games__labels paragraph">
                        Purchase year:
                    </label>

                    <input
                        type="text"
                        v-model="editItem.purchaseYear"
                        class="games__input paragraph">
                    
                    <label
                        class="games__labels paragraph">
                        Publication year:
                    </label>

                    <input
                        type="text"
                        v-model="editItem.publicationYear"
                        class="games__input paragraph">
                    
                    <label
                        class="games__labels paragraph">
                        Playstation Network Game:
                    </label>

                    <input
                        type="checkbox"
                        v-model="editItem.isPSN"
                        class="games__checkbox">
                    
                    <label
                        class="games__labels paragraph">
                        Playstation VR Game:
                    </label>

                    <input
                        type="checkbox"
                        v-model="editItem.isPSVR"
                        class="games__checkbox">
                    
                    <label
                        class="games__labels paragraph">
                        Part of subscription service:
                    </label>

                    <input
                        type="checkbox"
                        v-model="editItem.isSubscriptionBased"
                        class="games__checkbox">
                    
                    <label
                        class="games__labels paragraph">
                        Finished the game:
                    </label>

                    <input
                        type="checkbox"
                        v-model="editItem.isFinished"
                        class="games__checkbox">
                    
                    <label
                        class="games__labels paragraph">
                        Starred:
                    </label>

                    <input
                        type="checkbox"
                        v-model="editItem.isStarred"
                        class="games__checkbox">
                    
                    <label
                        class="games__labels paragraph">
                        On wishlist:
                    </label>

                    <input
                        type="checkbox"
                        v-model="editItem.isOnWishList"
                        class="games__checkbox">
                    
                    <label
                        class="games__labels paragraph">
                        Comment:
                    </label>

                    <textarea
                        v-model="editItem.comment">
                    </textarea>

                    
                    </div>
                </div>

                <div 
                    v-if="!editingGame"
                    class="games__form-buttons">
                    <input      
                        type="submit"
                        value="Add"
                        class="button button--01">
                </div>

                <div 
                    v-else
                    class="games__form-buttons">   
                    <button
                        @click="updateGame" 
                        value="Update"
                        class="button button--02">
                        Update
                    </button>

                    &nbsp;

                    <button
                        @click="cancelEditGame"
                        value="Cancel"
                        class="button button--01">
                        Cancel
                    </button>
                </div>
            </form>
        </ModalWindow>      
    </main>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { db } from "@/firebase";
import { gamesRef } from "@/firebase";
import GameCardGrid from "@/components/GameCardGrid";
import GameTable from "@/components/GameTable";
import ModalWindow from "@/components/ModalWindow";

export default {
    components: {
        GameCardGrid,
        GameTable,
        ModalWindow
    },
    mounted() {
        var self = this;

        /*
        document.addEventListener('keydown', (event) => {
            if (event.keyCode == 78) {
                self.showManagerPopup = true;
            }

            if (event.keyCode == 71 && self.showManagerPopup == false) {
                self.gameView = "GameCardGrid";
            }

            if (event.keyCode == 84 && self.showManagerPopup == false) {
                self.gameView = "GameTable";
            }
        }, false);
        */
    },
    data() {
        return {            
            gamesLoaded: false,
            searchByTitle: "",
            platforms: [],
            media: [],          
            filteredByPlatform: [],
            filteredByGenre: [],
            filteredByMedia: [],
            filterByFinished: false,
            filterByIsPSN: false,
            filterByIsPSVR: false,
            filterByIsSubscriptionBased: false,
            filterByIsOnWishList: false,
            filterByIsStarred: false,
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
            sortedBy: "",
            gameView: "GameCardGrid",
            showManagerPopup: false,
            platformType: {
                1: { title: "Nintendo Wii Classic", shortTitle: "Wii Classic" },
                2: { title: "Nintendo Wii", shortTitle: "Wii" },
                3: { title: "Sony PlayStation 3", shortTitle: "PS3" },
                4: { title: "Sony PlayStation 4", shortTitle: "PS4" },
                5: { title: "Nintendo Switch", shortTitle: "Switch" },
                6: { title: "Apple iOS", shortTitle: "iOS" },
                7: { title: "Apple Tv", shortTitle: "Apple Tv" },
            },
            mediaType: {
                1: { title: "Digital" },              
                2: { title: "Physical" }
            },
            genreType: {
                1: { title: "First Person Shooter", shortTitle: "FPS" },
                2: { title: "Real Time Strategy", shortTitle: "RTS" },
                3: { title: "Multiplayer Online Battle Arean", shortTitle: "MOBA" },
                4: { title: "Role Play Game", shortTitle: "RPG" },
                5: { title: "Massively Multiplayer Online", shortTitle: "MMO" },
                6: { title: "Massively Multiplayer Online Role Playing Games", shortTitle: "MMORPG" },
                7: { title: "Puzzle", shortTitle: "Puzzle" },
                8: { title: "Shoot 'em Up", shortTitle: "Shoot 'em Up" },
                9: { title: "Beat 'em Up", shortTitle: "Beat 'em Up" },
                10: { title: "Stealth Game", shortTitle: "Steatlh Game" },
                11: { title: "Survival Game", shortTitle: "Survival Game" },
                12: { title: "Metroidvania", shortTitle: "Metroidvania" },
                13: { title: "Strategy", shortTitle: "Strategy" },
                14: { title: "Flight-Simulator", shortTitle: "Flight-Simulator" },
                15: { title: "Racing Simulator", shortTitle: "Racing Simulator" },
                16: { title: "Platform", shortTitle: "Platform" },
            },
            games: [],
            editingGame: null,
            editItem: {
                title: "",
                platformId: null,
                mediaId: null,
                genreIds: [],
                purchasePrice: "",
                purchaseYear: "",
                publicationYear: "",
                isPSN: false,
                isPSVR: false,
                isStarred: false,
                isSubscriptionBased: false,
                isFinished: false,
                isOnWishList: false,
                posterImg: "",
                comment: ""
            }            
        }
    },
    created() {
        gamesRef.on("child_added", (snapshot) => {
            this.games.push({...snapshot.val(), id: snapshot.key });
            this.gamesLoaded = true;
        });

        gamesRef.on("child_removed", snapshot => {
            const deletedGame = this.games.find(game => game.id === snapshot.key);
            this.games.splice(this.games.indexOf(deletedGame), 1);
        });

        gamesRef.on("child_changed", snapshot => {
            const updatedGame = this.games.find(game => game.id === snapshot.key);
            updatedGame.title = snapshot.val().title;
            updatedGame.platformId = snapshot.val().platformId;
            updatedGame.mediaId = snapshot.val().mediaId;
            updatedGame.genreIds = snapshot.val().genreIds;
            updatedGame.purchasePrice = snapshot.val().purchasePrice;
            updatedGame.purchaseYear = snapshot.val().purchaseYear;
            updatedGame.publicationYear = snapshot.val().publicationYear;
            updatedGame.isPSN = snapshot.val().isPSN;
            updatedGame.isPSVR = snapshot.val().isPSVR;
            updatedGame.isStarred = snapshot.val().isStarred;
            updatedGame.isSubscriptionBased = snapshot.val().isSubscriptionBased;
            updatedGame.isSubscriptionBased = snapshot.val().isSubscriptionBased;
            updatedGame.isFinished = snapshot.val().isFinished;
            updatedGame.isOnWishList = snapshot.val().isOnWishList;
            updatedGame.posterImg = snapshot.val().posterImg;
            updatedGame.comment = snapshot.val().comment;
        });

        
    },
    methods: {
        onSubmit() {
            gamesRef.push(this.editItem);
            this.cancelEditGame();
        },
        editGame(game) {
            this.editingGame = game;
            this.editItem.title = game.title;
            this.editItem.platformId = game.platformId;
            this.editItem.mediaId = game.mediaId;
            this.editItem.genreIds = game.genreIds;
            this.editItem.purchasePrice = game.purchasePrice;
            this.editItem.purchaseYear = game.purchaseYear;
            this.editItem.publicationYear = game.publicationYear;
            this.editItem.isPSN = game.isPSN;
            this.editItem.isPSVR = game.isPSVR;
            this.editItem.isStarred = game.isStarred == undefined ? false : true;
            this.editItem.isSubscriptionBased = game.isSubscriptionBased;
            this.editItem.isFinished = game.isFinished;
            this.editItem.isOnWishList = game.isOnWishList;
            this.editItem.posterImg = game.posterImg;
            this.editItem.comment = game.comment;

            this.showManagerPopup = true;
        },
        updateGame() {
            gamesRef.child(this.editingGame.id).set({
                title: this.editItem.title,
                platformId: this.editItem.platformId,
                mediaId: this.editItem.mediaId,
                genreIds: this.editItem.genreIds,
                purchasePrice: this.editItem.purchasePrice || "",
                purchaseYear: this.editItem.purchaseYear || "",
                publicationYear: this.editItem.publicationYear || "",
                isPSN: this.editItem.isPSN,
                isPSVR: this.editItem.isPSVR,
                isStarred: this.editItem.isStarred,
                isSubscriptionBased: this.editItem.isSubscriptionBased,
                isFinished: this.editItem.isFinished,
                isOnWishList: this.editItem.isOnWishList,
                posterImg: this.editItem.posterImg || "",
                comment: this.editItem.comment || "",
            });
            this.cancelEditGame();
        },
        deleteGame(game) {
            if(confirm("Delete game: '" + game.title + "'?") == true) {
                gamesRef.child(game.id).remove();
            }
        },
        cancelEditGame() {
            this.editingGame = null;
            this.editItem.title = "",
            this.editItem.platformId = null,
            this.editItem.mediaId = null,
            this.editItem.genreIds = [],
            this.editItem.purchasePrice = "",
            this.editItem.purchaseYear = "",
            this.editItem.publicationYear = "",
            this.editItem.isPSN = false,
            this.editItem.isPSVR = false,
            this.editItem.isStarred = false,
            this.editItem.isSubscriptionBased = false,
            this.editItem.isFinished = false,
            this.editItem.isOnWishList = false,
            this.editItem.posterImg = ""
            this.editItem.comment = ""

            this.$refs.title.focus();
            // this.$nextTick(() => { this.$v.$reset() })

            this.showManagerPopup = false;
        },
        switchView(componentName) {
            this.gameView = componentName;
        },
        getPlatformIds() {
            var self = this;

            _.uniq(_.map(self.filteredGames, "platformId")).forEach(item => {
                self.platforms.push({
                    id: item,
                    title: self.platformType[item].title,
                    shortTitle: self.platformType[item].shortTitle,
                });
            });            
        },
        getMediaIds() {
            var self = this;

            _.uniq(_.map(self.games, "mediaId")).forEach(item => {
                self.media.push({
                    id: item,
                    title: self.mediaType[item].title
                });
            });
        },
        gamePassesSearchByTitleFilter(game) {
            return this.searchByTitle == "" ? true : game.title.toLowerCase().includes(this.searchByTitle);
        },
        gamePassesPlatformFilter(game) {
            return !this.filteredByPlatform.length ? true : this.filteredByPlatform.find(platformId => game.platformId === platformId);
        },
        gamePassesGenreFilter(game) {
            console.log(game.genreIds);
            console.log(this.filteredByGenre);

            if(!this.filteredByGenre.length) {
                return true;
            } else if(game.genreIds != undefined){
                game.genreIds.forEach(genreId => {
                    return this.filteredByGenre.includes(genreId);
                });
            }           
        },
        gamePassesMediaFilter(game) {
            return !this.filteredByMedia.length ? true : this.filteredByMedia.find(mediaId => game.mediaId === mediaId);
        },
        gamePassesFinishedFilter(game) {
            return !this.filterByFinished ? true : game.isFinished;
        },
        gamePassesIsPSNFilter(game) {
            return !this.filterByIsPSN ? true : game.isPSN;
        },
        gamePassesIsPSVRFilter(game) {
            return !this.filterByIsPSVR ? true : game.isPSVR;
        },
        gamePassesIsSubscriptionBasedFilter(game) {
            return !this.filterByIsSubscriptionBased ? true : game.isSubscriptionBased;
        },
        gamePassesIsOnWishListFilter(game) {
            return !this.filterByIsOnWishList ? true : game.isOnWishList;
        },
        gamePassesIsStarredFilter(game) {
            return !this.filterByIsStarred ? true : game.isStarred;
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
                .filter(this.gamePassesFinishedFilter)
                .filter(this.gamePassesIsPSNFilter)
                .filter(this.gamePassesIsPSVRFilter)
                .filter(this.gamePassesIsSubscriptionBasedFilter)
                .filter(this.gamePassesIsOnWishListFilter)
                .filter(this.gamePassesIsStarredFilter)
                .filter(this.gamePassesGenreFilter)
            , this.sortedBy);
        },
        sortedPlatforms() {
            return _.sortBy(this.platforms, "title");
        },   
        sortedMedia() {
            return _.sortBy(this.media, "title");
        },  
        sortedGenres() {
            var self = this;
            var genreList = {};

            this.filteredGames.forEach(function(game){
                if(game.genreIds != undefined) {
                    game.genreIds.forEach(function(genreId){
                        if(genreId != undefined && genreList[genreId] == undefined) {                            
                            genreList[genreId] = {
                                id: genreId,
                                title: self.genreType[genreId].title,
                                shortTitle: self.genreType[genreId].shortTitle,
                            }
                        }
                    });
                }
            });

            return genreList;
        }
    },
    watch: {
        gamesLoaded(newValue, oldValue) {
            this.getPlatformIds();
            this.getMediaIds();
            this.$nextTick(function() { this.sortedBy = this.sortBy[0].value });
        }
    }
}
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------

.games__form {
    
}

// ---------------------------------------------
// Element
// ---------------------------------------------

.games__labels {
    grid-column-start: 1;
}

.games__input {
    grid-column-start: 2;
}

.games__nav-view {
    display: flex;
    margin: 0 0 20px 0;

    button:first-child {
        margin-right: auto;
    }

    button + button {
        margin-left: 10px;
    }
}

.games__fieldset {
    padding: 10px 15px;
    border: 3px solid map-get($colors, 01);
}

.games__legend {
    font-weight: 300;
    font-size: 26px;
    padding-left: 10px;
    padding-right: 10px;
    color: map-get($colors, 01);
	font-family: "Roboto", sans-serif;
}

.games__form-overflow {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 150px 1fr;
    height: 60vh;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 20px 20px 0 5px;
}

.games__listing {
    width: 100%;
    margin-top: 40px;
    font-weight: 300;
	font-family: "Roboto", sans-serif;
    border: 3px solid map-get($colors, 02);

    tr:nth-child(even) td {
        background-color: map-get($colors, 05);
    }

    th,
    td {
        padding: 10px 15px;
    }

    th {
        font-size: 20px;
        text-align: left;
        color: white;
        background-color: map-get($colors, 02);
    }    

    td {
        color: map-get($colors, 03);
    }
}

.games__poster-img {
    width: 200px;
    height: auto;
}

.games__delete-button {
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
}

.games__form-buttons {
    padding-top: 10px;
    grid-column: span 2;
}

.games__genres {
    min-height: 250px;
}

.games__form-error {
    grid-column: 2;
	display: block;
    margin: 0;
	color: red;
    font-weight: 300;
	font-family: "Roboto", sans-serif;
	@include align-self(center);
}

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

.sub-heading {
    grid-column-start: 1;
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------

.app__container {
    max-width: none;
	margin-left: 4em;
	margin-right: 4em;
}

</style>