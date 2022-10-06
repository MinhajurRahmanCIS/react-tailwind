import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex justify-center mt-3 gap-2 text-white'>
            <CheckCircleIcon className="h-6 w-6 text-green-400"/> 
            <p>{feature}</p>
            </div>
    );
};

export default Feature;