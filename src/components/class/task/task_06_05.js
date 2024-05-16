import { Component } from 'react'
import CircleSpinner from '../../functional/Spinners/circle-spinner';
import Card from '../../functional/card/card';
import axios from 'axios';
import Button from '../button/button';

class MountingComponent1 extends Component {
    constructor(){
        console.log("constructor");
        super()
        this.state={
            message:"Good Morning",
            products:[],
            categories:[],
            selectedCategory: null,
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

    fetchComponents=async()=>{
        try{
            const response = await axios.get("https://fakestoreapi.com/products/categories")
            if(response.status===200){
                this.setState({
                    categories:response.data
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
            this.fetchComponents()
    }

    static getDerivedStateFromProps(props,state){
        // it changes the state based on the props over the time
        console.log(props);
        console.log("getDerivedStateFromProps",props);
        return{
            color:props.color
        }
    }

    handleCategoryClick = (category) => {
        this.setState({ selectedCategory: category });
    }

  render() {
    console.log("render");
    const { products, categories, selectedCategory } = this.state;
    const filteredProducts = selectedCategory
                            ? 
                            products.filter(product => product.category === selectedCategory)
                            : 
                            products;
    return (
        <>
        <h1 style={{color:this.state.color}}>Mounting Phase</h1>
        <div style={{ marginTop: 20 }}>
            <Button categories={categories} onCategoryClick={this.handleCategoryClick} />
        </div><br/>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20 }}>
            {
                filteredProducts.length > 0 ?
                filteredProducts.map(eachProduct => (
                    <Card product={eachProduct} key={eachProduct.id} />
                )) :
                <CircleSpinner />
            }
        </div>
        </>
    )
  }
}

export default MountingComponent1