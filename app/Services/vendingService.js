import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"


class VendingService{
    addToCart(name) {
        let product = appState.products.find(p => p.name == name)
        appState.myProducts.push(product)
        console.log(appState.myProducts);

        saveState('myProducts', appState.myProducts)

    }
    constructor(){

    }
}

export const vendingService = new VendingService()