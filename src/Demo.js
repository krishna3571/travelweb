import React, { useEffect, useRef, useState } from 'react';
import './Demo.css'; // Ensure the CSS is imported

const ChangeBox = () => {

    return (
        <>

            <div class="img-wrapper">
                <img class="inner-img" src="https://source.unsplash.com/random/400x400" />
            </div>

            {/* <!-- Additional examples --> */}

            <div class="img-wrapper">
                <img class="inner-img" src="https://source.unsplash.com/random/401x401" width="400px" height="400px" />
            </div>

            <div class="img-wrapper">
                <img class="inner-img" src="https://source.unsplash.com/random/402x402" width="400px" height="400px" />
            </div>


        </>
    );
};

export default ChangeBox;
