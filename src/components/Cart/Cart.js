import React, { useContext, useEffect, useState, useReducer } from 'react'
import { CartContext } from '../Context/Context'
import './Cart.css'
import { NavLink } from 'react-router-dom';


const Cart = () => {

    const GlobalState = useContext(CartContext);
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;

    const [totalPrice, setTotalPrice] = useState(0);

    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + 1 };
            case 'DECREMENT':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }
    const [state1, dispatch1] = useReducer(reducer, { count: 1 });

    useEffect(() => {
        let count = 0;
        state.map((i) => {
            const gst = (i.price * 15) / 100;

            count += i.price + gst;
        })
        setTotalPrice(count);
    }, [state])


    return (
        <>
            <div className="cartNavbar">
                <div className='complogo'>
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
                </div>
            </div>
            <div className="totalall">
                <div className="total">
                    <div className="secondnav">
                        <NavLink to='/'>
                            <i class="fa-solid fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="tt">
                        <p className='t'>Total - </p>
                        <p className='t'> ${Math.round(totalPrice)} </p>
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                {
                    state.map((item, index) => {
                        let gst = (item.price * 15) / 100;
                        return (
                            <div className="onecomp">
                                <img src={item.image} alt="snapdeal" />
                                <div className="desccomp">
                                    <h4>{item.title}</h4>
                                    <p>Rating : {item.rating.rate}</p>
                                    <h4>${item.price}</h4>
                                    <h4 className='gsttotal'>15% gst, total price = {Math.round(item.price + gst)}</h4>
                                </div>

                                <h1 className='dele' onClick={() => dispatch({ type: 'REMOVE', paylode: item })}>
                                    <i class="fa-solid fa-trash"></i>
                                </h1>
                            </div>
                        )
                    })
                }

                <NavLink to={{ pathname: '/buyNow', state: { price: totalPrice } }}>
                    <button className='btn buybtn'>Buy Now for $ {Math.round(totalPrice)}</button>
                </NavLink>
            </div>

        </>
    )
}

export default Cart