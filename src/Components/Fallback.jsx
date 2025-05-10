import React from 'react';

const Fallback = () => {
    return (
        <div className='flex flex-between py-10'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Fallback;