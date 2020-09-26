import React, { useState, useEffect } from 'react'
import { Icon, Menu} from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom';


const Navigation = () => {
  const [activeItem, setActiveItem] = useState("")
  let location = useLocation()

  useEffect(() => {
      setActiveItem(location.pathname)
    },
    [location])

  return <Menu icon='labeled' size='mini' fixed='bottom'>
      {/* <Link to="/">
        <Menu.Item
          as='div'
          name='home'
          active={activeItem === '/'}
        >
          <Icon name='home' />
          Home
        </Menu.Item>
      </Link>   */}
      <Link to="/">
        <Menu.Item
          color={activeItem === '/'? 'teal' : "black"}
          as='div'
          name='List'
          active={activeItem === '/'}
        >
          <Icon name='tasks' />
          List
        </Menu.Item>
      </Link>
      <Link to="/wallet">
        <Menu.Item
          color={activeItem === '/wallet'? 'teal' : "black"}
          as='div'
          name='wallet'
          active={activeItem === '/wallet'}
        >
          <Icon name='money bill alternate outline' />
          Wallet
        </Menu.Item>
      </Link>
    </Menu>
}

export default Navigation