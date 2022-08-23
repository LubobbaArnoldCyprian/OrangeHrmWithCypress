export class AddUser{

    loginpage_username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginpage_password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginpage_login_button = '.oxd-button'
    adduser_switchto_admin = ':nth-child(1) > .oxd-main-menu-item'
    adduser_searchSystem_user = ':nth-child(2) > .oxd-input'
    adduser_search_admin = '.oxd-button--secondary'
    adduser_userRole_click = 'oxd-select-text oxd-select-text--active'
    
//auth = (object reference) helping us access data.json
    openBaseUrl(baseurl){
        cy.fixture("data").then((auth)),function(){
            var baseurl = auth.baseurl;

            cy.visit(baseurl)

        }
    }    

    enterUsernameAndPassword(username,password){
        cy.fixture("data").then((auth) => {
            var username = auth.username;
            var password = auth.password;

            cy.get(this.loginpage_username_textbox).type(username)
            cy.get(this.loginpage_password_textbox).type(password)

        })
    }

    clickLogin(){
        cy.get(this.loginpage_login_button).click()

    }

    clickAdminButton(){
        cy.get(this.adduser_switchto_admin).click()
    }

    searchSystemUser(){

        cy.get(this.adduser_searchSystem_user).type('Admin')
    }

    clickSearchButton(){
        
    
        cy.get(this.adduser_search_admin).contains(' Search ').click({force: true})
        
    }

    clickAddButton(){

        cy.get(this.adduser_search_admin).contains(' Add ').click({force: true})

    }


    clickAddUserRole(){
    
        //click drop down 
        cy.get('div[class="oxd-select-text oxd-select-text--active"]')
          .eq(0)
          .click()

        //select from drop down
        cy.get('form')
          .contains('Admin')
          .click()
        
    }

    selectStatus(){

        //click drop down 
        cy.get('div[class="oxd-select-text oxd-select-text--active"]')
          .eq(1)
          .click()

        //select from drop down
        cy.get('form')
          .contains('Enabled')
          .click()
    }

    employeeName(){
        cy.get('.oxd-autocomplete-text-input > input')
          .type('Jadine Jackie')
          
    }

    adduserUsername(){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Administrator{enter}')
    }

    enterPassword(){
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type('Admin123.')

    }

    comfirmPassword(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type('Admin123.')

    }

    btnSave(){
        
        cy.get('.oxd-button--secondary').click()

    }

}
