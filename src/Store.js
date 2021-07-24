import shopData from "./data.json";
const Reflux = require("reflux");

export const Actions = Reflux.createActions(["create", "delete"]);

export class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      storeName: shopData.name,
      products: shopData.products,
    };
    this.listenables = Actions;
  }

  create(id, ad) {
    const products = this.state.products.map((product) => {
      if (product.id === parseInt(id)) {
        product.ads = [...product.ads, ad];
        return product;
      } else {
        return product;
      }
    });
    this.setState({ products });
  }

  delete(productId, adId) {
    const products = this.state.products.map((product) => {
      if ((product.id === parseInt(productId))) {
        const ads = product.ads.filter(ad => {
         return ad.adId !== adId
        });
        product.ads = ads;
        return product;
      } else {
        return product;
      }
    });
    this.setState({ products });
  }
}
