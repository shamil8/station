<template>
    <el-card class="e-card-table" :body-style="{ padding: '0px' }">
        <h2 class="e-card-table__title">Недавно заправленные машины</h2>
        <el-table
                v-loading="loading"
                class="e-card-table__table"
                :data="CAR_STATION"
                style="width: 100%"
                :default-sort = "{prop: 'date', order: 'descending'}"
        >
            <el-table-column
                    prop="mark"
                    label="Марка">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="Номер">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="Станция">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="Вид топливо"
                    :filters="[{ text: 'АИ-92', value: 'АИ-92' }, { text: 'АИ-95', value: 'АИ-95' }]"
                    :filter-method="filterTag"
            >
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.type === 'АИ-92' ? 'primary' : 'success'"
                            disable-transitions
                    >
                        {{scope.row.type}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    prop="quantity"
                    label="Кол-во топливо (л)">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="Адресс станции">
            </el-table-column>
            <el-table-column
                    prop="date"
                    sortable
                    label="Дата">
            </el-table-column>

        </el-table>

        <el-pagination
                class="e-card-table__pagination"
                background
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                @current-change="changePagination"
        />
    </el-card>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "e-card-table",
        data() {
            return {
                loading: false,
                total: 0,
                pageSize: 3
            }
        },
        computed: {
          ...mapGetters([
              'CAR_STATION'
          ])
        },
        methods: {
            ...mapActions([
               'GET_CAR_STATION'
            ]),
            filterTag(value, row) {
                return row.type === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            changePagination(page) {
                this.loading = true
                this.GET_CAR_STATION(page)
                    .then(res => {
                        this.total = res.data.total
                        this.loading = false
                    })
                    .catch(() => this.loading = true)
            }
        },
        mounted() {
            this.GET_CAR_STATION()
                .then(res => {
                    this.total = res.data.total
                })
        }
    }
</script>

<style lang="scss">
    .e-card-table {
        margin: $margin*3;
        padding: $padding*5/2;
        @media (max-width: 560px) {
            padding: $padding;
            margin: $margin*2;
        }

        &__title {
            color: $black-color;
            margin: $margin*3 0;
            font-size: 1.2rem;
            text-align: left;
        }
        &__table {
            padding: 0 $padding;
            @media (max-width: 560px) {
                padding: 0 $padding/4;;
            }
            .has-gutter {
                color: $black-color;
            }
        }
        &__pagination {
            text-align: right;
            margin: $margin*3 0 $margin;
        }
    }
</style>