const path = require("path")
const {app, BrowserWindow} = require("electron")

const createMainWindow = ()=>{
    const win = new BrowserWindow({
        title:"Hey Title",
        width:500,
        height:600
    })
    win.loadFile(path.join(__dirname,'./renderer/index.html'))
}
app.whenReady().then(()=>{
    createMainWindow()
})