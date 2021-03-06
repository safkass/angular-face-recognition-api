const {
  app,
  BrowserWindow,
  globalShortcut,
  Menu,
  Tray,
  Notification
} = require('electron');
const path = require('path');

module.exports = {};

let buildTrayIcon = mainWindow => {
  let trayIconPath = path.join(__dirname, 'icon.ico');

  tray = new Tray(trayIconPath);
  tray.setToolTip('face-recoginition-api');

  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open application',
      click: function() {
        mainWindow.show();
      }
    },
    {
      label: 'Quit',
      click: function() {
        app.isQuiting = true;
        app.quit();
      }
    }
  ]);

  tray.setContextMenu(contextMenu);
};

module.exports.buildTrayIcon = buildTrayIcon;
