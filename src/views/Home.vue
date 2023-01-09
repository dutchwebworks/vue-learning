<template>
    <main>
        <h1>Home</h1>

        <nav>
            <ul class="overview">
                <li class="overview__item"><RouterLink :to="{ name: 'catalog-overview' }">Routing</RouterLink></li>
                <li class="overview__item"><RouterLink :to="{ name: 'form-simple' }">Form simple</RouterLink></li>
                <li class="overview__item"><RouterLink :to="{ name: 'to-do' }">Todo</RouterLink></li>
            </ul>
        </nav>
    </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.overview {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    grid-auto-rows: 175px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.overview__item {
    margin: 0;
    text-align: center;
    cursor: pointer;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 1.2rem;
        color: white;
        text-decoration: none;
        border-radius: 10px;
        background-color: var(--primary-brand-color);
        transition: background-color .3s;

        &:hover {
            background-color: var(--secondary-brand-color);
        }
    }
}
</style>
