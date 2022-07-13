import {render} from '@testing-library/react-native';
import React from 'react';
import {StarRating} from './StarRating';

describe('Star Rating', () => {
  it('renderer component', () => {
    const {debug} = render(<StarRating rating={{average: 5}} />);
    debug();
  });
});
