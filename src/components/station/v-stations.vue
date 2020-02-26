<template>
    <div class="v-stations">
        <el-button
                @click="$router.push({name: 'stationNew'})"
                v-loading.fullscreen.lock="fullscreenLoading"
                class="v-stations__new"
        >
            <i class="el-icon-plus"/>
        </el-button>
        <v-station-item
                v-for="(station, index) in STATIONS"
                :key="station.id"
                :station="station"
                :index="index"
                :loading="loading"
                @removeStation="removeStation(index, station.id)"
        />
        <el-dialog
                :visible.sync="centerDialogVisible">
            <span>Все данные по данному станцию будут удалены, <br> Вы уверены, что хотите удалить?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Отмена</el-button>
                <el-button type="danger" @click="removeStationDialog">Удалить</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import vStationItem from './v-station-item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-stations",
        data() {
            return {
                fullscreenLoading: true,
                centerDialogVisible: false,
                stationIndex: null,
                stationId: null,
                loading: -1
            }
        },
        computed: {
          ...mapGetters([
              'STATIONS'
          ])
        },
        methods: {
            ...mapActions([
                'GET_STATIONS',
                'DELETE_STATION'
            ]),
            removeStation(index, id) {
                this.centerDialogVisible = true
                this.stationIndex = index
                this.stationId = id
            },
            removeStationDialog() {
                this.centerDialogVisible = false
                this.loading = this.stationIndex
                this.DELETE_STATION([this.stationIndex, this.stationId], )
                    .then(() => this.loading = -1)
            },
        },
        mounted() {
            this.GET_STATIONS(2)
                .then(res => {
                    if (res.data) this.fullscreenLoading = false
                })
        },
        components: {
            vStationItem
        }
    }
</script>

<style lang="scss">
    .v-stations {
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