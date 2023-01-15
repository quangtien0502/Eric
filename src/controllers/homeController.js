import db from '../models/index'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()

        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error)
    }
}
let aboutPage = (req, res) => {
    return res.render('test/about.ejs')
}
let getCrud = (req, res) => {
    return res.render('crud.ejs')
}

module.exports = {
    getHomePage: getHomePage,
    aboutPage: aboutPage,
    getCrud: getCrud

}