import React from 'react'

const Product = ({product, money, basket, setBasket}) => {
    const basketItem = basket.find(item => item.id === product.id)
    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)

        if(checkBasket) {
            checkBasket.amount =+ 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }
    }

  return (
    

    <div>Product</div>
  )
}

export default Product