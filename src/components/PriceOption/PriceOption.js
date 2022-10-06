import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
   const {features} = option;

    
    return (
        <div className='bg-cyan-800 m-5 rounded-md p-3 bg-opacity-80	'>
            <div>
            <h3>
                <span className='text-8xl font-bold text-white'>{option.price}
                </span>
                <span className='text-gray-200 text-xl'>/mon</span>
                </h3>
            <p className='text-white text-3xl mt-2'>{option.name}</p>
            </div>
             
             {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
             }

        <button className='bg-red-600 rounded-md p-1.5 mt-2'>Purchase </button>

        </div>
    );
};

export default PriceOption;