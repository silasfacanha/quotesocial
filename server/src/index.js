"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
;
app.use(express_1.default.json());
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.post("/register", (req, res) => {
    const pessoanova = req.body;
    console.log(pessoanova);
    res.send(`pessoa cadastrada com sucesso`);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
