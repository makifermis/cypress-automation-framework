

describe('Cypress web security',()=>{
    it.skip('Validate visiting two different domains',()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.visit('https://www.google.com/')

    })

    it.skip('Validate visiting two different domains via user actions',()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })

    it('Origin command', () => {
        cy.origin('https://www.google.com',()=>{
            cy.visit('/')
        })

        cy.origin('automationteststore.com',()=>{
            cy.visit('/')
        })

        // cy.visit('https://www.webdriveruniversity.com')
        // cy.visit('https://selectors.webdriveruniversity.com')
    });
})

