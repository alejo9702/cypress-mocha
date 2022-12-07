/// <reference types="cypress" />
import SearchProduct from "../../pages/SearchProductPage";
import ProductViewPage from "../../pages/ProductViewPage";


const searchProductPage = new SearchProduct();
const productViewPage = new ProductViewPage();

describe("search and by products without signing in", function () {
  before(function () {
    cy.fixture("shoppingData/productToBuy").as("product");
  });
  context("add product to cart", function () {
    it("the user visit the shopping page, search a product and should be able to add to cart", function () {
      cy.gotoTheShoppingPage();
      cy.searchProduct(this.product[0].name);
      searchProductPage.quickViewProduct();
      productViewPage.addCardProductDetails(this.product[0]);
      productViewPage.isAddedSuccessfully(this.product[0]);
    });
  });
});
