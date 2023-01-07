
<template>
    <header>
        <div class="masthead">
            <h1 class="masthead__title">Vue learning</h1>

            <img src="@/assets/logo.svg" width="125" height="125" alt="Vue logo" class="masthead__logo" />
        </div>

        <Menu />
    </header>
</template>

<script setup lang="ts">
import Menu from "@/components/TheMenu.vue";
</script>

<style scoped lang="scss">
header {
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--body-text-color);
}

.masthead {
    display: flex;
    justify-content: space-between;
}
.masthead__title {
    margin: 0;
    font-size: 4rem;
    color: var(--secondary-brand-color);
}
</style>
