import React from 'react';
import BreadTop from '../../../assets/images/top.png';
import BreadBottom from'../../../assets/images/bottom.png';
import Meat from'../../../assets/images/meat.png';
import Salad from'../../../assets/images/salad.png';
import Cheese from'../../../assets/images/cheese.png';
 import './Ingredient.css';

const Ingredient = props => {
    let ingredient = null;

    
    switch(props.type) {
        case 'bread-bottom':
            ingredient = <div><img src={BreadBottom} alt="bottom-bread" /></div>
            break;
        case 'bread-top':
            ingredient = <div><img src={BreadTop} alt="top Bread" /></div>
            break; 
        
        case 'meat':
            ingredient = <div><img src={Meat} alt="meat" /></div>
            break;

        case 'salad':
             ingredient = <div><img src={Salad} alt="salad" /></div>
            break;   

        case 'cheese':
              ingredient = <div><img src={Cheese} alt="cheese" /></div>
            break;  
            
        default:
            // eslint-disable-next-line no-unused-vars
            ingredient = null;
                
    }
    return (
        <div className="Ingredient">

            {ingredient}

        </div>
    )
}

export default Ingredient;