import { appState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js";
import { saveState } from "../Utils/Store.js";


class VendingService{
    addQuarter() {
        appState.money += 5

        saveState('myMoney', appState.money)
    }
    buy(name) {
        let product = appState.products.find(p => p.name == name)
        if(appState.money > product?.price){
            appState.money -= product?.price
            saveState('myMoney', appState.money)
        }else{
            console.log(name);
            Pop.toast("Not enough money", "warning", "top-end")
        }

    }
    constructor(){

    }
}

export const vendingService = new VendingService()