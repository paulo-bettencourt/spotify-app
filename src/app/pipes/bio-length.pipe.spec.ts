import { TruncatorPipe } from './bio-length.pipe';

describe('BioLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatorPipe();
    expect(pipe).toBeTruthy();
  });
});
