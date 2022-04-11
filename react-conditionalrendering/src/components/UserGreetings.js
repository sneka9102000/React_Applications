import React, { Component } from 'react'
class UserGreeting extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedIn:false

        }
    }
   
   
    render() {
        let message
        if(this.state.isLoggedIn)
        {
            message = <div>Welcome Sneka</div>
        }else{
            message=<div>Welcome Guest</div>
        }

        return <div> {message}</div>
      

        // {
        //     return(
        //         <div>Welcome Sneka</div>
        //     )
        // }else{
        //     return (
        //         <div>Welcome Guest</div>
                 
        //     )
        // }
        // return (
        //     <div>
        //     <div> Welcome to React</div>
        //     <div>Welcome Guest </div>
        //     </div>
        // )
    }
}
 export default UserGreeting 