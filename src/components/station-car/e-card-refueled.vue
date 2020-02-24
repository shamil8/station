<template>
    <el-card class="e-card-refueled" :body-style="{ padding: '0px' }">
        <h2 class="e-card-refueled__title">Заправить машину</h2>
        <el-select class="e-card-refueled__input_right" v-model="carStation.station" filterable placeholder="Заправочная станция">
            <el-option
                    v-for="station in STATIONS"
                    :key="station.id"
                    :label="station.name"
                    :value="station.id">
            </el-option>
        </el-select>
        <el-select class="e-card-refueled__input_right" v-model="carStation.car" filterable placeholder="Номер машины">
            <el-option
                    v-for="car in CARS"
                    :key="car.id"
                    :label="car.number"
                    :value="car.number"
            >
            </el-option>
        </el-select>
        <el-input class="e-card-refueled__quantity e-card-refueled__input_right" placeholder="Кол-во топливо (л)" v-model="carStation.quantity" type="number" maxlength="9"/>
        <el-date-picker
                class="e-card-refueled__input_right"
                v-model="carStation.date"
                type="date"
                placeholder="Дата заправки"
                :picker-options="pickerOptions"
        >
        </el-date-picker>
        <el-button @click="add" class="e-card-refueled__submit" type="primary" round>Добавить</el-button>
    </el-card>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "e-card-refueled",
        data() {
            return {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
                carStation: {}
            }
        },
        computed: {
            ...mapGetters([
                'STATIONS',
                'CARS',
            ])

        },
        methods: {
            ...mapActions([
                'GET_STATIONS',
                'GET_CARS',
                'POST_CAR_STATION'
            ]),
            add() {
                this.POST_CAR_STATION(this.carStation)
                    .then(() => {
                        this.carStation = {}
                    })
            }
        },
        mounted() {
            this.GET_STATIONS()
                .then(() => {
                    this.GET_CARS()
                        .then(res => {
                            if (res.data) this.fullscreenLoading = false
                        })
                })
        },
    }
</script>

<style lang="scss">
    .e-card-refueled {
        margin: $margin*3;
        padding: $padding*5/2;
        @media (max-width: 560px) {
            padding: $padding;
            margin: $margin*2;
        }

        &__title {
            color: $black-color;
            margin-top: $margin*3;
            font-size: 1.2rem;
            text-align: left;
        }

        &__quantity {
            width: 180px;
            @media (max-width: 560px) {
                width: 100%;
            }
        }

        &__input_right {
            margin-top: $margin*2;
            margin-right: $margin*2;
            @media (max-width: 560px) {
                margin-right: 0;
                margin-bottom: $margin*2;
                display: block;
            }
        }

        &__submit {
            margin-top: $margin*2;
            @media (max-width: 560px) {
                width: 100%;
            }
        }
    }
</style>