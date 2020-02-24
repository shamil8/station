<template>
    <div class="v-menu">
        <el-menu
                :default-active="activeIndex"
                class="v-menu__el_menu"
                mode="horizontal"
                :router="true"
                @select="handleSelect"
        >
            <template v-for="item in items">
                <el-menu-item
                        :key="item.index"
                        :index="item.index"
                        :class="{'is-active': activeIndex === item.index}"
                >
                    {{item.text}}
                </el-menu-item>
            </template>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "v-menu",
        data() {
            return {
                activeIndex: '/',
                items: [
                    {
                        text: 'Главная',
                        index: '/'
                    },
                    {
                        text: 'Автомобили',
                        index: '/cars'
                    },
                    {
                        text: 'Станции',
                        index: '/stations'
                    },
                ]
            };
        },
        methods: {
            handleSelect() {}
        },
        mounted: function(){
            this.activeIndex = this.$route.path;
        },
        watch: {
            $route (to) {
                this.activeIndex = to.path;
            }
        },
    }
</script>

<style lang="scss">
    .v-menu {
        background: $white-color;
        &__el_menu {
            padding-left: $padding*3;
            .is-active {
                color: $active-color !important;
                border-bottom-color: $active-color !important;
            }
        }
    }
</style>