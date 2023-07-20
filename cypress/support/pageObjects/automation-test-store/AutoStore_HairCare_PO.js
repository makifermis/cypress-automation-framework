
class AutoStore__HairCare_PO {
    

    addHairCareProductsToBasket(data){        
        data.productName.forEach(function(element) {
            cy.addProductToBasket(element).then(()=>{
                //debugger
            })
        })

        cy.get('.dropdown-toggle > .fa').click().debug()
    }

}


export default AutoStore__HairCare_PO