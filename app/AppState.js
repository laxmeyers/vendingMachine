import { Value } from "./Models/Value.js"
import { VendingMachine } from "./Models/vendingModel.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])
/** @type {import('./Models/vendingModel').VendingMachine[]} */
  products = [
    new VendingMachine({
      name: "banana",
      price: 4.50,
      img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
    }),
    new VendingMachine({
      name: "banana rasberry smoothie",
      price: 6.25,
      img: "https://plus.unsplash.com/premium_photo-1668615553286-e6a05efce4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }),
    new VendingMachine({
      name: "banana Hat",
      price: 15.75,
      img: "https://img.ltwebstatic.com/images3_pi/2021/04/09/1617936401a4d7897d8bdf215aee241601fbdd8a7a_thumbnail_900x.webp"
    }),
    new VendingMachine({
      name: "banana cone",
      price: 45,
      img: "https://images.squarespace-cdn.com/content/v1/5d86ba19517f22300d58e93d/1569113558295-RD7C8TOOV6EOP7S9P33S/Banana+Cone%2C+2ftH+Trilingual.jpeg?format=500w"
    })
  ]

/** @type {import('./Models/vendingModel').VendingMachine[]} */
  myProducts = loadState('myProducts', [VendingMachine])
}



export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
