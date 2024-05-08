import { Component } from "react";


class form extends Component{
    render(){
        return(
            <>
                <form>
                    <input type="text" name="name" placeholder="username"/><br/><br/>
                    <input type="password" name="password" placeholder="password"/><br/><br/>
                    <input type="submit" value="submit"/>
                </form>
            </>
        )
    }
}

export default form