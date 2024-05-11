import React, { Component } from 'react'

class Counter extends Component {
    state={
        count:1,
        isSubscribe:false,
        subscribeText:"Subscribe",
        subscribedText:"Subscribed"
    }

    incrementAction =()=>{
        this.setState({
            count:this.state.count+1
        }
        // ,()=>{alert("Increment Action Working "+this.state.count);}
    )
        console.log("Increment Action Working",this.state.count);
    }

    changeAction=(action)=>{
        switch(action){
            case "INCREMENT": this.setState({
                                count:this.state.count+1})
                                break
            case "DECREMENT": if(this.state.count>0){
                                this.setState({
                                count:this.state.count-1})
                                }
                                break
            case "RESET":       this.setState({
                                count:0})
                                break
            default: break
        }
    }
    subscribeAction=()=>{
        this.setState({
            buttonText:"Subscribed",
            isSubscribe:!this.state.isSubscribe
        })
    }

  render() {
    const {isSubscribe,subscribedText,subscribeText,count} = this.state
    return (
      <>
      <button onClick={this.subscribeAction}
      style={{backgroundColor:isSubscribe ? "green" : "red"}}
      >{
      !isSubscribe ? subscribeText : subscribedText
      }</button>

      {
        isSubscribe &&
        <>
      <h2>{count}</h2>
      <button onClick={()=>this.changeAction("INCREMENT")}>Increment</button>
      <button onClick={()=>this.changeAction("RESET")}>Reset</button>
      <button onClick={()=>this.changeAction("DECREMENT")}>Decrement</button>
      </>
  }
      </>
    )
  }
}

export default Counter