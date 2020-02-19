<template>
    <table
        cellspacing="0"
        class="games__listing">
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Platform</th>
                <th>Media</th>
                <th>Genre</th>
                <th>Purchase price</th>
                <th>Purchase year</th>
                <th>Publication year</th>
                <th>PSN game</th>
                <th>PSVR game</th>
                <th>Subscription based</th>
                <th>Finished</th>                    
                <th>Wishlist</th>
                <th>Comment</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody> 
            <tr
                v-for="game in games"
                :key="game.id">
                <td>
                    <img 
                        :src="game.posterImg" 
                        :alt="game.title"
                        class="games__poster-img">
                </td>
                <td><strong>{{ game.title }}</strong></td>
                <td>{{ platformType[game.platformId].shortTitle }}</td>
                <td>{{ mediaType[game.mediaId].title }}</td>
                <td>
                    <ul>
                        <li 
                            v-for="genreId in game.genreIds"
                            :key="genreId">
                            {{ genreType[genreId].shortTitle }}
                        </li>
                    </ul>
                </td>
                <td>{{ game.purchasePrice | euroCurrency }}</td>
                <td>{{ game.purchaseYear }}</td>
                <td>{{ game.publicationYear }}</td>
                <td>{{ game.isPSN ? "PSN" : "-" }}</td>
                <td>{{ game.isPSVR ? "PSVR" : "-" }}</td>
                <td>{{ game.isSubscriptionBased ? "Subscription" : "-" }}</td>
                <td>{{ game.isFinished ? "Finished!!" : "Not finished" }}</td>                    
                <td>{{ game.isOnWishList ? "Yes" : "-" }}</td>                    
                <td>{{ game.comment }}</td>
                <td>
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
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
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
        },
    }
}
</script>

<style lang="scss">

</style>