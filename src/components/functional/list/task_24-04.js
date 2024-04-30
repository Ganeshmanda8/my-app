const Task24= ()=>{
    const iplTeams=[
        {
            name: "SRH",
            winningCount:4,
            Winningimages:["https://images.indianexpress.com/2016/05/219.jpg","https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2023-12-30_at_06.20.29.webp?v=1703898009"],
            teamPlayer:[
            { playerName:"Head",
              playerImage:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/37.png",
              height:5.7 
            },
            { playerName:"Cummins",
              playerImage:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/33.png",
              height:6.3 
            }
            ]
        },
        {
            name: "RCB",
            winningCount:8,
            Winningimages:["https://www.mykhel.com/img/2024/03/rcb-wpl-champions-ft-1710733444.jpg"],
            teamPlayer:[
            { playerName:"Virat",
              playerImage:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/2.png",
              height:5.9 
            },
            { playerName:"Siraj",
              playerImage:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/63.png",
              height:6.1 
            }
            ]
        },
        {
            name: "CSK",
            winningCount:5,
            Winningimages:["https://feeds.abplive.com/onecms/images/uploaded-images/2022/04/12/fa325d7eab91f606b51fe72522d66378_original.jpg?impolicy=abp_cdn&imwidth=720",
                      "https://static.cricketaddictor.com/wp-content/uploads/2021/04/Chennai-Super-Kings-1.jpg?q=80",
                      "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/201805/DeOZXURVMAAHJrA.jpg_large.jpeg?VersionId=DvXS7HI0un1tvS_tQWpzD7noPfNDc0wm",
                      "https://m.economictimes.com/thumb/height-450,width-600,imgsize-243806,msid-88899077/csk-players.jpg",
                      "https://img.jagranjosh.com/images/2023/May/3052023/ipl-2023-winner-chennai-super-kings-csk.jpg"],
            teamPlayer:[
            { playerName:"Dhoni",
              playerImage:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png",
              height:5.9 
            },
            { playerName:"Jadeja",
              playerImage:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/46.png",
              height:5.11 
            }
            ]
        },
        {
            name: "MI",
            winningCount:8,
            Winningimages:["https://img.cricketworld.com/images/e-123364/mumbai-indians'-players-celebrate-as-they-lift-the-women's-premier-league-(wpl)-trophy.jpg",
                    "https://www.mumbaiindians.com/static-assets/waf-images/25/bf/77/16-9/1920-1080/zXZecmRRh7.jpg",
                    "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/05/pjimage-2020-05-21t221828-1590079713.jpg",
                    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/ipl2019mifinalwinparty.jpeg?size=690:388",
                    "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl/f_auto/primary/u4vjp5xs7mbfm2hyesv5"],
            teamPlayer:[
            { playerName:"Rohit",
              playerImage:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/6.png",
              height:5.7 
            },
            { playerName:"Bumrah",
              playerImage:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/9.png",
              height:6.3 
            }
            ]
        },
    ]
    
    const filteredData=(iplTeams)=>{
        return iplTeams.filter(eachTeam=>eachTeam.winningCount>=5)
    }

    const winningCountSummation=(iplTeams)=>{
        const result = iplTeams.reduce((a,b)=>a+b.winningCount,0)
        return result
    }

    return(
        <>
        <h1>IPL 2024 Teams</h1>
        <h1>Total Winning Count: {winningCountSummation(iplTeams)}</h1>
        {    
        filteredData(iplTeams).map((team)=>{
                    const {name,winningCount,Winningimages}=team
                    return( //here we are returning the data
                        <>
                        <h2>{name}</h2>
                        <p>{`winning count: ${winningCount}`}</p>
                        {/* <img src={Winningimages} height={200} width={400} alt={name}></img> */}
                        {
                        Winningimages.map(images=>{
                          return (
                            <img src={images} height={250} width={400} alt={name}></img>
                          )
                        })
                        }
                    {
                    team.teamPlayer.map((eachPlayer)=>{
                        const{playerName, height, playerImage}=eachPlayer
                        return(
                            <>
                            <p>{`${playerName} and his height is ${height} feet`}</p>
                            <img src={playerImage} alt={playerName} height={150} width={100}></img>
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

export default Task24