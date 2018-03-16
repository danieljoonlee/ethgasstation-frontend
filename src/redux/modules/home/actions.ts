import { createAction } from 'redux-actions';


export const GET_DATA = 'app/home/data/get';
export const GET_DATA_SUCCESS = 'app/home/data/get/success';
export const GET_DATA_ERROR = 'app/home/data/get/error';


export const GetData = createAction(GET_DATA);

export const GetDataSuccess = createAction(GET_DATA_SUCCESS,
  (data: {}) => (data));

export const GetDataError = createAction(GET_DATA_ERROR, (error: Error) => (error));
