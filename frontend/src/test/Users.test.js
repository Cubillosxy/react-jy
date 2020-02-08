import React from 'react';
import { render } from '@testing-library/react';
import Users from "../components/Users";

test('renders users component', () => {
  const { getByText } = render(<Users />);

  const linkElement = getByText(/jsonplaceholder.typicode.com/i);
  //const tableElement = getByTagName(/table/i);

  expect(linkElement).toBeInTheDocument();


});
