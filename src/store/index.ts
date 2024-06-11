import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Product } from '../types/product'
import { persist } from 'zustand/middleware'

export type BasketProduct = {
  id: number
  title: string
  price:number
  quantity: number
  totalPrice:number
  discountPercentage: number
  discount:number
  discountedTotalPrice: number
  thumbnail: string
}
type Store = {
  products: BasketProduct[]
  totalPrice:number
  discount:number
  discountedTotalPrice: number
  totalProducts: number
  totalQuantity: number
}
type Actions = {
  addProduct: (newProduct: BasketProduct) => void
  removeProductById: (id: number) => void
  removeOneProductById: (id: number) => void
  clearBasket: () => void
}

const initState: Store = {
  products: [],
  totalPrice: 0,
  discount: 0,
  discountedTotalPrice: 0,
  totalProducts: 0,
  totalQuantity: 0
}

export const useBasket = create<Store & Actions>()(persist(immer((set) => ({
  ...initState,
  addProduct(newProduct) {
    set((state) => {
      const product = state.products.find((product) => product.id === newProduct.id)
      if (product){
        product.quantity++
        updateProductTotals(product)
      } else{
        
        state.products.push(newProduct)
      }
      updateBasketTotals(state)
    })
  },
  removeProductById(id) {
    set((state) => {
      state.products = state.products.filter((product) => product.id !== id)
      updateBasketTotals(state)
      
    })
  },
  removeOneProductById(id) {
    set((state) => {
      const product = state.products.find((product) => product.id === id)!
      product.quantity--
      if(product.quantity === 0) {
        state.removeProductById(id)
      }
      updateProductTotals(product)
      updateBasketTotals(state)
      
    })
  },
  clearBasket() {
    set(state => {
      state = {...state, ...initState}
    })
  }
})), { name: 'basket' }))

function updateProductTotals(product:BasketProduct){
  product.totalPrice = product.price * product.quantity
  product.discount = product.price*product.discountPercentage/100
  product.discountedTotalPrice = product.totalPrice - product.discount
}
function updateBasketTotals(state:Store){
  state.totalPrice = state.products.reduce((acc, product) => acc + product.totalPrice, 0)
  state.discount = state.products.reduce((acc, product) => acc + product.discount, 0)
  state.discountedTotalPrice = state.totalPrice - state.discount
  state.totalProducts = state.products.length
  state.totalQuantity = state.products.reduce((acc, product) => acc + product.quantity, 0)
}

export function toBasketProduct(product:Product){
  const discount = product.price*product.discountPercentage/100
  const basketProduct: BasketProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: 1,
    totalPrice: product.price,
    discountPercentage: product.discountPercentage,
    discount,
    discountedTotalPrice: product.price - discount,
    thumbnail: product.thumbnail
  }
  return basketProduct
}