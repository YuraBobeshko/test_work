"use strict";
exports.__esModule = true;
function parseNPMVersion(x) {
    if (!x)
        return null;
    var result = x.split(/\b@/);
    return { name: result[0], version: result[1] };
}
module.exports = { parseNPMVersion: parseNPMVersion };
exports["default"] = parseNPMVersion;
