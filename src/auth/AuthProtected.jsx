import React, { useContext, useEffect, useState } from 'react'
import { Segment, Loader, Dimmer, Placeholder } from 'semantic-ui-react';
import firebase from "firebase";
import { Login } from './LogIn'




 const AuthProtected = (props) => {

    const [user, setUser] = useState(false)
     useEffect(() => {
         auth()
        //  return () => {
            //  cleanup
        //  }
     }, [])

     const loading =    <> 
                    <Segment>
                    <Placeholder fluid>             
                        <Placeholder.Line length='full' />
                        <Placeholder.Line length='medium' />
                    </Placeholder>
                    </Segment>
                  <Segment>    
                    <Placeholder fluid>             
                        <Placeholder.Line length='full' />
                        <Placeholder.Line length='full' />
                        <Placeholder.Line length='full' />
                        <Placeholder.Line length='full' />
                        <Placeholder.Line length='full' />
                    </Placeholder>
                </Segment>
                </> 


    const auth = () => firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setUser(user) 
        } else {
           setUser(null)
        }
      });
      return <>
        {user === false &&  loading}
        {user === null && <Login/>}
        {user && {...props.children}}
        </>
    
}

export default AuthProtected