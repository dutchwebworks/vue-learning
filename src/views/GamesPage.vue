<template>
    <main class="games">
        <h1 class="heading">Games</h1>

        <div class="games__nav-view">
            <button 
                @click="switchView('GameCardGrid')"
                class="button button--01">
                Grid view
            </button>

            &nbsp;

            <button 
                @click="switchView('GameTable')"
                class="button button--01">
                Table view
            </button>
        </div>

        <p
            v-if="games.length == 0"
            class="games__loading paragraph">Loading games from Firebase &hellip;</p>

        <component
            v-else
            :is="gameView"
            :games="games"
            :platformType="platformType"
            :genreType="genreType"
            :mediaType="mediaType"
            @editGame="editGame"
            @deleteGame="deleteGame">
        </component>

        <h2 class="sub-heading">Manage games</h2>
        
        <fieldset class="games__fieldset">
            <legend class="games__legend paragraph">Manage games</legend>

            <form 
                @submit.prevent="onSubmit"
                class="games__form">

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
                    Purchase price:
                </label>

                <input
                    type="number"
                    v-model.number="editItem.purchasePrice"
                    class="games__input paragraph">
                
                <label
                    class="games__labels paragraph">
                    Purchase year:
                </label>

                <input
                    type="number"
                    v-model.number="editItem.purchaseYear"
                    class="games__input paragraph">
                
                <label
                    class="games__labels paragraph">
                    Publication year:
                </label>

                <input
                    type="number"
                    v-model.number="editItem.publicationYear"
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

                <label
                    class="games__labels paragraph">
                    Poster image:
                </label>

                <input
                    type="text"
                    v-model="editItem.posterImg"
                    class="games__input paragraph">

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
        </fieldset>
    </main>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { db } from "@/firebase";
import { gamesRef } from "@/firebase";
import GameCardGrid from "@/components/GameCardGrid";
import GameTable from "@/components/GameTable";

export default {
    components: {
        GameCardGrid,
        GameTable
    },
    data() {
        return {
            gameView: "GameCardGrid",
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
                isSubscriptionBased: false,
                isFinished: false,
                isOnWishList: false,
                posterImg: "",
                comment: ""
            }            
        }
    },
    created() {
        gamesRef.on("child_added", snapshot => this.games.push({...snapshot.val(), id: snapshot.key }));

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
            this.editItem.isSubscriptionBased = game.isSubscriptionBased;
            this.editItem.isFinished = game.isFinished;
            this.editItem.isOnWishList = game.isOnWishList;
            this.editItem.posterImg = game.posterImg;
            this.editItem.comment = game.comment;
        },
        updateGame() {
            gamesRef.child(this.editingGame.id).update({
                title: this.editItem.title,
                platformId: this.editItem.platformId,
                mediaId: this.editItem.mediaId,
                genreIds: this.editItem.genreIds,
                purchasePrice: this.editItem.purchasePrice || "",
                purchaseYear: this.editItem.purchaseYear || "",
                publicationYear: this.editItem.publicationYear || "",
                isPSN: this.editItem.isPSN,
                isPSVR: this.editItem.isPSVR,
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
            this.editItem.isSubscriptionBased = false,
            this.editItem.isFinished = false,
            this.editItem.isOnWishList = false,
            this.editItem.posterImg = ""
            this.editItem.comment = ""

            this.$refs.title.focus();
            // this.$nextTick(() => { this.$v.$reset() })
        },
        switchView(componentName) {
            this.gameView = componentName;
        }
    }
}
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------

.games__form {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 150px 1fr;
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
    margin: 0 0 20px 0;
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
    grid-column: span 2;
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

// ---------------------------------------------
// Modifier
// ---------------------------------------------

.app__container {
    max-width: none;
	margin-left: 4em;
	margin-right: 4em;
}

</style>