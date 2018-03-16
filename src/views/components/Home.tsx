import React, { Component } from 'react';
import { Col, Layout, Row } from 'antd';

import { HomeProps } from '@src/core/props';

import '@src/css/home.less';


const { Content } = Layout;


class Home extends Component<HomeProps, {}> {

  render() {
    const { match } = this.props;

    return <Layout style={{ background: 'transparent' }}>
      <Content>
        <Row type="flex" justify="space-around" align="middle" style={{ height: 'calc(100vh - 128px)' }}>
          <Col span={12}>
            Eth Gas Station Home Page
          </Col>
        </Row>
      </Content>
    </Layout>;
  }

}


export default Home;
