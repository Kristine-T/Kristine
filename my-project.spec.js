///<reference types ="cypress"/>

describe('GreenKartProject',() =>{
    it('adding products to cart ', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('a.increment').first().click();
        cy.get('input.quantity').first().should('contain.value','2');
        cy.contains('ADD TO CART').click();
        cy.get('a.cart-icon').click();
        cy.get('p.product-name').first().should('contain.text','Brocolli - 1 Kg');
    });
it('placing an order', () => {

    cy.contains('PROCEED TO CHECKOUT').click();
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/cart");
    cy.contains('Place Order').click();
    cy.url().should("equal","https://rahulshettyacademy.com/seleniumPractise/#/country");
    cy.get('select').select("Armenia");
    cy.get('[type="checkbox"]').check();
    cy.contains('Proceed').click();
    cy.wait(1000);
    cy.url().should("eq","https://rahulshettyacademy.com/seleniumPractise/#/");





});




});