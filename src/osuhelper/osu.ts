import {getOsuPath} from './tools'

export class Osu {
    public static async getInstance(): Promise<Osu> {
        if (Osu.instance instanceof Osu)
            return Osu.instance;
        const osu: Osu = new Osu();
        await osu.init();
        return osu;
    }

    public path: string;

    private async init() {
        this.path = await getOsuPath();
    }

    private constructor() {
        this.path = '';
    }

    protected static instance: Osu | undefined;
}