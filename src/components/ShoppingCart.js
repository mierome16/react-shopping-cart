import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Cart from './Cart'
import ShoppingItems from './ShoppingItems'

export default class ShoppingCart extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show Cart
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide Cart
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="very wide"
          >
            <Menu.Item as='a'>
              <Icon name='home' />
             <Cart></Cart>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>

              <ShoppingItems></ShoppingItems>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
