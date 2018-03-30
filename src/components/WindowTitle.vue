<template lang="pug">
    .window-title
        .window-title--icon
        .window-title--text {{_title}}
        .window-title--buttons
            button.window-title--buttons-minimize(v-on:click="minimize") 🗕
            button.window-title--buttons-maximmize(v-on:click="maximize") {{maximazeSymbol}}
            button.window-title--buttons-close(v-on:click="close") ×
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    const MaximazeState = {
        max: '🗖',
        unmax: '🗗'
    };

    @Component
    export default class WindowTitle extends Vue {
        @Prop()
        title?: string;

        get _title() {
            return this.$store.state.window.title;
        }

        maximazeSymbol: string = MaximazeState.max;

        minimize() {
            Vue.electron.minimize();
        }

        maximize() {
            if (Vue.electron.isMaximized()) {
                Vue.electron.unmaximize();
                this.maximazeSymbol = MaximazeState.max;
            } else {
                Vue.electron.maximize();
                this.maximazeSymbol = MaximazeState.unmax;
            }
        }

        close() {
            Vue.electron.close();
        }

        mounted() {
            console.log(Vue.electron);
            this.maximazeSymbol = (Vue.electron.isMaximized())? MaximazeState.unmax : MaximazeState.max;
        }
    }
</script>

<style lang="stylus" scoped>
@import 'styles/palette'

window-title-height = 32px
.window-title
    display flex
    flex-direction row
    align-items stretch
    height window-title-height
    width 100%
    background-color color-main
    -webkit-app-region drag
    -webkit-user-select none

    &--text
        flex 1 1 auto
        color white
        line-height window-title-height
        padding-left 10px

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