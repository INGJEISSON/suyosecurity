cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "onesignal-cordova-plugin.OneSignal",
    "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
    "pluginId": "onesignal-cordova-plugin",
    "clobbers": [
      "OneSignal"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-universal-links-plugin.universalLinks",
    "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
    "pluginId": "cordova-universal-links-plugin",
    "clobbers": [
      "universalLinks"
    ]
  },
  {
    "id": "cordova-plugin-browsertab.BrowserTab",
    "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
    "pluginId": "cordova-plugin-browsertab",
    "clobbers": [
      "cordova.plugins.browsertab"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "onesignal-cordova-plugin": "2.2.5",
  "cordova-plugin-inappbrowser": "2.0.1",
  "cordova-universal-links-plugin": "1.2.1",
  "cordova-plugin-browsertab": "0.2.0"
};
// BOTTOM OF METADATA
});