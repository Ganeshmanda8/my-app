// import ListItems from '../list/listItems';

// function ButtonComponent(){
//     return(
//     <button>Click me</button>
//     )
// }
// export default ButtonComponent; //normal function
    
// const ButtonComponent=()=>{
//     return(
//     <button>Click me</button>
//     )
// }
// export default ButtonComponent; //arrow function

    // arrow function lo single line return chestey, return remove cheyachu
    // or
// const ButtonComponent=()=>
// <button>Click me</button>
// export default ButtonComponent;

const ButtonComponent=()=>{
    const addedToCart=0

        // const login=true;
        // if(login){
        //     return(
        //         <button>login success</button> 
        //     )
        // }
        // else{
        //     return (
        //         <button>login false</button>
        //     )
        // }

        // using ternary operator, while using it we can only use one return
        // return(
        //     <>
        //     {
        //         login
        //         ?
        //         <ListItems/>
        //         :
        //         <button>login failed</button>
        //     }
        //     </>
        // )

        // using short circuit operator 
        // return(
        //     <>
        //     {
        //         login
        //         &&
        //         <ListItems/>
        //         //it can also be written as
        //         // login
        //         // ?
        //         // <ListItems/>
        //         // :
        //         // null
        //     }
        //     </>
        // )

        // example for short circuit operator
        return(
            <>
            {/* {
                addedToCart
                ?
                <button>Move to cart</button>
                :
                <button>add to cart</button>
            } */}
            {
                addedToCart
                &&
                <button>Move to cart</button>
            }
            </>
        )
    }
    export default ButtonComponent;