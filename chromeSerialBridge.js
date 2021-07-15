'use strict';

/**
* Extension unique id to start the comunication.
* Extension id is supposed to remain static. It should never change, even when developing.
*/
var chromeSerialExtensionId = 'hgfifalikalcfmbphbkgdhbfollppfcn';

chrome.runtime.sendMessage(chromeSerialExtensionId, {info: "TEST"}, function(response) {
    console.log(response)
});

console.log("TODO 'chromeSerial.js'");


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
