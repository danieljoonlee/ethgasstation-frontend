import { Action } from 'redux-actions';
import { ActionsObservable, combineEpics, Epic } from 'redux-observable';

// rxjs
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import * as HomeActions from './actions';
import { RootState } from '@src/redux/state';

import { getData } from '@src/core/services';


const getDataEpic: Epic<Action<{}>, RootState> =
  (action$: ActionsObservable<Action<string | Error>>) =>
    action$
      .ofType(HomeActions.GET_DATA)
      .switchMap((action) => {
        return getData(action.payload)
          .map((data: {}) => HomeActions.GetDataSuccess(data))
          .catch((error: Error) => ActionsObservable.of(HomeActions.GetDataError(error)));
      });


export const epics = combineEpics(
  getDataEpic,
);
