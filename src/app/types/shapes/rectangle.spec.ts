import { Rectangle } from './rectangle';

describe('Rectangle', () => {
  it('should create an instance with two number parameters', () => {
    expect(new Rectangle(1,1)).toBeTruthy();
  });
  it('should have an Area parameter', () => {
    expect(new Rectangle(1,1).Area).toBeTruthy();
  })
});
