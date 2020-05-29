const { app, BrowserWindow } = require('electron')

function createWindow  () {
    let win = new BrowserWindow ({
        width: 800,
        heigth: 800,
        WebPreferences: {
            nodeIntegration: true 
        }
        
})
        

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)