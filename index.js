const {app, BrowserWindow} = require("electron");


app.on("ready", ()=> {
    console.log("App is ready!");
    const mainWindow = new BrowserWindow({});
    console.log(`file://${__dirname}/html/index.html`);
    mainWindow.loadURL(`file://${__dirname}/html/index.html`);
})
