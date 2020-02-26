<template>
    <div class="v-car-item">
        <el-card class="v-car-item" :body-style="{ padding: '0px' }">
            <div class="v-car-item__action">
                <router-link class="action__edit" :to="{name: 'carUpdate', params: {id: car.id}}">
                    <i class="el-icon-edit-outline"/>
                </router-link>
                <span @click="$emit('removeCar')" class="action__delete">
                    <i v-if="index !== loading" class="el-icon-delete"/>
                    <i v-else class="el-icon-loading"/>
                </span>
            </div>
            <img
                    v-if="car.img !== undefined"
                    :src="'/uploads/images/'+ car.img"
                    class="v-car-item__image"
                    alt="Img"
            >
            <div class="v-car-item__info">
                <router-link class="info__title" :to="{name: 'carShow', params: {id: car.id}}">
                    {{car.mark}} <span><i class="el-icon-view"/></span>
                </router-link>
                <p class="info__address">Номер: {{car.number}}</p>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "v-car-item",
        props: {
            car: Object,
            loading: Number,
            index: Number
        }
    }
</script>

<style lang="scss">
    .v-car-item {
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