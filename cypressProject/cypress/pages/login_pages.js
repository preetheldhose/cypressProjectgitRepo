export class LoginPage {


    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'

    enterUsername(userName) {
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userName)
        cy.get(this.username_textbox).type(userName)
    }

    enterPassword(passWord) {
        //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(passWord)
        cy.get(this.password_textbox).type(passWord)
    }

    clickLogin() {
        //cy.get('.oxd-button').click()
        cy.get(this.login_button).click()
    }

}