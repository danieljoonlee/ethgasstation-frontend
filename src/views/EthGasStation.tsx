import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Redux
import { RootState } from '@src/redux/state';

// Styles
import '@src/css/app.less';

// Routes
import { routes } from '../routes';

// Components
import Navbar from '@src/views/components/Navbar';


const { Content } = Layout;

const mapStateToProps = (state: RootState) => {
  return { ...state };
};


class EthGasStation extends Component<{}> {

  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Navbar/>

        <Content>
          { routes.map((route) => (
            <Route key={route.path} {...route} />
          ) ) }
        </Content>
      </Layout>
    );
  }
}


export default connect<{}>(mapStateToProps, {})(EthGasStation);
