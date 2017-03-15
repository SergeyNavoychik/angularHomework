import mongoose from 'mongoose'
import  './products'

const Product = mongoose.model( 'Product')
mongoose.Promise = Promise
export  function setUpConnection() {
    mongoose.connect('mongodb://localhost/products')
}

export function listProducts() {
    return Product.find()
}
export function createProduct({ product, price, isBuy }) {
    const productItem = new Product({
        product,
        price,
        isBuy
    })
    return productItem.save()
}
export function changeIsBuy({ id }) {
    return Product.findById( id, (err, product) => {
        product.isBuy = !product.isBuy
        product.save()
    })
}
export function deleteAllBought() {
    return Product.find( {isBuy: true} , (err, products) => {
        products.forEach( product => { product.remove() })
    })
}

export function deleteProduct( id ) {
    return Product.findById( id ).remove()
}