"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const Admin_1 = __importDefault(require("./routes/Admin"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use("/", Admin_1.default);
const port = process.env.PORT || 8080;
mongoose_1.default
    .connect(`${process.env.DB_HOST_LOCAL}`)
    .then(() => {
    app.listen(port, () => {
        console.log(`Server and database running on port ${port}, http://localhost:${port}`);
    });
})
    .catch((err) => {
    console.log(err);
});
