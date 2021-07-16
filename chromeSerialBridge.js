'use strict';

/**
* Extension unique id to start the comunication.
* Extension id is supposed to remain static. It should never change, even when developing.
*/
var chromeSerialExtensionId = 'hgfifalikalcfmbphbkgdhbfollppfcn';

/**
* Used to check if the Serial Interface app is installed on the browser.
* If it's installed return result: "ok" and the current version
*/
function isExtensionInstalled(callback) {
    chrome.runtime.sendMessage(chromeSerialExtensionId, { cmd: "installed" },
        function (response) {
            if (response) {
                callback(response);
            } else {
                callback('{result: "KO", version: 0.0}');
            }
        }
    );
}
