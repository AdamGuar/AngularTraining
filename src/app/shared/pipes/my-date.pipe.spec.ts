import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe = null

  beforeEach(()=>{
    pipe = new MyDatePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return proper year when passed UTC date string',()=>{
    const dateString = 'Thu Apr 04 2019 02:31:53 GMT+0200 (Central European Summer Time)'
    const input = pipe.transform(dateString);
    const output = /2019/;
    expect(input).toMatch(output);
  })

  it('should return proper month when passed UTC date string',()=>{
    const dateString = 'Thu Apr 04 2019 02:31:53 GMT+0200 (Central European Summer Time)'
    const input = pipe.transform(dateString);
    const output = /kwietnia/;
    expect(input).toMatch(output);
  })

  it('should return null when passed falsy values',()=>{
    expect(pipe.transform('')).toEqual(null);
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(null);
  });

});
