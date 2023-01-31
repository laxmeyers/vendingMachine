import { appState } from "../AppState.js"
import { VendingMachine } from "../Models/vendingModel.js";
import { vendingService } from "../Services/vendingService.js";
import { setHTML, setText } from "../Utils/Writer.js";



function _drawProducts(){
    let products = appState.products
    let template = ''

    products.forEach(p => {
        template += p.productTemplate
    })

    setHTML("product", template)
}

function _drawMoney(){
    
}

export class VendingController{
    constructor(){
        // console.log("controller vending")
        _drawProducts()
    }

    addToCart(name){
        vendingService.addToCart(name)
        // console.log(name);
    }


}