import CircleSpinner from "../Spinners/circle-spinner"
import ImageComponent from "../image/image"

const Card=()=>{
    return(
        <div className="card" style={{ width: 400, height:600 }}>
        {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image" /> */}
        <ImageComponent/>
        <CircleSpinner/>
        <div className="card-body">
        <h4 className="card-title">John Doe</h4>
        <p className="card-text">Some example text.</p>
        <a href="#" className="btn btn-primary">
        See Profile
        </a>
  </div>
</div>
)}
export default Card