import { connect } from 'react-redux';

import { RootState } from '@src/redux/state';
import * as HomeActions from '@src/redux/modules/home/actions';

import Home from '@src/views/components/Home';
import { HomeProps } from '@src/core/props';


const mapStateToProps = (state: RootState, ownProps: HomeProps) => {
  return { ...ownProps.match, ...state };
};


export default connect<{}>(mapStateToProps, {
  getData: HomeActions.GetData,
})(Home);
