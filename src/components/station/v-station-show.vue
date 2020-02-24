<template>
    <el-card v-if="station.id !== undefined" class="v-station-show">
        <div class="v-station-show__info">
            <h3 class="info__name">Станция: {{station.name}}</h3>
            <p class="info__company">Компания: {{station.company}} </p>
            <p class="info__address">Адрес: {{station.address}}</p>
            <p class="info__date">Дата открытия: {{ typeof station.date === 'object'
                ? station.date.toLocaleDateString('ru-RU'): station.date }}</p>

            <div class="info__action">
                <router-link class="action__edit" :to="{name: 'stationUpdate', params: {id: station.id}}">
                    Редактировать <span><i class="el-icon-edit-outline"/></span>
                </router-link>
            </div>
        </div>
        <img v-if="station.img !== undefined" class="v-station-show__image" :src="'/uploads/images/'+ station.img" alt="Img">
<!--        <a class="v-station-show__maps" href="#maps">Показать на карте <i class="el-icon-arrow-down"/></a>-->
    </el-card>
</template>

<script>
    import {mapActions}  from 'vuex'
    export default {
        name: "v-station-show",
        computed: {
            station() {
                return this.$store.getters.STATION_ID(parseInt(this.$route.params.id)) // -> { id: 2, name: '...', company: false }
            }
        },
        methods: {
          ...mapActions([
              'GET_STATION'
          ]),
        },
        mounted() {
            this.GET_STATION(parseInt(this.$route.params.id))
        }
    }
</script>

<style lang="scss">
    .v-station-show {
        margin: $margin*3;
        max-width: 800px;
        @media (max-width: 560px) {
            margin: $margin*2;
        }

        .el-card__body {       //Card body element ui
            display: flex;
            padding: $padding*3;
            margin: 0 auto;
            flex-wrap: wrap;
            justify-content: space-between;
            @media (max-width: 768px) {
                justify-content: center;
                padding: $padding*2 $padding;
            }
        }
        &__image {
            max-width: 400px;
            @media (max-width: 550px) {
                max-width: 250px;
            }
            @media (max-width: 768px) {
                margin-top: $margin*3;
            }
        }
        &__info {
            text-align: left;

            h3 {
                color: $black-color;
                font-size: 1.2rem;
                padding-bottom: $padding;
            }
            p {
                margin-top: $margin;
                font-size: 1rem;
                color: $black-color;
            }
            .action__edit{
                display: block;
                margin: $margin 0;
                text-decoration: none;
                color: $success-color;
            }
        }

        &__maps {
            color: $grey-color;
            text-decoration: none;
            display: inline-block;
            @media (max-width: 768px) {
                display: none;
            }
        }
    }
</style>