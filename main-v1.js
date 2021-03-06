/**
 * 在 App 内打开
 */

// Modules to control application life and create native browser window
const { app, BrowserWindow, BrowserView, screen } = require('electron')
const path = require('path')

async function createServer() {
    const { fork } = require('child_process')
    const ps = fork(path.join(__dirname, 'server.js'))
}

async function createWindow() {
    // Create the browser window.
    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    const mainWindow = new BrowserWindow({
        width,
        height,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    const view = new BrowserView()
    mainWindow.setBrowserView(view)
    view.setBounds({ x: 0, y: 0, width, height })
    view.setAutoResize({
        width: true,
        height: true,
    })
    view.webContents.loadURL('http://127.0.0.1:8082/lab/')
}


let mainWindow;

(async () => {
    await app.whenReady();
    await createServer()
    await createWindow()

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