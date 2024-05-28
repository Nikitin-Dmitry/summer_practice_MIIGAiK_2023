import Users from "../models/User.js"

export const like = async (req, res) => {

    try {
        let user = await Users.find({ _id: req.body.getterId })
        user = user[0]

        let likes = user.UsersWhoLikeU
        let dislikes = user.UsersSkipedLikeU

        console.log(user, likes, dislikes, req.body.setterId)

        if (req.body.rating == "like") {
            if (!(likes.includes(req.body.setterId)) && !(dislikes.includes(req.body.setterId))) {
                console.log("Добвление лайка")
                likes.push(req.body.setterId)
                await Users.updateOne({ _id: req.body.getterId }, { UsersWhoLikeU: likes })
                res.json("sucsess")
            } else {
                console.log("Ошибка")
                res.json("misstake")
            }
        } else {
            if (!(likes.includes(req.body.setterId)) && !(dislikes.includes(req.body.setterId))) {
                console.log("Добвление дизлайка")
                dislikes.push(req.body.setterId)
                await Users.updateOne({ _id: req.body.getterId }, { UsersSkipedLikeU: dislikes })
                res.json("sucsess")
            } else {
                console.log("Ошибка")
                res.json("misstake")
            }
        }
    } catch (e) {
        res.send(e)
    }
}

export const load = async (req, res) => {
    try {
        let users = []

        function selection(usersTemp, users) {

            usersTemp.forEach((user) => {
                console.log((user.UsersWhoLikeU.includes(req.body.setterId)), (user.UsersSkipedLikeU.includes(req.body.setterId)))
                if (!((user.UsersWhoLikeU.includes(req.body.setterId)) || (user.UsersSkipedLikeU.includes(req.body.setterId)))) {
                    users.push(user)
                }
            })
        }

        if (req.body.setterGender == "Мужчина") {
            let usersTemp = await Users.find({ Gender: "Женщина" })
            selection(usersTemp, users)
        } else {
            let usersTemp = await Users.find({ Gender: "Мужчина" })
            selection(usersTemp, users)
        }

        console.log(users)

        if (users.length > 0) {
            let user = users[0]
            user.Login = ""
            user.Pass = ""
            res.json(user)
        } else {
            res.json("end")
        }
    } catch (error) {
        console.log(error)
    }
}
