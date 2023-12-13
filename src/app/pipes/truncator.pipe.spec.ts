import { TruncatorPipe } from './truncator';

describe('BioLengthPipe', () => {

  let pipe: TruncatorPipe;

  beforeEach(() => {
    pipe = new TruncatorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should invoke the transform pipe function', () => {
    let mockBiography = "hello. world. this. is. a. sentence.";
    let mockNumber = 2;
    const truncatedText = pipe.transform(mockBiography, mockNumber);
    expect(truncatedText).toBe("hello. world.");
  });
});
