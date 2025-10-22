describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to a specific pokemon', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('chlorophyll') 
  })
})
