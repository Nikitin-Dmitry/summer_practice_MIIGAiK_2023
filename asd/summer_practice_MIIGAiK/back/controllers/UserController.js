import Users from "../models/User.js"
import { validationResult } from "express-validator";
import bcrypt from "bcrypt"

export const add = async (req, res) => {

    try {

        console.log(req.body.img)

        const doc = new Users({
            Login: req.body.login,
            Pass: await bcrypt.hash(req.body.pass, 10),
            Name: req.body.name,
            listHobby: req.body.hobby,
            Faculty: req.body.faculty,
            Age: req.body.age,
            Gender: req.body.gender,
            About: req.body.about,
            ImgUrl: req.body.img
        })

        const User = await doc.save()

        res.json(User)
    } catch (error) {
        res.json(error)
    }
}


export const login = async (req, res) => {
    try {
        let user = await Users.find({ Login: req.body.login })
        console.log(user[0])
        if (!!user[0]) {
            if ( bcrypt.compare(req.body.pass, user[0].Pass)) {
                res.json(user)
            } else {
                console.log("incorrect")
                res.json("incorrect")
            }
        } else {
            console.log("incorrect")
            res.json("incorrect")
        }
    } catch (error) {
        res.json(error)
    }
}