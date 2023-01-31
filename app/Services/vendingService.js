import { appState } from "../AppState.js"


class VendingService{
    addToCart(name) {
        let product = appState.products.find(p => p.name == name)


    }
    constructor(){

    }
}

export const vendingService = new VendingService()