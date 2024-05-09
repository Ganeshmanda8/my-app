import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
    const imageStyle = {
        width: "300px",
        height: "300px"
    };
  
    return (
        <Carousel style={{width:"300px",backgroundColor:"skyblue"}}>
            <Carousel.Item>
                <img
                    src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
                    alt="First slide"
                    style={imageStyle}/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/2.png"
                    alt="Second slide"
                    style={imageStyle}/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/6.png"
                    alt="Third slide"
                    style={imageStyle}/>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent