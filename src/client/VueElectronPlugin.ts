import Vue, {PluginObject, } from 'Vue'
import {BrowserWindow, remote} from 'electron'

export interface VuePluginOptions {

}

export interface VueElectronPlugin extends PluginObject<VuePluginOptions> {
    init(): Promise<void>,
    install: (vue: typeof Vue, options?: VuePluginOptions)=> void,
    electron?: BrowserWindow,
}

export const vueELectronPlugin: VueElectronPlugin = {
    async init() {
        console.log(remote.BrowserWindow.getFocusedWindow());
        if (this.electron === void 0)
            this.electron = remote.BrowserWindow.getFocusedWindow();
    },

    install(vue: typeof Vue, options?: VuePluginOptions) {
        if (this.electron !== void 0)
            vue.electron = this.electron;
        else
            throw new Error('[electron-plugin] vueElectronPlugin must be called before Vue.use(vueElectronPlugin)');
    },

    electron: undefined
};