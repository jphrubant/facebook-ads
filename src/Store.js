import shopData from "./data.json";
const Reflux = require("reflux");

export const Actions = Reflux.createActions(["create", "update", "delete"]);

export class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      storeName: shopData.name,
      products: shopData.products,
      successMessage: "",
    };
    this.listenables = Actions;
  }

  create(id, ad) {
    const products = this.state.products.map((product) => {
      if (product.id === parseInt(id)) {
        product.ads = [ad, ...product.ads];
        return product;
      } else {
        return product;
      }
    });
    this.setState({ products, successMessage: "Ad created successfully" });
    setTimeout(() => {
      this.setState({ successMessage: "" });
    }, 2000);
  }

  update(product, ad) {
    const products = this.state.products.map((prod) => {
      if (prod.id === parseInt(product.id)) {
        const ads = product.ads.filter((a) => {
          return a.adId !== ad.adId;
        });
        prod.ads = [ad, ...ads];
        return prod;
      } else {
        return prod;
      }
    });
    this.setState({ products, successMessage: "Ad updated successfully" });
    setTimeout(() => {
      this.setState({ successMessage: "" });
    }, 2000);
  }

  delete(productId, adId) {
    const products = this.state.products.map((product) => {
      if (product.id === parseInt(productId)) {
        const ads = product.ads.filter((ad) => {
          return ad.adId !== adId;
        });
        product.ads = ads;
        return product;
      } else {
        return product;
      }
    });
    this.setState({ products, successMessage: "Ad deleted successfully" });
    setTimeout(() => {
      this.setState({ successMessage: "" });
    }, 2000);
  }
}
