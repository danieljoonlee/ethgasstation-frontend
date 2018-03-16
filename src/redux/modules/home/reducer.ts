import { Action, combineActions, handleActions } from 'redux-actions';

import * as HomeActions from './actions';
import { HomeState, iHS, State } from './state';


export const homeReducer = handleActions<HomeState, State>(
  {

    [HomeActions.GET_DATA]: (state: HomeState, action: Action<State>) => {
      return state.merge({ error: null, loading: true });
    },

    [combineActions(HomeActions.GET_DATA_SUCCESS, HomeActions.GET_DATA_ERROR)]:
      (state: HomeState, action: Action<State>) => state.merge({ ...action.payload, loading: false }),

  },
  new HomeState(iHS)
);
