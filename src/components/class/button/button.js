import { Component } from "react";


// class Button extends Component{
//     render(){
//         return(
//         <button>Click me</button>
//         )
//     }
// }

class Button extends Component{
    render(){
        return(
            <>
            {
                true &&
                <button>Hello</button>
            }
            </>
        )
    }
}

export default Button