// const { describe } = require("mocha");

describe("abc",()=>{
    it("abcd",()=>{

        cy.visit("https://www.amazon.in")
        cy.get('div[id="nav-cart-text-container"]').click({force:true})
        cy.get('.a-size-base-plus').eq(0).should("be.visible")

    })

})