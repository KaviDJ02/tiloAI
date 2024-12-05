import React, { useState, useEffect } from 'react';

const PageST = () => {
    let st = "/st.png";
    let x = "/x.png";

    return (
        <div className="st">
            <div className="image-container">
                <img className="icon" src={st} alt="Icon"/>
                <img className="top-right-icon" src={x} alt="cancel Icon"/>
            </div>
        </div>

    )
}

export default PageST