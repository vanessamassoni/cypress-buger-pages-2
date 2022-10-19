//classe no javascript
class SignupPage{
    
    //função go
    go(){
      
  
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
     
    }

    fillForm(entregador){
            //nome
      cy.get('input[name="name"]').type(entregador.name)
      cy.get('input[name="cpf"]').type(entregador.cpf)
      cy.get('input[name="email"]').type(entregador.email)
      cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

      cy.get('input[name="postalcode"]').type(entregador.address.postalcode)
      //Clicar no botão
      cy.get('input[type=button][value="Buscar CEP"]').click()

      cy.get('input[name="address-number"]').type(entregador.address.number)
      cy.get('input[name="address-details"]').type(entregador.address.details)
    
      //validar se está escrito corretamente
      //assert
      cy.get('input[name="address"]').should('have.value',entregador.address.street)
      cy.get('input[name="district"]').should('have.value',entregador.address.district)
      cy.get('input[name="city-uf"]').should('have.value',entregador.address.city_state)
     
      //aq tenho 3 .delivery-method li, Moto, Bicicleta, Van/Carro
      cy.contains('.delivery-method li', entregador.delivery_method).click()
    
      cy.get('input[accept^="image"]').attachFile('/imagens/'+ entregador.cnh)
    }

    submit(){
        cy.get('form button[type="submit"]').click()

    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        cy.get('.alert-error')
         .should('have.text', expectedMessage)
    }

}

export default SignupPage;