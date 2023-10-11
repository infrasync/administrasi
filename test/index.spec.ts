import { getProvinces } from '../src';

describe('index', () => {
  describe('myPackage', () => {
    it('should return a string containing the message', () => {
      const message = 'Hello';

      const result = getProvinces(message);

      expect(result).toMatch(message);
    });
  });
});
