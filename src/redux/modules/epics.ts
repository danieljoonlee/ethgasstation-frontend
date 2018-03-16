import { combineEpics } from 'redux-observable';

// Epics
import { epics as homeEpics } from './home';


const rootEpic = combineEpics(
  homeEpics,
);


export default rootEpic;
