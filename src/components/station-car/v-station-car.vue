<template>
    <div class="v-station-car">
        <e-card-refueled />

        <e-card-table />
    </div>
</template>

<script>
    import eCardTable from './e-card-table'
    import eCardRefueled from './e-card-refueled'

    export default {
        name: "v-station-car",
        components: {
            eCardTable,
            eCardRefueled
        }
    }
</script>

<style lang="scss">
    .v-station-car {

    }
</style>