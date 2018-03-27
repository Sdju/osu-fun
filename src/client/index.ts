import Vue from 'vue'
import {Store, StoreOptions, Plugin, install as VuexPlugin} from 'vuex'
import App from '../components/App.vue'

import {RootState} from './State'
import {aBind} from './atools'

aBind(async ()=> {

    Vue.config.productionTip = false;
    Vue.use(VuexPlugin);
    const store:Store<RootState> = new Store<RootState>({
        mutations: {
            setOsuPath(state: RootState, path: string): RootState {
                const newState: RootState = state;
                newState.osuPath = path;
                return newState;
            }
        },
        state: {
            osuPath: ''
        }
    });

    new Vue({
        render: h=>h(App),
        store,
    }).$mount('#app');
});