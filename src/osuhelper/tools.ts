import Registry from "winreg";

export async function getOsuPath(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const regKey: Registry.Registry = new Registry({hive: Registry.HKCR, key: '\\Local Settings\\Software\\Microsoft\\Windows\\Shell\\MuiCache'});
        regKey.values((err, result) => {
            if (err)
                reject(err);
            else {
                const osuPath: Registry.RegistryItem | undefined = result.find((el: Registry.RegistryItem) => el.value === 'osu!');
                resolve((osuPath !== void 0) ? osuPath.name.split('\\').slice(0, -1).join('\\') : '');
            }
        });
    });
}
