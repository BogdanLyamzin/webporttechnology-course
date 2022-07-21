"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeById = exports.updateById = exports.add = exports.getById = exports.getAll = void 0;
var getAll_ts_1 = require("./getAll.ts");
Object.defineProperty(exports, "getAll", { enumerable: true, get: function () { return __importDefault(getAll_ts_1).default; } });
var getById_ts_1 = require("./getById.ts");
Object.defineProperty(exports, "getById", { enumerable: true, get: function () { return __importDefault(getById_ts_1).default; } });
var add_ts_1 = require("./add.ts");
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return __importDefault(add_ts_1).default; } });
var updateById_js_1 = require("./updateById.ts");
Object.defineProperty(exports, "updateById", { enumerable: true, get: function () { return __importDefault(updateById_js_1).default; } });
var removeById_js_1 = require("./removeById.ts");
Object.defineProperty(exports, "removeById", { enumerable: true, get: function () { return __importDefault(removeById_js_1).default; } });
