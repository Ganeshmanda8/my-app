

import React from 'react'

// const GreetingComponent = (props) => {
//     console.log(props);
//   return (
//     <>
//     <h1>hello mike</h1>
//     {props.children}
//     </>
//   )
// }

// export default GreetingComponent

//or

const GreetingComponent = ({children}) => {
  return (
    <>
    <h1>hello mike</h1>
    {children}
    </>
  )
}

export default GreetingComponent
