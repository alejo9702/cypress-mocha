/// <reference types="cypress" />

import SearchProduct from "../../pages/SearchProductPage";
import ProductViewPage from "../../pages/ProductViewPage";
import ShoppingCartSummaryPage from "../../pages/shoppingCartSummaryPage";

const searchProductPage = new SearchProduct();
const productViewPage = new ProductViewPage();
const shoppingCartSummaryPage = new ShoppingCartSummaryPage();

describe("Remove producto from the shopping cart", function () {
    beforeEach(function () {
        cy.fixture("shoppingData/productToBuy").as("product");
    });
  
   
    it("Given the user adds product to cart", function () {
        cy.gotoTheShoppingPage();
        cy.searchProduct(this.product[1].name);
        searchProductPage.quickViewProduct();
        productViewPage.addCardProductDetails(this.product[1]);
    });

    it("When the user goes to the shopping cart", function () {
      productViewPage.clickOnContinueShoppingButton();
      productViewPage.goToShoppingCart();
    });

    it("And the user deletes the producto from the shopping cart", function () {
        shoppingCartSummaryPage.deleteProduct(this.product[1].name);
    });

    it("The the user should see the shopping cart empty" , function () {
       shoppingCartSummaryPage.getTextShoppingCart().then((text) => {
        expect(text.trim()).contain('empty')
    });
    });
    
    
  });
  