import { sharingOptions, componentsByShareOption, ComponentsByShareOptionKey } from './sharingOptions.data';
import WithContext from '../../samples/WithContext/WithContext';
import WithHOC from '../../samples/WithHOC/WithHOC';
import WithProps from '../../samples/WithProps/WithProps';
import WithRedux from '../../samples/WithRedux/WithRedux';
import WithRxjs from '../../samples/WithRxjs/WithRxjs';
import WithStateLifting from '../../samples/WithStateLifting';
import WithZustand from '../../samples/WithZustand';

describe('sharingOptions.data', () => {
  it('should have the correct sharing options', () => {
    expect(sharingOptions).toEqual([
      { value: 'props' },
      { value: 'HOC' },
      { value: 'rxjs' },
      { value: 'State Lifting' },
      { value: 'context' },
      { value: 'redux' },
      { value: 'Zustand' },
    ]);
  });

  it('should have the correct components by share option', () => {
    expect(componentsByShareOption).toEqual({
      props: <WithProps />,
      rxjs: <WithRxjs />,
      'State Lifting': <WithStateLifting />,
      context: <WithContext />,
      redux: <WithRedux />,
      HOC: <WithHOC />,
      Zustand: <WithZustand />,
    });
  });

  it('should have all keys in componentsByShareOption as valid ComponentsByShareOptionKey', () => {
    const keys = Object.keys(componentsByShareOption) as ComponentsByShareOptionKey[];
    keys.forEach((key) => {
      expect(key in componentsByShareOption).toBe(true);
    });
  });
});
