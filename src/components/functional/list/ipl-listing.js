const IplTeamListing= ()=>{
    const iplTeams=[
        {
            name: "SRH",
            winningCount:4,
            teamPlayer:[
            { playerName:"Head",
              playerImage:"",
              height:5.7 
            },
            { playerName:"Cummins",
              playerImage:"",
              height:6.3 
            }
            ]
        },
        {
            name: "RCB",
            winningCount:8,
            teamPlayer:[
            { playerName:"Virat",
              playerImage:"",
              height:5.9 
            },
            { playerName:"Green",
              playerImage:"",
              height:6.1 
            }
            ]
        }
    ]
    
    const filteredData=(iplTeams)=>{
        return iplTeams.filter(eachTeam=>eachTeam.winningCount>=5)
    }

    const winningCountSummation=(iplTeams)=>{
        const result = iplTeams.reduce((a,b)=>a+b.winningCount,0)
        return result
    }

    // return(
    //     <>
    //     <h1>IPL 2024 Teams</h1>
    //     {
            // iplTeams.map((team)=>{
            //     // console.log("Team Name:   ",team.name)
            //     return(
            //         <>
            //         <h2>{team.name}</h2>
            //     {
            //     team.teamPlayer.map((eachPlayer)=>{
            //         const{playerName, height, playerIamge}=eachPlayer
            //         // console.log(playerName, height)
            //         return(
            //             <>
            //             <p>{playerName}</p>
            //             <p>{height}</p>
            //             </>
            //         )
            //     })
            //     }
            //     </>
            // )})

        //     iplTeams.filter((eachTeam)=> eachTeam.winningCount>=5) //here we are filtering the data
        //     .map((team)=>{
        //             return( //here we are returning the data
        //                 <>
        //                 <h2>{team.name}</h2>
        //             {
        //             team.teamPlayer.map((eachPlayer)=>{
        //                 const{playerName, height, playerImage}=eachPlayer
        //                 return(
        //                     <>
        //                     <p>{playerName}</p>
        //                     <p>{height}</p>
        //                     </>
        //                 )
        //             })
        //             }
        //             </>
        //         )})

    //     
    
    return(
        <>
        <h1>IPL 2024 Teams</h1>
        <h1>Total Winning Count: {winningCountSummation(iplTeams)}</h1>
        {    
        filteredData(iplTeams).map((team)=>{
                    return( //here we are returning the data
                        <>
                        <h2>{team.name}</h2>
                    {
                    team.teamPlayer.map((eachPlayer)=>{
                        const{playerName, height, playerImage}=eachPlayer
                        return(
                            <>
                            <p>{`${playerName} and his height is ${height} feet`}</p>
                            {/* <p>{playerName}</p>
                            <p>{height}</p> */}
                            </>
                        )
                    })
                    }
                    </>
                )})

        }
        </>
    )
}

export default IplTeamListing