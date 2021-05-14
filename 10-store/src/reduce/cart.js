const initialState = {
    itemCart: [],
    totalPrice: 0,
}

const cart = (state = initialState, actions) => {
    if (actions.type === "ADD_TO_CART_PRODUCT") {
        const product = actions.product
        const index = state.itemCart.findIndex((item) => item.product.id === product.id)
        let itemCart = []

        if (index === -1) {
            const item = {
                count: 1,
                product,
                lineTotalPrice: product.price
            }

            itemCart = [...state.itemCart, item]

        } else {
            itemCart = [...state.itemCart]
            const item = { ...itemCart[index] }

            item.count += 1

            item.product.price = item.product.price * item.count
            itemCart[index] = item

        }

        return {
            itemCart,
            totalPrice: itemCart.reduce((ans, item) => ans + item.lineTotalPrice, 0)
        }
    }

    if (actions.type === "PLUS_TO_CART_PRODUCT") {
        const product = actions.product
        const index = state.itemCart.findIndex((item) => item.product.id === product.id)

        if (index !== -1) {
            const itemCart = [...state.itemCart]
            const item = { ...itemCart[index] }

            item.count += 1

            item.lineTotalPrice = item.product.price * item.count
            itemCart[index] = item

            return {
                itemCart,
                totalPrice: itemCart.reduce((ans, item) => ans + item.lineTotalPrice, 0)
            }
        }
    }

    if (actions.type === "MINUS_TO_CART_PRODUCT") {
        const product = actions.product
        const index = state.itemCart.findIndex((item) => item.product.id === product.id)

        if (index !== -1) {
            const itemCart = [...state.itemCart]
            const item = { ...itemCart[index] }

            if (item.count > 0) {
                item.count = item.count - 1
            }

            item.lineTotalPrice = item.product.price * item.count
            itemCart[index] = item

            return {
                itemCart,
                totalPrice: itemCart.reduce((ans, item) => ans + item.lineTotalPrice, 0)
            }
        }
    }

    if (actions.type === "DELETE_TO_CART_PRODUCT") {
        const product = actions.product
        const itemCart = state.itemCart.filter((item) => item.product.id !== product.id)

        return {
            itemCart,
            totalPrice: itemCart.reduce((ans, item) => ans + item.lineTotalPrice, 0)
        }
    }

    return state
}

export default cart;