var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        // OneSignal Initialization
        // Enable to debug issues.
        // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
        // Set your iOS Settings
        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = false;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;

             var notificationOpenedCallback = function(jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
              };

              window.plugins.OneSignal
                .startInit("626ad5c9-9de8-4384-a12b-9c3aec240461")
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
    }
};

function registerForPushNotification() {
    console.log("Register button pressed");
    window.plugins.OneSignal.registerForPushNotifications();
    // Only works if user previously subscribed and you used setSubscription(false) below
    window.plugins.OneSignal.setSubscription(true);
}

function getIds() {
    window.plugins.OneSignal.getIds(function(ids) {
        document.getElementById("OneSignalUserId").innerHTML = "UserId: " + ids.userId;
        document.getElementById("OneSignalPushToken").innerHTML = "PushToken: " + ids.pushToken;
        console.log('getIds: ' + JSON.stringify(ids));
        alert("userId = " + ids.userId + "\npushToken = " + ids.pushToken);

        // Registramos dispositivo del usuario..
            var datos='regisid='+1+'&salvar='+1+'&ids_userId='+ids.userId;
            $.ajax({
                type: "POST",
                url: "http://plaform.suyo.io/includes/php/modules/function/devices.php",
                data: datos,
                success: function(valor){

                }
            });
    });
}

function sendTags() {
    window.plugins.OneSignal.sendTags({PhoneGapKey: "PhoneGapValue", key2: "value2"});
    alert("Tags Sent");
}

function getTags() {
    window.plugins.OneSignal.getTags(function(tags) {
        alert('Tags Received: ' + JSON.stringify(tags));
    });
}

function deleteTags() {
    window.plugins.OneSignal.deleteTags(["PhoneGapKey", "key2"]);
    alert("Tags deleted");
}

function promptLocation() {
    window.plugins.OneSignal.promptLocation();
    // iOS - add CoreLocation.framework and add to plist: NSLocationUsageDescription and NSLocationWhenInUseUsageDescription
    // android - add one of the following Android Permissions:
    // <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    // <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
}

function syncHashedEmail() {
    window.plugins.OneSignal.syncHashedEmail("example@google.com");
    alert("Email synced");
}

function postNotification() {
    window.plugins.OneSignal.getIds(function(ids) {
        var notificationObj = { contents: {en: "message body"},
                          include_player_ids: [ids.userId]};
        window.plugins.OneSignal.postNotification(notificationObj,
            function(successResponse) {
                console.log("Notification Post Success:", successResponse);
            },
            function (failedResponse) {
                console.log("Notification Post Failed: ", failedResponse);
                alert("Notification Post Failed:\n" + JSON.stringify(failedResponse));
            }
        );
    });
}

function setSubscription() {
    window.plugins.OneSignal.setSubscription(false);
}

app.initialize();