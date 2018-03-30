import {Song} from '../osuhelper'

export interface WindowState {
    title: string,
}

export interface RootState {
    window: WindowState,
    osuPath: string,
    osuSongs: Array<Song>,
}