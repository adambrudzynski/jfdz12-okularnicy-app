import React, { useContext, useState } from 'react'
import { Icon, Menu, Button, Image, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { MyContext } from '../auth/Auth';

const Navigation = () => {

  const [activeItem, setActiveItem] = useState("")
  const context = useContext(MyContext)

  const handleItemClick = (e, { name }) => setActiveItem(name)
  const handleLogout = () => context.logout()

  return (
    <Menu icon='labeled' size='mini' fixed='bottom'>
      <Link to="/user-list">
        <Menu.Item
          as='div'
          name='list'
          active={activeItem === 'list'}
          onClick={handleItemClick}
        >
          <Icon name='list ul' />
          {context.state.userList.length > 0 && <Label floating color='teal' circular>
            {context.state.userList.length}
          </Label>}
          My list
        </Menu.Item>
      </Link>
      <Link to="/">
        <Menu.Item
          as='div'
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          <Icon name='home' />
          Home
        </Menu.Item>
      </Link>
      <Link to="/wallet">
        <Menu.Item
          as='div'
          name='wallet'
          active={activeItem === 'wallet'}
          onClick={handleItemClick}
        >
          <Icon name='money bill alternate outline' />
          Wallet
        </Menu.Item>
      </Link>
    </Menu>

  )
}

export default Navigation