class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
}

const toca = new Product('toca verde',50)

console.log(toca)

class ProductWithAttributes extends Product {
    constructor(name, price, color){
        super(name,price)
        this.color = color
    }

    showColors(){
        console.log("As cores são:")
        this.color.forEach((color) => {
            console.log(color)
        });
    }
}

const hat = new ProductWithAttributes("Chapéu",29.99,["preto","azul","branco"])

console.log(hat.name)

hat.showColors()