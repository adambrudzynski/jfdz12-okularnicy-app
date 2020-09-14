import React, { useState, useEffect } from 'react'
import { Grid, Responsive, Button } from 'semantic-ui-react'

import { TopHeader } from '../navigation/TopHeader';
import MainList from './Main-list';
import UserList from '../user-list/User-list';

export const Lists = () => {
    const [activeMenu, setActiveMenu] = useState(0)
    const mobilemenu = <Button.Group floated='right' style={{'marginRight': '50px'}} >
                             <Button basic={activeMenu === 0 ? false : true } color='teal' onClick={()=> setActiveMenu(0)} icon='list alternate outline'/>
                             <Button basic={activeMenu === 1 ? false : true } color='teal' onClick={()=> setActiveMenu(1)} icon='suitcase' />
                        </Button.Group>

    return <>
        <Responsive maxWidth={650}>
            <TopHeader content='Lists' subcontent="Pack some things" mobileMenu={mobilemenu} />
            {activeMenu===0 ? <MainList /> : <UserList />  }
        </Responsive>
        <Responsive minWidth={651} >
        <TopHeader content='Lists' />
            <Grid columns={2} >
                <Grid.Column >
                <MainList />
                        
                </Grid.Column>
                <Grid.Column>
                  <UserList />                  
                </Grid.Column>
            </Grid>
        </Responsive>
    </>

}