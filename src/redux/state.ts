import { RouterState  } from 'react-router-redux';

// States
import { HomeState } from './modules/home';


export interface RootState {
  home: HomeState;
  router: RouterState;
}
