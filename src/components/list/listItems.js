import React from "react";
const ListItems=()=>{
    const iplTeams=["RCB","SRH","CSK","MI"];
    const iplHistory=[
        {
            name: "Royal challengers Bangalore",
            Winning:[],
            Players:["Virat Kohli","Dinesh Karthik","Siraj"]
        },
        {
            name: "Sunrisers Hyderabad",
            Winning:[2009,2016,2024],
            Players:["Nitish kumar","Bhuvaneshwar Kumar","Pat cummins"]
        },
        {
            name: "Chennai Super Kings",
            Winning:[2009,2016,2024],
            Players:["MS Dhoni","Suresh Raina","Bravo"]
        }
    ]
    return (
    // <>
    //      <li className="listitem">{iplTeams[0]}</li>
    //      <li className="listitem">{iplTeams[1]}</li>
    //      <li className="listitem">{iplTeams[2]}</li>
    // </>
    // or
    <React.Fragment>
         <li className="listitem">{iplHistory[0].name}</li>
         <li className="listitem">iplHistory[0].name</li>
         <li className="listitem">{iplTeams[1]}</li>
         <li className="listitem">{iplTeams[2]}</li>
         <li className="listitem">{iplTeams[3]}</li>
         
    </React.Fragment>
)
}
export default ListItems