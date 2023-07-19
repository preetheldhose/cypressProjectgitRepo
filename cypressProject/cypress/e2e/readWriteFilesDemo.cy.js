///<reference types="cypress"/>

it('Read Files using fixture', function(){
    cy.fixture('example.json').then((data) => {
        cy.log (data.name)
        cy.log (data.email)
    })

})

it('Read file using readFile', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })
})

it('Write file demo', function(){
    cy.writeFile('sample.txt','Hello This is a Test\n')
    cy.writeFile('sample.txt','Adding a new line now', {flag: 'a+'})

})