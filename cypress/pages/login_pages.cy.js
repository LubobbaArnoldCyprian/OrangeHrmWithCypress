export class LoginPage{

    loginpage_username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginpage_password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginpage_login_button = '.oxd-button'


//auth = (object reference) helping us access data.json
    openBaseUrl(baseurl){
        cy.fixture("data").then((auth) => {
            var baseurl = auth.baseurl;

            cy.visit(baseurl)

        })
    }    

    enterUsernameAndPassword(username,password){
        cy.fixture("data").then((auth) => {
            var username = auth.username;
            var password = auth.password;

            cy.get(this.loginpage_username_textbox).type(username)
            cy.get(this.loginpage_password_textbox).type(password)

        })
        // cy.get(this.loginpage_username_textbox).type(username)
   
    }

    clickLogin(){
        cy.get(this.loginpage_login_button).click()

    }

}
