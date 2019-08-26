describe('Check validations', () => {
  it('Tick in a ticked position', () => {
    cy.visit('localhost:3000')
    cy.get('.game-board > :nth-child(2) > :nth-child(1)').click()
    cy.get('.game-board > :nth-child(2) > :nth-child(1)').click()
    cy.contains('Posição ocupada')
  })

  it('Tick after winner', () => {
    cy.visit('localhost:3000')
    cy.get('.game-board > :nth-child(2) > :nth-child(1)').click()
    cy.get('.game-board > :nth-child(2) > :nth-child(2)').click()
    cy.get(':nth-child(3) > :nth-child(2)').click()
    cy.get(':nth-child(3) > :nth-child(3)').click()
    cy.get(':nth-child(4) > :nth-child(3)').click()
    cy.get(':nth-child(4) > :nth-child(3)').click()
    cy.contains('Posição ocupada')
  })
})