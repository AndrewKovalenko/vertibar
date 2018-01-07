import test from 'ava';
import '../src';

test('isURI', (t) => {
  const URI = 'https://github.com/AndrewKovalenko/vertibar';
  const infalidUri = 'unknown:/w/hatever?qwe=%%%';

  t.true(URI.isURI(), 'String isURI returns "false" for correct URI');
  t.false(infalidUri.isURI(), 'String isURI returns "true" for incorrect URI');
});
