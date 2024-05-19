import { Component } from 'react'
import CircleSpinner from '../../../functional/Spinners/circle-spinner';
import Card from '../../../functional/card/card';
import axios from 'axios';

class MountingComponent extends Component {
    constructor(){
        console.log("constructor");
        super()
        this.state={
            message:"Good Morning",
            products:[],
            color:"red"
        }
    }
    
    fetchData=async()=>{
    try{
        const response = await axios.get("https://fakestoreapi.com/products/")
        if(response.status===200){
            this.setState({
                products:response.data
            })
        }
        else{
            alert("something went wrong")
        }
    }
    catch(err){
        console.log(err);
    }
    }

    componentDidMount(){
        console.log("componentDidMount",document);
        document.title=this.state.message //dom manipulation
            this.fetchData()

            //or

            // fetch('https://fakestoreapi.com/products/')
            //     .then(res=>res.json())
            //     .then(json=>{
            //         this.setState({
            //             products:json
            //     })
            // })

            // or

            // axios.get("https://fakestoreapi.com/products/")
            // // .then(response=>console.log(response))
            // .then(response=>{
            //     if(response.status===200){
            //         this.setState({
            //             products:response.data
            //         })
            //     }
            //     else{
            //         alert("something went wrong")
            //     } 
            // })

    }

    static getDerivedStateFromProps(props,state){
        // it changes the state based on the props over the time
        console.log(props);
        console.log("getDerivedStateFromProps",props);
        return{
            color:props.color
        }
    }

  render() {
    console.log("render");
    return (
        <>
        <h1 style={{color:this.state.color}}>Mounting Phase</h1>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:20}}>
        {
            this.state.products.length>0
            ?
            this.state.products.map(eachProduct=>{
                // const {title}=eachProduct
                return(
                    <>
                    <Card product={eachProduct}/>
                    </>
                )
            })
            :
            <CircleSpinner/>
        }
        </div>
        </>
    )
  }
}

export default MountingComponent