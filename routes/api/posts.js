const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const User = require('../../schemas/UserSchema');

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {

    
})

router.post("/", async (req, res, next) => {

    if(!req.body.content) {
        console.log("Content param not sent with request");
         return res.sendStatus(400);
    }
    res.status(200).send("it worked");
})

module.exports = router;