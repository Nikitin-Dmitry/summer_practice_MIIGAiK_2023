import Users from "../models/User.js"

export const validation = async (req, res, next) => {

    let a = req.body.pass,
        b = req.body.secPass,
        age = req.body.age,
        login = req.body.login


    const checkingForDuplicate = async () => {
        let c = await Users.find({ Login: login })
        if (c.length > 0) {
            return false
        } else {
            return true
        }
    }

    if (a == b) {
        if (await checkingForDuplicate()) {
            if (a.length >= 3) {
                if (login[0] == "@") {
                    if (parseInt(age) > 16 && parseInt(age) <= 80) {
                        console.log("Валидация прошла успешно")
                        next()
                    } else {
                        console.log(req.body, 'Вы доллжны быть старше 16 и младше 80')
                        res.status(500).send('Вы доллжны быть старше 16 и младше 80');
                    }
                } else {
                    console.log(req.body, 'Некорректный никнейм')
                    res.status(500).send('Некорректный никнейм');
                }
            } else {
                console.log(req.body, 'Пароль должен быть длиной минимум 3 символа')
                res.status(500).send('Пароль должен быть длиной минимум 3 символа');
            }
        } else {
            console.log(req.body, 'Такой аккаунт уже зарегистрирован')
            res.status(500).send('Такой аккаунт уже зарегистрирован');
        }
    } else {
        console.log(req.body, 'Пароли не совпадают')
        res.status(500).send('Пароли не совпадают');
    }
}