<template>
    <el-card v-if="station.id !== undefined || $route.name === 'stationNew'" class="v-station-update">
        <div class="v-station-update__info">
            <el-input class="info__name" placeholder="Названия станции" v-model="station.name"/>
            <el-input class="info__company" placeholder="Компания" v-model="station.company"/>
            <el-input class="info__address" placeholder="Адрес" v-model="station.address"/>
            <div class="block">
                <el-date-picker
                        v-model="station.date"
                        type="date"
                        placeholder="Дата открытия"
                        :picker-options="pickerOptions"
                >
                </el-date-picker>
            </div>
        </div>
        <v-image-area
                :img="station.img"
                @image="newImage"
        />

        <el-button
                v-if="$route.name === 'stationNew'"
                :loading="loadingBtn"
                @click="updateStation"
                class="v-station-update__submit"
                type="success"
                round
        >
            Создать
        </el-button>
        <el-button
                v-else
                @click="updateStation"
                :loading="loadingBtn"
                class="v-station-update__submit"
                type="primary"
                round
        >
            Сохранить
        </el-button>
    </el-card>
</template>

<script>
    import vImageArea  from '../v-image-area'
    import {mapActions}  from 'vuex'

    export default {
        name: "v-station-update",
        data() {
            return {
                loadingBtn: false,
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
            }
        },
        computed: {
            station() {
                return this.$store.getters.STATION_ID(parseInt(this.$route.params.id))
            }
        },
        methods: {
            ...mapActions([
                'GET_STATION',
                'UPDATE_STATION',
                'POST_STATION'
            ]),
            newImage() {
                // this.newImgArea = image
            },
            updateStation() {
                this.loadingBtn = true
                if (this.station.id)
                    this.UPDATE_STATION(this.station)
                        .then(res => {
                            this.loadingBtn = false
                            this.$router.push({name: 'stationShow', params: {id: res.data.id}})
                        })
                else   // Create station
                    this.POST_STATION(this.station)
                        .then(res => {
                            this.loadingBtn = false
                            this.$router.push({name: 'stationShow', params: {id: res.data.id}})
                        })
            }
        },
        mounted() {
            if (this.$route.name === 'stationUpdate')
                this.GET_STATION(parseInt(this.$route.params.id))
        },
        components: {
            vImageArea
        }
    }
</script>

<style lang="scss">
    .v-station-update {
        margin: $margin*3;
        max-width: 800px;
        @media (max-width: 560px) {
            margin: $margin*2;
        }

        .el-card__body {       //Card body element ui
            display: grid;
            padding: $padding*3;
            margin: 0 auto;
            grid-gap: 24px;
            justify-content: space-between;
            @media (max-width: 768px) {
                justify-content: center;
                padding: $padding*2 $padding;
            }
        }
        &__info, {
            text-align: left;
            max-width: 450px;

            .el-input {
                margin: $margin 0;
            }
        }

        &__submit {
            width: 180px;
            margin: 0 auto;
            grid-column: span 2;
            @media (max-width: 768px) {
                grid-column: span 1;
            }
        }
    }
</style>