import { rxjsShareSubject, RxjsAmounts } from './rxjsShareSubject';

const mockData: RxjsAmounts = { wallet: 100, exchange: 200 };

describe('rxjsShareSubject', () => {
  it('should set and get subject values correctly', (done) => {
    rxjsShareSubject.getSubject().subscribe((data) => {
      expect(data).toEqual(mockData);
      done();
    });
    rxjsShareSubject.setSubject(mockData);
  });

  it('should handle multiple subscribers', (done) => {
    let callCount = 0;
    const subscriber = (data: RxjsAmounts) => {
      callCount++;
      if (callCount === 2) {
        expect(data).toEqual(mockData);
        done();
      }
    };
    rxjsShareSubject.getSubject().subscribe(subscriber);
    rxjsShareSubject.getSubject().subscribe(subscriber);
    rxjsShareSubject.setSubject(mockData);
  });

});
