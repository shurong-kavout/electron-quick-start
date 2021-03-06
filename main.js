/**
 * 在浏览器打开
 */

// Modules to control application life and create native browser window
const { app, shell } = require('electron')
const path = require('path')
const LITE_PORT = 8082
const LITE_IDB = 'JupyterLite Storage'

async function createServer() {
    const { fork } = require('child_process')
    const child = fork(path.join(__dirname, 'server.js'))
    child.send({ LITE_PORT });
}

async function createWindow() {
    shell.openExternal(`http://127.0.0.1:${LITE_PORT}/lab/`)
}

let mainWindow;

(async () => {
    await app.whenReady();
    await createServer()
    await createWindow()
    await clearIndexedDB()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})();

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.