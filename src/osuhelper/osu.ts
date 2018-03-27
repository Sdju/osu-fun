import {getOsuPath} from './tools'
import {Song} from './song'
import {join as pathJoin} from 'path'
import {readdir} from 'async-file'

export class Osu {
    public static async getInstance(): Promise<Osu> {
        if (Osu.instance instanceof Osu)
            return Osu.instance;
        const osu: Osu = new Osu();
        await osu.init();
        return osu;
    }

    public path: string;

    get songs(): Promise<Array<Song>> {
        return (async () => {
            const songsPath: string = pathJoin(this.path, 'Songs');
            const songsPaths = await readdir(songsPath);
            const pathToSong = async (songPath: string) => await Song.fromPath(pathJoin(songsPath, songPath));
            return await Promise.all(songsPaths.map(pathToSong));
        })();
    }

    private async init() {
        this.path = await getOsuPath();
    }

    private constructor() {
        this.path = '';
    }

    protected static instance: Osu | undefined;
}