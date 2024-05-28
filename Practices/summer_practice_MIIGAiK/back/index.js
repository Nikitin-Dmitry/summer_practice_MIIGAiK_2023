import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import * as UserController from "./controllers/UserController.js"
import * as AssesController from "./controllers/AssesController.js"
import * as LikeController from "./controllers/LikesrController.js"
import { validation } from "./middleware/validation.js";
const app = express();

mongoose.connect(
    "mongodb+srv://admin:4444@atlascluster.8qjlwey.mongodb.net/"
).then(() => {
    console.log("Db ok")
}
).catch((er) => console.log(er))

app.use(express.json({limit: '25mb'}))
app.use(cors())

app.post("/Auth/Regist", validation, UserController.add);
app.post("/Auth/Login", UserController.login);

app.put("/Asses", AssesController.like);
app.post("/Asses", AssesController.load)

app.post("/Like", LikeController.showWhoLikeU)
app.put("/Like", LikeController.removeUserFromListLike)

app.listen(444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log("Server started")
})