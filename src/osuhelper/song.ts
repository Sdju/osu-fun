import {delimiter} from 'path'

export class Song {
    public static fromPath(path: string): Song {
        const instance = new Song();
        instance.path = path;
        const nameArray: Array<string> = instance.path.split(delimiter).slice(-1)[0].split(' ');
        instance.id = parseInt(nameArray[0]);
        instance.name = nameArray.slice(1).join(' ');
        return instance;
    }

    private constructor() {
        this.path = '';
        this.id = 0;
        this.name = '';
    }

    public path: string;
    public id: number;
    public name: string;
}