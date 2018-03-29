<template lang="pug">
    #app
        WindowTitle
        .view-area
            | {{path}}
            .song(v-for="song in songs")
                | {{song}}
                br/
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {aBind} from '../client/atools'
    import {Song} from "../osuhelper";
    import WindowTitle from './WindowTitle.vue'

    @Component({
        components: {
            WindowTitle
        }
    })
    export default class App extends Vue {
        get path() {
            return this.$store.state.osuPath;
        }

        get songs() {
            return this.$store.state.osuSongs.map((e: Song)=> e.name);
        }

        mounted() {
            aBind(async ()=> {
                if (this.$store.state.osuPath === '') {
                    this.$store.commit('setOsuPath', Vue.osu.path);
                }
                console.log(this.$store.state.osuSongs);
                if (this.$store.state.osuSongs.length === 0) {
                    this.$store.commit('setOsuSongs', await Vue.osu.songs);
                }
            });
        }
    }
</script>

<style lang="stylus">
body
    margin 0

#app
    height 100vh
    display flex
    flex-direction column
    align-items stretch
    justify-content stretch

.window-title
    flex-shrink 0

.view-area
    width 100%
    flex 1 1 auto
    overflow auto
</style>