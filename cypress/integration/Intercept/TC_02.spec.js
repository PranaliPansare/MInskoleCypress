describe('my first test suite', () => {
    it('My first test case', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statuscode: 200,
            body: [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
            }]

        }).as('bookretrival')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookretrival').should(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)

        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    })


    it('My first test case', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Malholtra"
            req.continue((res) => {
                // expect(res.statusCode).to.eql(403)
            })
        }).as('dummyUrl')

        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@dummyUrl')

    })
})