<template>
    <el-card v-if="car.id !== undefined" class="v-car-show">
        <div class="v-car-show__info">
            <h3 class="info__name">Марка: {{car.mark}}</h3>
            <p class="info__number">Номер: {{car.number}} </p>
            <p class="info__type">Вид топливо:
                <span class="el-tag el-tag--primary"
                      :class="[car.type === 'АИ-92' ? 'el-tag--primary' : 'el-tag--success']">
                    {{car.type}}
                </span>
            </p>
            <div class="info__action">
                <router-link class="action__edit" :to="{name: 'carUpdate', params: {id: car.id}}">
                    Редактировать <span><i class="el-icon-edit-outline"/></span>
                </router-link>
            </div>
        </div>
        <img v-if="car.img !== undefined" class="v-car-show__image" :src="'/uploads/images/'+ car.img" alt="Img">

    </el-card>
</template>

<script>
    import {mapActions}  from 'vuex'
    export default {
        name: "v-car-show",
        computed: {
            car() {
                return this.$store.getters.CAR_ID(parseInt(this.$route.params.id)) // -> { id: 2, name: '...', done: false }
            }
        },
        methods: {
            ...mapActions([
                'GET_CAR'
            ]),
        },
        mounted() {
            this.GET_CAR(parseInt(this.$route.params.id))
        }
    }
</script>

<style lang="scss">
    .v-car-show {
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
    }
</style>