import Users from "../models/User.js"

export const showWhoLikeU = async (req, res) => {
    try {

        let setterId = req.body.setterId

        let user = await Users.find({ _id: setterId})
        let users = []
        for (let i = 0; i < user.length; i++) {
            let t = await Users.find({ _id: user[0].UsersWhoLikeU})
            users.push(t)
        }
        res.json(users)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

export const removeUserFromListLike = async (req, res) => {
    console.log(req.body)
    try {
        let getterId = req.body.getterId,
            setterId = req.body.setterId


        let user = await Users.find({ _id: setterId})
        let listWhoLike = user[0].UsersWhoLikeU
        let indexForDelete = listWhoLike.indexOf(getterId)
        listWhoLike.splice(indexForDelete, 1)
        
        await Users.updateOne({ _id: req.body.setterId }, { UsersWhoLikeU: listWhoLike })

        res.json("sucsess")
    } catch (error) {
        res.json(error)
    }
}