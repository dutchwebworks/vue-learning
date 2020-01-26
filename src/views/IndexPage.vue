<template>
	<main class="overview">
		<nav class="overview__nav">			
			<router-link
				tag="div"
				:to="{ name: 'NavButtonsPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Nav. buttons
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'VuexCounterPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Vuex counter
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'BuyCardsPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Buy cards
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'TabsPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Tabs
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'CustomDirectivesPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Custom Directives
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'VuelidatePage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Vuelidate
			</router-link>
			<router-link tag="div"
				:to="{ name: 'ArraySortingPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Array sorting
			</router-link>
			<router-link tag="div"
				:to="{ name: 'Faq' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				FAQ
			</router-link>
			<router-link tag="div"
				:to="{ name: 'MoviesPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Movies
			</router-link>
			<router-link tag="div"
				:to="{ name: 'FormModulesPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Form modules
			</router-link>
			<router-link tag="div"
				:to="{ name: 'ModalPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Modal
			</router-link>
			<router-link tag="div"
				:to="{ name: 'TvShowsPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Tv Shows
			</router-link>
			<router-link tag="div"
				:to="{ name: 'GsapPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				GSAP Animation
			</router-link>
			<router-link tag="div"
				:to="{ name: 'MethodPropPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Method Prop
			</router-link>
			<router-link tag="div"
				:to="{ name: 'UsersPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Users
			</router-link>
		</nav>

		<p class="overview__logo">
			<img src="@/assets/img/vuejs-logo.png" alt="Vue logo" class="overview__logo-img">
		</p>

		<hr>

		<h3 class="heading">Featured movie of the minute</h3>

		<MovieFeatured :movie="featuredMovie"/>
	</main>
</template>

<script>
import { mapGetters } from "vuex";
import MovieFeatured from "@/components/MovieFeatured";	

export default {
	components: {
		MovieFeatured
	},
	computed: {
		...mapGetters("Movies", {
			movies: "movies"
		}),
		featuredMovie() {
			let randomMovie = this.movies[Math.floor(Math.random()*this.movies.length)];
			return this.$store.getters["Movies/movie"](randomMovie.id);
		}
	}
}
</script>

<style lang="scss">
.overview__nav {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
	grid-auto-rows: 175px;

	> div {
		@include flexbox;
		@include flex-direction(column);
		@include justify-content(center);
		@include align-items(center);
		border-radius: $border-radius;
		text-align: center;
		font-weight: 700;
		font-size: 24px;
		color: white;
		cursor: pointer;
		font-family: $font-custom;
		transition: background-color .3s, font-size .3s;
		background-color: map-get($colors, 01);

		&:hover {
			font-size: 30px;
			background-color: map-get($colors, 02);
		}
	}
}

.overview__logo {
	text-align: center;
}

.overview__logo-img {
	width: 200px;
	height: auto;
}
</style>
