export function aBind(f: Function, ...params: Array<any>) {
    f(...params).catch((reason: any) => {
        console.error(reason)
    });
}