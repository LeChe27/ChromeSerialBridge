'use strict';

/**
* Extension unique id to start the comunication.
* Extension id is supposed to remain static. It should never change, even when developing.
*/
var chromeSerialExtensionId = 'hgfifalikalcfmbphbkgdhbfollppfcn';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('chromeSerialBridge.js DOMContentLoaded')
    console.log(navigator.serial)

    let ports = await navigator.serial.getPorts();
    console.log(ports)

    // TODO Populate the UI with options for the user to select or automatically connect to devices.
});

function SerialBridge() {
    this.isPortConnect = function(callback) {
        chrome.runtime.sendMessage(chromeSerialExtensionId, { cmd: "connected" },
            function (response) {
                callback(response);
            }
        );
    }
}

/**
* Used to check if the Serial Bridge extension is installed on the browser.
* If it's installed return result: "OK" and the current version.
*/
function isSerialBridgeExtensionInstalled(callback) {
    chrome.runtime.sendMessage(chromeSerialExtensionId, { cmd: "installed" },
        function (response) {
            if (response) {
                callback(response);
            } else {
                callback('{result: "ERR", version: "0.0"}');
            }
        }
    );
}
