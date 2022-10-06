import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name: 'Free', price: 0, features: [
            'Free',
            '2 items',
        ]
    },
        {id:2, name: 'Medium', price: 5.99, features: [
            'Free',
            '10 items'
            
        ]
    },
        {id:3, name: 'Gold', price: 11.99, features: [
            'Free',
            'all item'
        ]
    },
        
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-teal-700 p-10 text-neutral-300 mt-5'>Best deal of time</h2>
            <div className='grid gap-3 md:grid-cols-3 '>
            {
                pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;