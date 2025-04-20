import React from 'react';
import { Outlet } from 'react-router';

const MyOutlet = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MyOutlet;