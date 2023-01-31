


export class VendingMachine {

    constructor(data){
        this.name = data.name
        this.price = data.price
        this.img = data.img
    }

    get productTemplate(){
        return `
        <div class="col-4 my-3">
        <div class="card text-center">
          <div class="cover"><img src="${this.img}" class="img-fluid" alt="${this.name}"></div>
          <div class="card-body bg-light">
            <h6 class="card-title">${this.name.toUpperCase()}</h6>
            <p class="card-text">$${this.price.toFixed(2)}</p>
          </div>
          <button class="btn btn-primary" onclick="app.vendingController.buy('${this.name}')">Add To Cart</button>
        </div>
      </div>
      `
    }
}