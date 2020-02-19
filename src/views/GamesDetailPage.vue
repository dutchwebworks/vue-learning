<template>
    <div class="games-detail">
        <h1>{{ game.title }}</h1>

        <div>
            <img :src="game.posterImg" :alt="game.title">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            game: this.$route.params
        }
    }
}
</script>

<style lang="scss">

</style>