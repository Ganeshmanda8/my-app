import "./heading.css"
import styles from './heading.module.css'

const Heading1=()=>{ //default
	const headingStyle={
		color:"red",
		backgroundColor:"blue"
	}
	return(
	<> 
		<p style={ //inline
		{
			color:"red",
			backgroundColor:"black"
		}
		}>Hello</p>
		<h1 style={headingStyle}>hello Mike</h1>
		</>
)}

export const Heading2=()=>{ //named also called as helpers
	const blackColor = true;
	return( 
	<>
	<h1 className={
		blackColor?
		'headingComponent':
		'headingComponent1'}>Hello</h1>
	</>
)}

export const Heading3=()=>{ //named
	return <p className={styles.myStyle}>Ganesh</p>

}

export default Heading1