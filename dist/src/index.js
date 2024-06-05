"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("../apps/user-service/entry-points/api/user.routes"));
const song_routes_1 = __importDefault(require("../apps/song-service/entry-points/api/song.routes"));
const user_song_routes_1 = __importDefault(require("../apps/user-song-service/entry-points/api/user-song.routes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", user_routes_1.default);
app.use("/api", song_routes_1.default);
app.use("/api", user_song_routes_1.default);
app.use(errorHandler_1.default);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
