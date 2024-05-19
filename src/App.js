import React, { Component } from 'react';
import UpdatingPhase from './components/class/lifecycle/updating/updating';
import UnMounting from './components/class/lifecycle/unmounting/unMounting';
import MountingComponent from './components/class/lifecycle/mounting/mounting';
import MountingComponentTask2 from './components/class/task/task_07_05';

class App extends Component{
    state={
        color:"red"
    }

    changeColor=()=>{
        this.setState({
            color:"blue"
        })
    }

    render(){
    return (
        <div>
        <MountingComponent/>
        <UpdatingPhase color={this.state.color}/>
        <button onClick={this.changeColor}>Change Color</button>
        <UnMounting/>
        <MountingComponentTask2/>
        </div>
    );
    }
}

export default App;
