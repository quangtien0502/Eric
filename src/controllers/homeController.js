import db from '../models/index'
import CRUDService from '../services/CRUDService'

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
let postCRUD = async (req, res) => {
    //let message = await console.log(CRUDService.createNewUser(req.body))

    //await CRUDService.createNewUser(req.body)
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send("abc")
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    console.log("---------------------")
    console.log(data)
    console.log("---------------------")
    return res.render('displayCRUD.ejs', {
        data: data
    })
}

module.exports = {
    getHomePage: getHomePage,
    aboutPage: aboutPage,
    getCrud: getCrud,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD

}