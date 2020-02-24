<template>
    <el-card v-if="car.id !== undefined || $route.name === 'carNew'" class="v-car-update">
        <div class="v-car-update__info">
            <el-input class="info__name" placeholder="Марка" v-model="car.mark"/>
            <el-input class="info__number" placeholder="Номер" v-model="car.number" maxlength="11"/>
            <div class="info__type">
                <span class="type__span">Вид топливо:</span>
                <el-radio v-model="car.type" label="АИ-92" border>АИ-92</el-radio>
                <el-radio v-model="car.type" label="АИ-95" border>АИ-95</el-radio>
            </div>
        </div>
        <v-image-area
                :img="car.img"
                @image="newImage"
        />
        <el-button @click="updateCar" class="v-car-update__submit" type="primary" round>Сохранить</el-button>
    </el-card>
</template>

<script>
    import vImageArea  from '../v-image-area'
    import {mapActions}  from 'vuex'

    export default {
        name: "v-car-update",
        data() {
            return {}
        },
        computed: {
            car() {
                return this.$store.getters.CAR_ID(parseInt(this.$route.params.id))
            }
        },
        methods: {
            ...mapActions([
                'GET_CAR',
                'UPDATE_CAR',
                'POST_CAR'
            ]),
            newImage() {
                // this.newImgArea = image
            },
            updateCar() {
                if (this.car.id)
                    this.UPDATE_CAR(this.car)
                        .then(res => {
                            this.$router.push({name: 'carShow', params: {id: res.data.id}})
                        })

                else   // Create car
                    this.POST_CAR(this.car)
                        .then(res => {
                            this.$router.push({name: 'carShow', params: {id: res.data.id}})
                        })
            }
        },
        mounted() {
            if (this.$route.name === 'carUpdate')
                this.GET_CAR(parseInt(this.$route.params.id))
        },
        components: {
            vImageArea
        }
    }
</script>

<style lang="scss">
    .v-car-update {
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

            .info__type {
                margin: $margin 0 $margin*3;
                font-size: 0.8rem;

                .type__span {
                    margin-right: $margin;
                    @media (max-width: 560px) {
                        display: block;
                        margin-bottom: $margin*2;
                    }
                }

                .el-radio {
                    margin-right: $margin;

                }
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