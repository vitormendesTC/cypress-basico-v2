Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Vitor')
    cy.get('#lastName').type('Mendes')
    cy.get('#email').type('Vitor@gmail.com')
    cy.get('#open-text-area').type('GREMIO')
    cy.contains('button', 'Enviar').click()
})
