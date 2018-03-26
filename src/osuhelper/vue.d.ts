import {Osu} from "./osu";

declare module "vue/types/vue" {
    interface VueConstructor {
        osu: Osu;
    }
}