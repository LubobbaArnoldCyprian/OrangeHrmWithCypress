///<reference types = "cypress"/>

import{LoginPage} from "../pages/login_pages.cy"
const loginpage = new LoginPage
var username, password, baseurl

it('POM Demo', function(){

    loginpage.openBaseUrl(baseurl)
    loginpage.enterUsernameAndPassword(username, password)
    loginpage.clickLogin()

})

