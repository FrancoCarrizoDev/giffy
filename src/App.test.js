import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const {getByText} = render(<App/>)
  const title = getByText(/GIFFY/i)
  expect(title).toBeInTheDocument();
});
