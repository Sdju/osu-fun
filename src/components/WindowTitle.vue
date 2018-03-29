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
    height 32px
    width 100%
    background-color color-main
</style>