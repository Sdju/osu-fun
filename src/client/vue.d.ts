import {BrowserWindow} from 'electron';

declare module "vue/types/vue" {
    interface VueConstructor {
        electron: BrowserWindow;
    }
}