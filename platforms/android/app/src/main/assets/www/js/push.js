document.addEventListener('deviceready', function () {
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("626ad5c9-9de8-4384-a12b-9c3aec240461")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  
}, false);