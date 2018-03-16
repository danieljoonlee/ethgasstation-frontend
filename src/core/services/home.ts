import request from '@src/core/ajax';
import { AjaxMethod } from '@src/core/enums';


export const getData = (body: {}) => {
  return request('data', AjaxMethod.GET, body);
};
