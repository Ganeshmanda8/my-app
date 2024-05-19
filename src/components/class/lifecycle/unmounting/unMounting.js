import { Component } from "react";
import ImageComponent from "../../../functional/image/image";

class UnMounting extends Component{
    state={
        isChildVisible:false
    }
    handler=()=>{
        this.setState({
            isChildVisible:!this.state.isChildVisible
        })
    }
    render(){
        return(
            <>
            <h1>unMounting Phase</h1>
            {
                this.state.isChildVisible
                ?
                <Child/>
                :
                <h1>No child found</h1>
            }
            <button onClick={this.handler}>Hide Child</button>
            </>
        )
    }
}

export default UnMounting

class Child extends Component{
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        return(
            <>
            <h1>Child Visible</h1>
            <ImageComponent src={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}/>
            </>
        )
    }
}

