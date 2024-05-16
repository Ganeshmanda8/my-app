// import { Component } from "react";

// class Button extends Component{
//     render(){
//         return(
//             <>
//             {
//                 true &&
//                 <button>Hello</button>
//             }
//             </>
//         )
//     }
// }

// export default Button

import React from 'react';

const Button = ({categories,onCategoryClick}) => {
    if (categories.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
            {categories.map((category, index) => (
                <button key={index} style={{ padding: 10, backgroundColor: 'lightblue', border: 'none', borderRadius: 5 }}
                onClick={() => onCategoryClick(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Button;
