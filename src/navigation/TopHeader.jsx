import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {Dropdown, Image, Header, Button, Icon } from 'semantic-ui-react'
import { MyContext } from '../auth/Auth';


export const TopHeader = ({content, subcontent, mobileMenu}) => {
    const context = useContext(MyContext)
    const handleLogout = () => context.logout()

    const trigger = (<Image
      size="mini"
      avatar
      src={context.state.user.photoURL || '/assets/userPlaceholder.jpg'} />)

    return <>
        <Header size='large' >
            {content}

            

            <Dropdown 
              icon={null}
              pointing='top right'
              trigger={trigger} 
              style={{float: 'right'}} >
                <Dropdown.Menu>
                <Dropdown.Item >
                <Link to={'/userProfile'}  >
                <Icon name='user'/>  Profile 
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>
                  <Icon name='sign out'/>  Logout
                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {mobileMenu}
            {subcontent && <Header.Subheader>{subcontent}</Header.Subheader>}
        </Header>
      </>
}