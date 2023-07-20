import AutoStore__Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';
import AutoStore__HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO';
var data = require('..//..//fixtures/products.json')


describe('Add multiple items to basket', () => {
    const autoStore_Homepage_PO = new AutoStore__Homepage_PO()
    const autoStore_HairCare_PO = new AutoStore__HairCare_PO()



    beforeEach(() => {
        //cy.clearLocalStorage() // Cypress automatically clears all cookies and local storage after each test
        //cy.clearCookies()

        autoStore_Homepage_PO.accessHomepage()
        autoStore_Homepage_PO.clickOn_HairCare_Link()
        
    });
    it('Add specific items to basket', () => {

        
        autoStore_HairCare_PO.addHairCareProductsToBasket(data)
        


    })

})