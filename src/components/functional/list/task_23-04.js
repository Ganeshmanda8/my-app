import React from "react";
const Ipltask=()=>{
    
    const iplHistory=[
        {
            name: "Royal challengers Bangalore",
            Winning:[],
            highestScore:263,
            Players:["Virat Kohli","Dinesh Karthik","Siraj"],
            imageURL:["https://pbs.twimg.com/media/F_3IOcFakAAQDXH.jpg:large"]
        },
        {
            name: "Sunrisers Hyderabad",
            Winning:[2009,2016,2024],
            highestScore:287,
            Players:["Nitish kumar","Bhuvaneshwar Kumar","Pat cummins"],
            imageURL:["https://y20india.in/wp-content/uploads/2024/04/srh-full-squad.webp"]
        },
        {
            name: "Chennai Super Kings",
            Winning:[2009,2016,2024],
            highestScore:246,
            Players:["MS Dhoni","Shivam Dube","Ravindra Jadeja"],
            imageURL:["https://images.moneycontrol.com/static-mcnews/2024/03/@ChennaiIPL-1-770x435.jpg?impolicy=website&width=770&height=431"]
        },
        {
            name: "Mumbai Indians",
            Winning:[2013,2015,2017,2019,2020],
            highestScore:246,
            Players:["Rohit Sharma","Bumrah","Hardik Pandya"],
            imageURL:["https://images.tv9telugu.com/wp-content/uploads/2023/12/mumba-indians-full-squad.jpg"]
        },
        {
            name: "Gujarat Titans",
            Winning:[2022],
            highestScore:233,
            Players:["Shubman Gill","MD Shami","Rashid Khan"],
            imageURL:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHXFDnyOPD_iq2kfX71-ZNGtMO4HvdA97fHd7tIszGA&s"]
        },
        {
            name: "Punjab Kings",
            Winning:[],
            highestScore:232,
            Players:["s Dhawan","Sam Curran","A singh"],
            imageURL:["https://crickettimes.com/wp-content/uploads/2023/12/Complete-squad-of-PBKS-for-IPL-2024.webp"]
        },
        {
            name: "Delhi Capitals",
            Winning:[],
            highestScore:231,
            Players:["Rishab Pant","Axar Patel","Kuldeep Yadav"],
            imageURL:["https://www.timesbull.com/wp-content/uploads/2024/03/Delhi-Capitals-Squad-jpg.webp"]
        },
        {
            name: "Kolkata Knight Riders",
            Winning:[2012,2014],
            highestScore:272,
            Players:["S Iyer","Sunil Narine","P Salt"],
            imageURL:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEiypDZsSc-Y1AGUz3xLrJSf2dj8D7TCxSGRItIbSKw&s"]
        },
        {
            name: "Rajasthan Royals",
            Winning:[2008],
            highestScore:226,
            Players:["Sanju Samson","Jos Buttler","Sandeep Sharma"],
            imageURL:["https://static.tnnbt.in/thumb/msid-105518854,thumbsize-103694,width-1280,height-720,resizemode-75/105518854.jpg"]
        },
        {
            name: "Lucknow Super Gaints",
            Winning:[2008],
            highestScore:257,
            Players:["KL Rahul","Ravi Bishnoi","M Stonis"],
            imageURL:["https://media.crictracker.com/media/attachments/1685016797661_Lucknow-Super-Giants.jpeg"]
        }
    ]


    return(
    <>
    {
        iplHistory.map((value,index)=>
        {
            const{name,highestScore,Players,imageURL}=value
        return(<>
        {  
            highestScore>250 
            &&
            <>
            <h2>{index+1}. {name}</h2>
            {/* <img src={imageURL}> </img> */}
            <img src={imageURL} alt={name} height={500} width={600}></img>
            {/* {
            imageURL.map(image => (
                    <img src={image} alt={`${name} Player`} height={150} width={100} />
                ))
            } */}
            {
                Players.map(teamplayer=><>
                <p>{teamplayer}</p>
            </> )
            }</>
        }
        </>)
        }
        )
    }
    </>
    )
    
}

export default Ipltask