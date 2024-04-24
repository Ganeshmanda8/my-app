// function ListComponents(){
    // return (
    //     <ul>
    //         <li>RCB</li>
    //         <li>SRH</li>
    //         <li>CSK</li>
    //     </ul>
    // )
// }
// export default ListComponents

import ListItems from "./listItems";
const ListComponents=()=>{
    
        const iplTeams=["RCB","SRH","CSK"];
        const IPL="Indian Premier League";
        const IplImage="https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Ipl-auction_1703034762917_1703034773943.jpg";
        const dimensions={
            height:200,
            width:400
        }
        return (
            <div>
                <h3>IPL</h3>
                <h3>{IPL}</h3>
                <img src={IplImage} height={dimensions.height} width={dimensions.width} alt={IPL}></img>
                <button onClick={()=>{}}>Click Me</button>
        <ul>
             {/* <li className="listitem">{iplTeams[0]}</li>
             <li className="listitem">{iplTeams[1]}</li>
             <li className="listitem">{iplTeams[2]}</li> */}
             <ListItems/>
        </ul>
        
        </div>
    )
}
export default ListComponents