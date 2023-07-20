

describe('Verify Autocomplete dropdown lists via webdriveruni', () => {
    it('Select specific product via autocomplete list', () => {

        // cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Avacado'

            if (prod === productToSelect) {
                //$el.click()
                $el.trigger('click') //second option to click 

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                const productToSelect = 'Grapes'

                if (prod === productToSelect) {
                    $el.click()

                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                }
            })
        })



    })




})

