import Vue, {PluginObject, } from 'Vue'
import {Osu} from './osu'

export interface VuePluginOptions {

}

export interface VueOsePlugin extends PluginObject<VuePluginOptions> {
    init(): Promise<void>,
    install: (vue: typeof Vue, options?: VuePluginOptions)=> void,
    osu?: Osu,
}

export const vueOsuPlugin: VueOsePlugin = {
    async init() {
        if (this.osu === void 0)
            this.osu = await Osu.getInstance();
    },

    install(vue: typeof Vue, options?: VuePluginOptions) {
        if (this.osu !== void 0)
            vue.osu = this.osu;
        else
            throw new Error('[osu-plugin] vueOsuPlugin must be called before Vue.use(vueOsuPlugin)');
    },

    osu: undefined
};