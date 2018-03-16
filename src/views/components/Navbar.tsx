import React, { Component } from 'react';
import { Layout } from 'antd';

// Assets
import logo from '@src/img/ETHgas-logo.png';


const { Header } = Layout;


class Navbar extends Component<{}> {

  render() {
    return (
      <Header style={{ background: '#FFF' }}>
        <div className="logo">
          <img src={logo} width="40" />
          ETH Gas Station
        </div>
      </Header>
    );
  }

}


export default Navbar;
