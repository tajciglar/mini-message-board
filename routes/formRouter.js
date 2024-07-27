const { Router } = require('express');

const formRouter = Router();

formRouter.get("/", (req, res) => {
    res.send("form");
})

module.exports = formRouter;