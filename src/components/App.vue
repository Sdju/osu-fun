<template lang="pug">
    #app {{path}}
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class App extends Vue {
        get path() {
            return this.$store.state.osuPath;
        }

        mounted() {
            if (this.$store.state.osuPath === '') {
                this.$store.commit('setOsuPath', Vue.osu.path);
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>