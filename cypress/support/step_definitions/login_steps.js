import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
/// <reference types = "Cypress" />
let stub;
let succeedMessage


Before(() => {
    cy.log('Executing before step')
    stub = cy.stub
})

Given ('I access the WebdriverUniversity Login Portal Page', ()=>{
    cy.visit('https://www.webdriveruniversity.com/Login-Portal/index.html')
})

When('I enter a username {word}',(userName)=>{
    cy.get('#text').type(userName)
})

And ('I enter a password {word}', (password) => {
    cy.get('#password').type(password)
})

And ('I click on the login button', () => {
    cy.get('#login-button').click()
    //cy.on('windows:alert', stub)
    cy.on('window:alert', (str) => {
        succeedMessage=str
    })
})

Then('I should be presented the following message {word} {word}', (message, message2) =>{
    const expectedMessage = message + " " + message2;
    cy.log(expectedMessage)
    expect(succeedMessage).contains(expectedMessage)
   

    // cy.on('window:alert', (str) => {
    //     expect(str).to.equal(expectedMessage)
    // })
})