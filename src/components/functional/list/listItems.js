import React from "react";
const ListItems=()=>{
    const iplTeams=["RCB","SRH","CSK","MI","GT","RR","PBKS","DC","LSG","KKR"];
    const iplHistory=[
        {
            name: "Royal challengers Bangalore",
            Winning:[],
            highestScore:263,
            Players:["Virat Kohli","Dinesh Karthik","Siraj"]
        },
        {
            name: "Sunrisers Hyderabad",
            Winning:[2009,2016,2024],
            highestScore:288,
            Players:["Nitish kumar","Bhuvaneshwar Kumar","Pat cummins"]
        },
        {
            name: "Chennai Super Kings",
            Winning:[2009,2016,2024],
            highestScore:240,
            Players:["MS Dhoni","Suresh Raina","Bravo"]
        },
        {
            name: "Mumbai Indians",
            Winning:[2013,2015,2017,2019,2020],
            highestScore:246,
            Players:["Rohit Sharma","Bumrah","Hardik Pandya"]
        }
    ]

    // return(
    // <>
    // {
    //     iplHistory.map((value,index)=><>
    //     <h2>{index+1}. {value.name}</h2>
    //     {
    //         value.Players.map(teamplayer=><>
    //         <h4>{teamplayer}</h4>
    //         </>)
    //     }
    //     </>)
    // }
    // </>

    return(
    <>
    {
        iplHistory.map((value,index)=>
        {
            const{name,highestScore,Players}=value
        return(<>
        {  
            highestScore>250 
            &&
            <>
            <h2>{index+1}. {name}</h2>
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
    
    // return (
    // <React.Fragment>
    //      {
    //         iplTeams.map(value=><>
    //                 <h3>{value}</h3>
    //                 {/* <h3>{value}</h3> */}
    //                 </>
    //             )
    //      }
         
    // </React.Fragment>
// )
}

export default ListItems