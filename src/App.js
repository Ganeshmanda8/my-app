import React from 'react';
import ButtonComponent from './components/functional/button/button';
import GreetingComponent from './components/functional/greeting/greeting';
import ImageComponent from './components/functional/image/image';
import Task01 from './components/functional/task/task_01_05';

function App() {
    const buttonArray=[
        {
            id:1,
            text:"Login",
            color:"white",
            width:100,
            height:100,
            bgColor:"red"
        },
        {
            id:2,
            text:"Submit",
            color:"white",
            width:100,
            height:150,
            bgColor:"Orange"
        },
        {
            id:3,
            text:"SignIn",
            color:"white",
            width:150,
            height:100,
            bgColor:"SkyBlue"
        },
        {
            id:4,
            text:"click me",
            color:"white",
            width:100,
            height:100,
            bgColor:"lightgreen"
        },
        {
            id:5,
            text:"click me",
            color:"white",
            width:100,
            height:100,
            bgColor:"lightgreen"
        }
    ]

    return (
        <>
            {
                buttonArray.map(eachbutton=>{
                    const {id,text,width,height,bgColor,color}=eachbutton
                    return(
                        <ButtonComponent key={id} text={text} bgColor={bgColor} buttonProperties={{width:width, height:height, color:color}}/>
                    )
                })
            }
            <br/>
            <br/>
            <ButtonComponent text={"LOGIN"} bgColor={"orange"} buttonProperties={{width:100,height:100}} />
            <ButtonComponent text={"SIGNUP"} bgColor={"red"} buttonProperties={{width:100,height:100}} />
            <ButtonComponent text={"SUBMIT"} bgColor={"lightgreen"} buttonProperties={{width:100,height:100}} />
            <br/>
            <GreetingComponent>
                <h1>Hello Mike good Morning</h1>
                <ImageComponent
                src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}/>
            </GreetingComponent>
            <GreetingComponent>
                <h1>How are you</h1>
                <ImageComponent
                src={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}/>
            </GreetingComponent>
            <Task01/>
        </>
    );
}

export default App;
