<template>
    <div class="v-image-area">
        <img class="v-image-area__image" :src="newImage ? newImage : img ? '/uploads/images/' + img : require('@/assets/images/add-image.jpg')"
             alt="ImageArea">
        <input class="v-image-area__input" id="file-image" @change="onNewFile" type="file" accept="image/jpeg, image/png, image/gif" multiple="multiple">
        <label class="v-image-area__label" :class="{'v-image-area__label_bg' : !img}" for="file-image" >
            <i class="el-icon-plus"/> {{img ? 'Обновить' : 'Добавить'}} фотографию
        </label>
    </div>
</template>

<script>
    export default {
        name: "v-image-area",
        props: {
          img: {
              type: String,
              default: ''
          }
        },
        data() {
            return {
                newImage: ''
            }
        },
        methods: {
            onNewFile(event) {
                let img = event.target.files[0]
                let filename = img.name
                if (filename.lastIndexOf('.') <= 0)
                    return alert("Выберите файл изображения!")
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => this.newImage = fileReader.result)
                fileReader.readAsDataURL(img)
                this.$emit('image', img)
            }
        }
    }
</script>

<style lang="scss">
    .v-image-area {
        position: relative;
        margin: 0 auto;
        height: 250px;
        width: 250px;

        &__image {
            height: 250px;
            width: 250px;
            border-radius: 5px;
        }

        &__input {
            display: none;
        }

        &__label {
            background: rgba($active-color, 0.5);
            color: $white-color;
            text-align: center;
            font-size: 1rem;
            padding: $padding*2 0;
            margin: 0;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            cursor: pointer;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            &_bg {
                background: rgba($active-color, 1);
            }
        }
    }
</style>