import {render} from '@testing-library/react-native';
import React from 'react';
import {StarRating} from './StarRating';

describe('Star Rating', () => {
  describe('Quando Rating for passado...', () => {
    it('Me mostre a média! ', () => {
      const {getByText} = render(<StarRating rating={{average: 7}} />);
      const element = getByText('7');
      expect(element).toBeTruthy();
    });

    it('Me mostre o ícone de estrela', () => {
      const {getByTestId} = render(<StarRating rating={{average: 7}} />);
      const start = getByTestId('iconStar');
      expect(start).toBeTruthy();
    });
  });

  describe('Quando rating não é passado', () => {
    it('A estrela não aparece! ', () => {
      /*
        Aqui o container verifica tudo que tem dentro do startRating,
        se o children não renderizar ele devolve um array vazio;
        como se fosse o pai do componente renderizado,
        no caso o star rating é o pai e o Ícone e texto os filho
      */
      const {container} = render(<StarRating />);
      expect(container.children).toEqual([]);
    });
  });
});
