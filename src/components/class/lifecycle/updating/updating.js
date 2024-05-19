import axios from "axios";
import React,{ Component } from "react";
import ImageComponent from "../../../functional/image/image";

class UpdatingPhase extends Component{
    state={
        count:0,
        color:"green",
        product:null
    }

    incrementAction=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    static getDerivedStateFromProps(props,state){
        console.log(props);
        console.log("getDerivedStateFromProps",props);
        return{
            color:props.color
        }
    }

    componentDidMount(){
        document.title=`Count ${this.state.count}`
        axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then(response=>{
            if(response.status===200){
                this.setState({
                    product:response.data
                })
            }
        })
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate");
        document.title=`Count ${this.state.count}`

        axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then(response=>{
            if(response.status===200){
                this.setState({
                    product:response.data
                })
            }
        })
    }

    shouldComponentUpdate(){
        // return false //stops the updation
        return true
    }

    getSnapshotBeforeUpdate(props,state){
        console.log(state,"getSnapshotBeforeUpdate",props);
        return null
    }
    render(){
        console.log("render");
        return(
            <>
            <h1 style={{color:this.state.color}}>Updating Phase</h1>
            <h3>{this.state.count}</h3>
            <button onClick={this.incrementAction}>Increment</button>
            {
                this.state.product ?
                <>
                <h2>{this.state.product.title}</h2>
                <ImageComponent src={this.state.product.image}/>
                </>
                :
                null
            }
            </>
        )
    }
}

export default UpdatingPhase