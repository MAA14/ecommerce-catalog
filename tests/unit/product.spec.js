import { shallowMount } from "@vue/test-utils";
import ProductDisplay from "@/components/ProductDisplay.vue";

describe("Test Next Product call", () => {
  it("Product pertama harus sama dengan Product 1", async () => {
    const productDisplay = shallowMount(ProductDisplay, {
      data() {
        return {
          index: 2,
        };
      },
    });
    const product1 = await fetch(`https://fakestoreapi.com/products/1`)
      .then((data) => data.json)
      .catch((err) => console.log(err.message));

    // Arrange
    const title = productDisplay.get(`[data-test]="product_title"`);
    const description = productDisplay.get(`[data-test]="product_description"`);
    const price = productDisplay.get(`[data-test]="product_price"`);
    const rating = productDisplay.get(`[data-test]="product_rating"`);
    const category = productDisplay.get(`[data-test]="product_category"`);

    // Assert
    expect(title.text()).toBe(product1.title);
    expect(description.text()).toBe(product1.description);
    expect(price.text()).toBe(product1.price);
    expect(rating.text()).toBe(product1.rating);
    expect(category.text()).toBe(product1.category);
  });
});
