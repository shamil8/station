<template>
    <div class="v-main-wrapper">
        <v-menu />
        <router-view />

    </div>
</template>

<script>
    import vMenu from "./layouts/v-menu"

    export default {
        name: 'v-main-wrapper',
        components: {
            vMenu
        },
        data() {
            return {
                title: 'Main wrapper'
            }
        }
    }
</script>

<style scoped>
    .v-main-wrapper {
        margin: 0 auto;
    }
</style>