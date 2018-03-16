import { Record } from 'immutable';


export interface State {
  error: Error;
  loading: boolean;
}


export const iHS: State = {
  error: null,
  loading: false,
};


export class HomeState extends Record(iHS) {

  constructor(params: State) {
    super(params);
  }

  get<T extends keyof State>(key: T): State[T] {
    return super.get(key);
  }

  set<T extends keyof State, V extends keyof State>(key: T, value: State[V]) {
    return super.set(key, value);
  }

}
