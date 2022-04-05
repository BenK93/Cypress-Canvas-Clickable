/// <reference types="cypress" />





/**
 * How Can I perform the Canvas click like I do it manually?
 */
describe('Calculator App', () => {
    before(() => {
        cy.visit('https://www.online-calculator.com/full-screen-calculator/')
        // waiting for elements to load
        cy.wait(5000)
    })

    it('Create A Simple Multiplication Test', () => {
      // just performing a simple click on the body.
      cy.get('body').click(400, 400, {force: true})
        cy.get('body').click(400, 400)
        cy.get('body').click(400, 400, {force: true})
        cy.get('body').click(400, 400,)
        cy.get('body').trigger('mouseover', 400, 400)
            .trigger('mousedown')
            .trigger('mouseup')
        cy.get('body').trigger('mouseover', 400, 400)
            .trigger('mousedown', {button: 0})
            .trigger('mouseup', {button: 0})
        // trying to the container of canvas
        cy.get('#animation_container').click(100, 100, {force: true})
        cy.get('#animation_container').click(100, 100,)
        cy.get('#animation_container').click(100, 100, {force: true})
        cy.get('#animation_container').click(100, 100,)
        cy.get('#animation_container').trigger('mouseover', 100, 100)
            .trigger('mousedown')
            .trigger('mouseup')
        cy.get('#animation_container').trigger('mouseover', 100, 100)
            .trigger('mousedown', {button: 0})
            .trigger('mouseup', {button: 0})
      // ending in error (element can't be found) although the element is there
        cy.get('#canvas').click(100, 100, {force: true})
        cy.get('#canvas').click(100, 100,)
        cy.get('[id="canvas"]').click(100, 100, {force: true})
        cy.get('[id="canvas"]').click(100, 100,)
        cy.get('[id="canvas"]').trigger('mouseover', 100, 100)
            .trigger('mousedown')
            .trigger('mouseup')
        cy.get('[id="canvas"]').trigger('mouseover', 100, 100)
            .trigger('mousedown', {button: 0})
            .trigger('mouseup', {button: 0})
    })

})
