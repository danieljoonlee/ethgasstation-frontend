import { RouteComponentProps } from 'react-router';


export interface HomeProps extends RouteComponentProps<{}> {
  getData: () => {};
}
