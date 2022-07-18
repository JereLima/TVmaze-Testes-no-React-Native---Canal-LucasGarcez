import React, {createRef} from 'react';
import {Modalize} from 'react-native-modalize';
import {fireEvent, render} from '@testing-library/react-native';
import {SeasonModal} from './SeasonModal';
import {act} from 'react-test-renderer';

describe('Season Modalize', () => {
  test('Show all season options', () => {
    const modalizeRef = createRef<Modalize>();
    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={() => {}}
        seasons={['1', '2', '3']}
        selectedSeason={'1'}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    //expect(getAllByText('season', {exact: false}).length).toEqual(3);
    /*Vc tbm pode usar Regex,  o "i" ignora o case sensitive*/
    expect(getAllByText(/season/i, {exact: false}).length).toEqual(3);
  });

  test('Call OnselectedSeason with correct season was pressed', () => {
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();
    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        seasons={['1', '2', '3']}
        selectedSeason={'1'}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const season2Element = getByText(/season 2/i);

    fireEvent.press(season2Element);

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
