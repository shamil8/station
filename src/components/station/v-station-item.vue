<template>
    <el-card class="v-station-item" :body-style="{ padding: '0px' }">
        <div class="v-station-item__action">
            <router-link class="action__edit" :to="{name: 'stationUpdate', params: {id: station.id}}">
                <i class="el-icon-edit-outline"/>
            </router-link>
            <span @click="$emit('removeStation')" class="action__delete">
                <i v-if="index !== loading" class="el-icon-delete"/>
                <i v-else class="el-icon-loading"/>
            </span>
        </div>
            <img v-if="station.img !== undefined" class="v-station-item__image" :src="'/uploads/images/'+ station.img" alt="Img">
        <div class="v-station-item__info">
            <router-link class="info__title" :to="{name: 'stationShow', params: {id: station.id}}">
                {{station.name}} <span><i class="el-icon-view"/></span>
            </router-link>
            <p class="info__address">{{station.address}}</p>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "v-station-item",
        props: {
            station: Object,
            loading: Number,
            index: Number
        }
    }
</script>

<style lang="scss">
    .v-station-item {
        background:$white-color;
        position: relative;

        &__image {
            width: 100%;
            max-height: 160px;
        }

        &__info, .info {
            padding: $padding*3 $padding;
            text-align: left;

            &__title {
                font-size: 1.2rem;
                font-weight: bold;
                text-align: left;
                color: $black-color;
                cursor: pointer;
                text-decoration: none;
                &:hover {
                    transition: 0.3s;
                    color: $active-color;
                }
            }
            &__address {
                margin-top: $margin*2;
                color: $grey-color;
                font-size: 0.8rem;
            }
        }

        &__action, .action {
            background: rgba($black-color,0.5);
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            padding: $padding/2;
            border-radius: 0.2rem;

            &__edit, &__delete {
                cursor: pointer;
                color: $white-color;
                &:hover {
                    transition: 0.3s;
                    color: $danger-color;
                }
            }

            &__edit {
                margin-right: $margin;
                &:hover {
                    color: $primary-color;
                }
            }
        }

    }
</style>