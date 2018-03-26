/**
 * Static vuex typings copied from ones included in node_modules.
 *
 * We need to do this in order to get typings for this.$store in components.
 * Once this Feature is added, we can remove this + the custom mapping in tsconfig.json
 * https://github.com/vuejs/vuex/issues/994
 */
import Vue, { WatchOptions } from 'vue';

type Dictionary<T> = { [key: string]: T };
type Computed = () => any;
type MutationMethod = (...args: any[]) => void;
type ActionMethod = (...args: any[]) => Promise<any>;

interface Mapper<R> {
    (map: string[]): Dictionary<R>;
    (map: Dictionary<string>): Dictionary<R>;
}

interface MapperWithNamespace<R> {
    (namespace: string, map: string[]): Dictionary<R>;
    (namespace: string, map: Dictionary<string>): Dictionary<R>;
}

interface FunctionMapper<F, R> {
    (map: Dictionary<(this: typeof Vue, fn: F, ...args: any[]) => any>): Dictionary<R>;
}

interface FunctionMapperWithNamespace<F, R> {
    (
        namespace: string,
        map: Dictionary<(this: typeof Vue, fn: F, ...args: any[]) => any>
    ): Dictionary<R>;
}

interface MapperForState {
    <S>(
        map: Dictionary<(this: typeof Vue, state: S, getters: any) => any>
    ): Dictionary<Computed>;
}

interface MapperForStateWithNamespace {
    <S>(
        namespace: string,
        map: Dictionary<(this: typeof Vue, state: S, getters: any) => any>
    ): Dictionary<Computed>;
}

interface NamespacedMappers {
    mapState: Mapper<Computed> & MapperForState;
    mapMutations: Mapper<MutationMethod> & FunctionMapper<Commit, MutationMethod>;
    mapGetters: Mapper<Computed>;
    mapActions: Mapper<ActionMethod> & FunctionMapper<Dispatch, ActionMethod>;
}

export declare const mapState: Mapper<Computed>
    & MapperWithNamespace<Computed>
    & MapperForState
    & MapperForStateWithNamespace;

export declare const mapMutations: Mapper<MutationMethod>
    & MapperWithNamespace<MutationMethod>
    & FunctionMapper<Commit, MutationMethod>
    & FunctionMapperWithNamespace<Commit, MutationMethod>;

export declare const mapGetters: Mapper<Computed>
    & MapperWithNamespace<Computed>;

export declare const mapActions: Mapper<ActionMethod>
    & MapperWithNamespace<ActionMethod>
    & FunctionMapper<Dispatch, ActionMethod>
    & FunctionMapperWithNamespace<Dispatch, ActionMethod>;

export declare function createNamespacedHelpers(namespace: string): NamespacedMappers;

export declare class Store<S> {
    constructor(options: StoreOptions<S>);

    readonly state: S;
    readonly getters: any;

    replaceState(state: S): void;

    dispatch: Dispatch;
    commit: Commit;

    subscribe<P extends MutationPayload>(fn: (mutation: P, state: S) => any): () => void;
    watch<T>(getter: (state: S) => T, cb: (value: T, oldValue: T) => void, options?: WatchOptions): () => void;

    registerModule<T>(path: string, module: Module<T, S>): void;
    registerModule<T>(path: string[], module: Module<T, S>): void;

    unregisterModule(path: string): void;
    unregisterModule(path: string[]): void;

    hotUpdate(options: {
        actions?: ActionTree<S, S>;
        mutations?: MutationTree<S>;
        getters?: GetterTree<S, S>;
        modules?: ModuleTree<S>;
    }): void;
}

export declare function install(Vue: any): void;

export interface Dispatch {
    (type: string, payload?: any, options?: DispatchOptions): Promise<any>;
    <P extends Payload>(payloadWithType: P, options?: DispatchOptions): Promise<any>;
}

export interface Commit {
    (type: string, payload?: any, options?: CommitOptions): void;
    <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

export interface ActionContext<S, R> {
    dispatch: Dispatch;
    commit: Commit;
    state: S;
    getters: any;
    rootState: R;
    rootGetters: any;
}

export interface Payload {
    type: string;
}

export interface MutationPayload extends Payload {
    payload: any;
}

export interface DispatchOptions {
    root?: boolean;
}

export interface CommitOptions {
    silent?: boolean;
    root?: boolean;
}

export interface StoreOptions<S> {
    state?: S;
    getters?: GetterTree<S, S>;
    actions?: ActionTree<S, S>;
    mutations?: MutationTree<S>;
    modules?: ModuleTree<S>;
    plugins?: Plugin<S>[];
    strict?: boolean;
}

export type Getter<S, R> = (state: S, getters: any, rootState: R, rootGetters: any) => any;
export type Action<S, R> = (injectee: ActionContext<S, R>, payload: any) => any;
export type Mutation<S> = (state: S, payload: any) => any;
export type Plugin<S> = (store: Store<S>) => any;

export interface Module<S, R> {
    namespaced?: boolean;
    state?: S | (() => S);
    getters?: GetterTree<S, R>;
    actions?: ActionTree<S, R>;
    mutations?: MutationTree<S>;
    modules?: ModuleTree<R>;
}

export interface GetterTree<S, R> {
    [key: string]: Getter<S, R>;
}

export interface ActionTree<S, R> {
    [key: string]: Action<S, R>;
}

export interface MutationTree<S> {
    [key: string]: Mutation<S>;
}

export interface ModuleTree<R> {
    [key: string]: Module<any, R>;
}

/**
 * Augment Vue typings so we can get typings for this.$store
 */
