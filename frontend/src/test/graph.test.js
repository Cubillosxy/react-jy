import React from 'react';
import { render } from '@testing-library/react';
import Graph from "../components/Graph";

test('renders users component', () => {
  const { getByText } = render(<Graph />);


});
