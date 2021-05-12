import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import {addToCart} from '../actions/cart'

const Detail = ({products, addToCart}) => {

    const { itemId } = useParams()

    const product = products.find((item) => item.id == itemId)

    return (
        <div>
            <h1 className="text-center mt-2">{product.title}</h1>
            <div className="row">
                <div className="col-6">
                    <img className="w-100" src={product.image} alt="" />
                </div>
                <div className="col-6 mt-5">
                    <p className="">
                        {product.description}
                    </p>
                    <p>
                        <button onClick={() => addToCart(product)} href="#" className="btn btn-primary">
                            Buy
                        </button>
                        <span className="ml-2 text-primary h6 font-weight-bold">
                            Price: {product.price}$
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const msp = ({ products }) => {
    return { products }
}

export default connect(msp, {addToCart})(Detail);
