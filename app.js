#!/usr/bin/env node

const os = require("os");
const exec = require("child_process").exec;

console.log("You did big opsie! :(");
console.log("I hope you saved your work...");

const plat = os.platform();

if (plat === "linux") {
    exec("shutdown -h now");
}
else if (plat === "win32") {
    exec("shutdown -s -t 0");
}
