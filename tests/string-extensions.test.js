import test from 'ava';
import '../src';

test('isURI', (t) => {
  const URI = 'https://github.com/AndrewKovalenko/vertibar';
  const infalidUri = 'unknown:/w/hatever?qwe=%%%';

  t.true(URI.isURI(), 'String isURI returns "false" for correct URI');
  t.false(infalidUri.isURI(), 'String isURI returns "true" for incorrect URI');
});

test('capitalize', (t) => {
  const testString = 'capitalize me';
  const capitalizedTestString = 'Capitalize me';

  t.true(testString.capitalize() === capitalizedTestString, 'First charater of this string should be capital');
  t.true(testString[0] === 'c', 'Capitalize method keeps initial string immutable');
});
