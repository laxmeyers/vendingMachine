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
    let money = appState.money

    setText('total-money', `$${money.toFixed(2)}`)
}

export class VendingController{
    constructor(){
        // console.log("controller vending")
        _drawProducts()
        _drawMoney()
        appState.on('money', _drawMoney)
    }

    buy(name){
        vendingService.buy(name)
        // console.log(name);
    }

    addQuarter(){
        vendingService.addQuarter()
    }


}