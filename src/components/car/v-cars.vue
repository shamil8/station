<template>
    <div class="v-cars">
        <el-button
                @click="$router.push({name: 'carNew'})"
                v-loading.fullscreen.lock="fullscreenLoading"
                class="v-cars__new"
        >
            <i class="el-icon-plus"/>
        </el-button>
        <v-car-item
                v-for="(car, index) in CARS"
                :key="car.id"
                :car="car"
                @removeCar="removeCar(index, car.id)"
        />
        <el-dialog
                :visible.sync="centerDialogVisible">
            <span>Все данные по данной машине будут удалены, <br> Вы уверены, что хотите удалить?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Отмена</el-button>
                <el-button type="danger" @click="removeCarDialog">Удалить</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import vCarItem from './v-car-item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-cars",
        data() {
            return {
                fullscreenLoading: true,
                centerDialogVisible: false,
                carIndex: null,
                carId: null
            }
        },
        computed: {
            ...mapGetters([
                'CARS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_CARS',
                'DELETE_CAR'
            ]),
            removeCar(index, id) {
                this.centerDialogVisible = true
                this.carIndex = index
                this.carId = id
            },
            removeCarDialog() {
                this.centerDialogVisible = false
                this.DELETE_CAR([this.carIndex, this.carId], )
            },
        },
        mounted() {
            this.GET_CARS()
                .then(res => {
                    if (res.data) this.fullscreenLoading = false
                })
        },
        components: {
            vCarItem
        }
    }
</script>

<style lang="scss">
    .v-cars {
        display: grid;
        padding: $padding*3;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 1rem;
        @media (max-width: 560px) {
            padding: $padding*2;
        }

        &__new {
            font-size: 55px;
            color: $grey-color;
        }
    }
</style>