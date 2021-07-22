'use strict';


async function connectMCU() {
    try {
        const port = await navigator.serial.requestPort();
        console.log(port)
    } catch (e) {
        console.error(e)
    }
}


/*
addEventListener('mouseup', Handler);

function Handler() {
    alert('works');
}
*/
window.document.addEventListener("wallet-event", async () => {
    console.debug('chromeSerailBridge  wallet-event')
    try {
        const port = await navigator.serial.requestPort();
        console.log(port)
    } catch (e) {
        console.error(e)
    }
    //connectMCU()
    //document.dispatchEvent(new CustomEvent("wallet-connect", { detail: { result: 'OK', info: 'WALT3_GATEWAY' } }));
});

/**
* Extension unique id to start the comunication.
* Extension id is supposed to remain static. It should never change, even when developing.
*/
var chromeSerialExtensionId = 'hgfifalikalcfmbphbkgdhbfollppfcn';

function SerialBridge() {
    this.init = function () {
        // TODO
    }

    this.isPortConnect = function (callback) {
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
async function isSerialBridgeExtensionInstalled(callback) {
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
