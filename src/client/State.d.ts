import {Song} from '../osuhelper'

export interface RootState {
    osuPath: string,
    osuSongs: Array<Song>,
}