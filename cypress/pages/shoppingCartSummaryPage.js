
/// <reference types="cypress" />
class shoppingCartSummaryPage {
    elements = {
      deleteElement: () => "div > a:contains(Delete)",
      shoppingCartText: () => ".shopping_cart > .ajax_cart_no_product"
  
    };

    deleteProduct(nameProduct){
        cy.get('tbody > tr > td').siblings().find(`p>a:contains(${nameProduct})`)
        .and(this.elements.deleteElement).click();
      
    }

    getTextShoppingCart(){
        return cy.get(this.elements.shoppingCartText).invoke('text');
    }


}
export default shoppingCartSummaryPage;