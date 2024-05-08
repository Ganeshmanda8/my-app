import React,{ Component } from "react";

class Table extends Component{
    tableStyle = {
        border: '1px solid black',
      };

    render(){
        return(
            <table style={this.tableStyle}>
                <tr>
                    <th>S.No</th>
                    <th>Player Name</th>
                    <th>Runs</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Virat Kohli</td>
                    <td>542</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Ruturaj Gaikwad</td>
                    <td>541</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Travis Head</td>
                    <td>533</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Sanju Samson</td>
                    <td>471</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Sunil Narine</td>
                    <td>461</td>
                </tr>
            </table>
        )
    }
}

export default Table