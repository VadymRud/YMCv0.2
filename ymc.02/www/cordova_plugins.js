cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.oauthio/www/oauth.js",
        "id": "com.phonegap.plugins.oauthio.OAuth",
        "clobbers": [
            "OAuth"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.inappbrowser": "0.3.3",
    "com.phonegap.plugins.oauthio": "0.1.1"
}
// BOTTOM OF METADATA
});