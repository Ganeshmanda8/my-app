import React, { Component } from 'react'

class ToDoComponent extends Component {
    constructor(){
        super()
        this.state={
            todos:["Apple","Banana"]
        }
    }

    //or
    
    // state={
    //     todos:["Apple","Banana"]
    // }
    addTodoMethod=()=>{
        const newState=[...this.state.todos,"WaterMelon"]
        this.setState({
            todos:newState
        })
    }
    clearAllTodos=()=>{
        const newState=[]
        this.setState({
            todos:newState
        })
    }
    deleteSelectedTodo=(index)=>{
        alert(index)
        const filteredArray = this.state.todos.filter((item,ind)=>ind!==index)
        this.setState({
            todos:filteredArray
        })
    }
    updateSelectedTodo=(index)=>{
        let updatedArray=this.state.todos.map((eachfruit,ind)=>{
            if(ind===index){
                return "kiwi"
            }
            else{
                return eachfruit
            }
        })
        this.setState({
            todos:updatedArray
        })
    }
    componentDidMount=()=>{
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    render() {
        return (
        <>
        <h2>Todo Component</h2>
        <button onClick={this.addTodoMethod}>Add Todo</button>
        <button onClick={this.clearAllTodos}>Clear All Todo</button>
        {
            this.state.todos.map((eachTodo,index)=>{
                return(
                    <React.Fragment key={index}>
                    <h4>{index+1}. {eachTodo}</h4>
                    <button onClick={()=>this.deleteSelectedTodo(index)}>Delete the todo</button>
                    <button onClick={()=>this.updateSelectedTodo(index)}>Update the todo</button>
                    
                    </React.Fragment>
                )
            })
        }
        </>
        )
    }
}

export default ToDoComponent