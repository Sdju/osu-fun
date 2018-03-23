import {app, BrowserWindow} from 'electron'
import * as path from 'path'
import * as url from 'url'

app.on('ready', () => {
   const win = new BrowserWindow({width: 800, height: 600});

   win.loadURL(url.format({
       pathname: path.join(__dirname, 'view', 'index.html'),
       protocol: 'file:',
       slashes: true
   }));
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});