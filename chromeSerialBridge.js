'use strict';

/**
* Extension unique id to start the comunication.
* Extension id is supposed to remain static. It should never change, even when developing.
*/
var chromeSerialExtensionId = 'hgfifalikalcfmbphbkgdhbfollppfcn';

/*
chrome.runtime.sendMessage(chromeSerialExtensionId, { info: "TEST" }, function (response) {
    //
    console.log(response)
});
* /

/**
* Used to check if the Serial Interface app is installed on the browser.
* If it's installed return result: "ok" and the current version
*/
function isExtensionInstalled(callback) {
    chrome.runtime.sendMessage(chromeSerialExtensionId, { cmd: "installed" },
        function (response) {
            if (response) {
                callback(true);
            } else {
                callback(false);
            }
        }
    );
}

/*
if ("serial" in navigator) {
    console.log("serial")
    // The Web Serial API is supported.
    //const ports = await navigator.serial.getPorts();
    navigator.serial.getPorts(function(devices) {
        console.log(devices);
    });
}
*/
