// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
const isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

export const isISRC = (str: string) => {
  assertString(str);
  return isrc.test(str);
};
