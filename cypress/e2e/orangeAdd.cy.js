///<reference types = "cypress"/>

import{LoginPage} from "../pages/login_pages.cy"
import { AddUser } from "../pages/add_pages.cy"

const loginpage = new LoginPage
const adduser = new AddUser

var username, password, baseurl

it('POM Demo', function(){

    loginpage.openBaseUrl(baseurl)
    loginpage.enterUsernameAndPassword(username, password)
    loginpage.clickLogin()

    //add user page properties
    adduser.clickAdminButton()
    adduser.searchSystemUser()
    adduser.clickSearchButton()
    adduser.clickAddButton()
    adduser.clickAddUserRole()
    adduser.selectStatus()
    adduser.employeeName()
    adduser.adduserUsername()
    adduser.enterPassword()
    adduser.comfirmPassword()
    adduser.btnSave()
    





})
