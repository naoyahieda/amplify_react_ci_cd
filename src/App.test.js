import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App'

Enzyme.configure( { adapter: new Adapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});