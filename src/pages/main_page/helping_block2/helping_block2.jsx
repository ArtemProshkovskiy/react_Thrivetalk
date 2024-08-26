import React from 'react';
import './helping.css'
import Helping_cart from "./helping_components/helping_cart";
import nutritionImage from '../../images/nutrition.png'; // Import the image

function Helping(props) {
    return (
        <div className='helping'>
            <div className="container">
                <div className="helping_title">
                    WE CAN HELP YOU WITH
                </div>
                <div className="helping_carts_flex">
                    <Helping_cart  title="Weight Lifting" background='#FFE2DE'></Helping_cart>
                    <Helping_cart  title="Running  & Spinning" background='#C4E769'></Helping_cart>
                    <Helping_cart  title="Pumping Iron" background='#62D0DF'></Helping_cart>
                    <Helping_cart  title="Pumping Sport" background={nutritionImage}></Helping_cart>
                </div>
            </div>
        </div>
    );
}

export default Helping;