
const ButtonComponent=(props)=>{
    console.log(props,"props");
    const {text,bgColor,buttonProperties:{width,height}} = props
    return(
        <button style={{
        backgroundColor:bgColor,
        width:width,
        height:height
        }}>{text}</button>
    )
}
export default ButtonComponent;