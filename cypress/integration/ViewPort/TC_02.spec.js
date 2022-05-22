// https://codedamn.com/

describe('testing different viewports',()=>{


    it('ViewPort example',()=>{
        cy.viewport(1280,720)
        cy.visit('https://codedamn.com/')
    })

    it('ViewPort example',()=>{
        cy.viewport('macbook-13')
        cy.visit('https://codedamn.com/')
    })

    it('ViewPort example',()=>{
        cy.viewport('iphone-xr')
        cy.visit('https://codedamn.com/')
    })

    it('ViewPort example',()=>{
        cy.viewport('iphone-6+')
        cy.visit('https://codedamn.com/')
    })

    it('ViewPort example',()=>{
        cy.viewport('iphone-se2')
        cy.visit('https://codedamn.com/')
    })

    

})