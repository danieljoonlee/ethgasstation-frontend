import { ajax } from 'rxjs/observable/dom/ajax';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AjaxMethod } from './enums';


export const API_URL: string = '/api/v1/';


const request = (path: string, method: AjaxMethod, body: {}) =>
  ajax({
    body,
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    responseType: 'json',
    timeout: 120000, // 2 min
    url: API_URL + path,
  })
    .map((e) => {
      console.log('[AJAX] Status --- ' + e.status);
      console.log(e.response);
      return e.response;
    })
    .catch((err) => {
      console.log(err);

      let error = 'Error while fetching data';

      if (err.status === 403) {
        error = 'Oops! Looks like you don\'t have access to it';
      }

      return Observable.throw(error);
    });


export default request;
