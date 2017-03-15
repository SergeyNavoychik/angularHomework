import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    product: { type: String },
    price: { type: Number},
    isBuy: { type: Boolean }
})
const Product = mongoose.model( 'Product', ProductSchema)