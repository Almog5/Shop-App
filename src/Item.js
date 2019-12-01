 export class Item {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }


    show() {
        return `<div>
               <img src="${this.image}"/>
               <p>${this.name}</p>
               <p>${this.price}</p>  
    </div>`
    }
}



