<template lang="pug">
    .window-title
        .window-title--icon
        .window-title--text
        .window-title--buttons
            button.window-title--buttons-minimize 🗕
            button.window-title--buttons-maximmize 🗖
            button.window-title--buttons-close ×
</template>

<script lang="ts">
    export default {
        name: "window-title"
    }
</script>

<style lang="stylus" scoped>
@import 'styles/palette'

.window-title
    display flex
    flex-direction row
    align-items stretch
    height 32px
    width 100%
    background-color color-main
    -webkit-app-region drag
    -webkit-user-select none

    &--text
        flex 1 1 auto

    &--buttons
        display flex
        flex-direction row
        align-items stretch
        -webkit-app-region no-drag

        >button
            background none
            color white
            border 0
            outline 0
            transition background 0.3s
            padding 0 10px

            &:hover
                background rgba(255, 255, 255, 0.1)

            &:active
                background rgba(0, 0, 0, 0.1)
</style>