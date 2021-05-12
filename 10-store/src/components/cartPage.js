import React from 'react';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"
import {plusToCart, minusToCart, deleteToCart} from '../actions/cart'

const CartPage = ({ cart, plusToCart, minusToCart, deleteToCart}) => {
    return (
        <div>
            <h1>Cart</h1>
            <table className="cart-table table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Count</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.itemCart.map((item, index) => (
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td scope="row">
                                <img className="w-25" src={item.product.image} alt="" /> {/* rounded-circle- округление */}
                            </td>
                            <td>
                                {item.product.title}
                            </td>
                            <td>
                                {item.product.price}$
                            </td>
                            <td>
                                {item.count}

                                <button onClick={() => plusToCart(item.product)} className="ml-4 btn btn-danger">
                                    +
                                </button>

                                <button onClick={() => minusToCart(item.product)} className="ml-2 btn btn-danger">
                                    -
                                </button>
                                
                                <button onClick={() => deleteToCart(item.product)} className="ml-2 btn btn-danger">
                                    d
                                </button>

                            </td>
                            <td>
                                {item.lineTotalPrice}$
                            </td>
                        </tr>   
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const msp = ({ cart }) => {
    return { cart }
}

export default connect(msp, {plusToCart, minusToCart, deleteToCart})(CartPage);