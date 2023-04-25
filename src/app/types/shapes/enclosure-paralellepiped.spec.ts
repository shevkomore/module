import { EnclosureParalellepiped } from './enclosure-paralellepiped';

describe('EnclosureParalellepiped', () => {
  it('should create an instance with three parameters', () => {
    expect(new EnclosureParalellepiped(1,1,1)).toBeTruthy();
  });
});
