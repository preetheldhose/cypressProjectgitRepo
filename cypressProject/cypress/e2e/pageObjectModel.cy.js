///<reference types="cypress"/>

import { LoginPage } from "../pages/login_pages"

const loginPage = new LoginPage()

describe('All Login Test', function() {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
    })

    this.beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    
    it.only('Page Object Model', function(){

        //cy.visit('https://opensource-demo.orangehrmlive.com')
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        loginPage.enterUsername('Admin')
        //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        loginPage.enterPassword('admin123')
        cy.wait(5000)
        //cy.get('.oxd-button').click()
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    
    })
    
    it.skip('Login Test valid 1', function(){
    
        //cy.visit('https://opensource-demo.orangehrmlive.com')
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        loginPage.enterUsername('Admin')
        //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        loginPage.enterPassword('admin123')
        cy.wait(5000)
        //cy.get('.oxd-button').click()
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    
    })
    
    it.skip('Login Test possible invalid 2', function(){
    
        //cy.visit('https://opensource-demo.orangehrmlive.com')
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        loginPage.enterUsername('Admin')
        //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        loginPage.enterPassword('admin123')
        cy.wait(5000)
        //cy.get('.oxd-button').click()
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    
    })
})

