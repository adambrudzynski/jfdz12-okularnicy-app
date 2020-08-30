import React, { useContext} from 'react'
import { Segment, Placeholder } from 'semantic-ui-react';
import { Login } from './LogIn'
import { TopHeader } from '../navigation/TopHeader';
import { MyContext } from '../auth/Auth';

const AuthProtected = (props) => {

     const context = useContext(MyContext)
     const {user} = context.state

     const loading = () =>   <> 
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

    const content = () => <>
        {/* <TopHeader content={'Test header'} subcontent={'Test subheader'}/> */}
        {{...props.children}}
    </>

      return <>
        {user === false &&  loading()}
        {user === null && <Login/>}
        {user && content()}
        </>
    
}

export default AuthProtected