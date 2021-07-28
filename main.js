/**
 * 在浏览器打开
 */
// Modules to control application life and create native browser window
const { app, BrowserWindow, shell, screen } = require('electron')
const path = require('path')

async function createServer() {
    const httpServer = require('http-server');
    httpServer.createServer({ root: '_output' }).listen(8000);
}

async function createWindow() {
    shell.openExternal('http://127.0.0.1:8000/lab/')
}

(async () => {
    await app.whenReady();
    await createServer()
    await createWindow()
})();