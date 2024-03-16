import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import './Cards.css'
import PropTypes from 'prop-types'

const Cards = ({handleCart}) => {

    const [cards,setCards]=useState([]);
    // const [cooks,setCooks]=useState([]);

    useEffect(() =>{
        fetch('cards.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[]);

    // const handleCart = (p) => {
    // const isExist = cooks.find(item => item.id == p.id);
    // if(!isExist){
    //     setCooks([...cooks,p]);

    // }

    // else {
    //     alert("already exist");
    // }

       
       
//       };
 
//  console.log(cooks);
 
 


    return (
        <div  className='w-2/3'>
            <h3 className="text-3xl">Cards: {cards.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {
                cards.map( card =>
                     <Card
                      key={card.id} 
                      
                      handleCart={handleCart}
                      card={card}>
                    

                      </Card>)
            }
            </div>

        </div>
    );
};

Cards.propTypes = {
    
    handleCart: PropTypes.func

}


export default Cards;