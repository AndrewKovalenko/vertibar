import test from 'ava';
import './../dist/vertibar';

test('isURI', (t) => {
  const a = [];
  t.is(a.first(), undefined, 'Array "first" improperly handles empty array');

  const b = [1, 2, 3];
  t.is(b.first(), b[0], 'Array "first" improperly handles NOT empty array');
});
