import ImageComponent from "../image/image"

const Card=(props)=>{
  console.log(props)
  const {title,description,image}=props.product
    return(
        <div className="card" style={{ width: 300}}>
        {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image" /> */}
        <ImageComponent src={image}/>
        <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a href="www.flipkart.com" className="btn btn-primary">
        See Profile
        </a>
  </div>
</div>
)}
export default Card