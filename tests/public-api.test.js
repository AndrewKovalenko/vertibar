import test from 'ava';
import './../dist/vertibar';

test('array first', (t) => {
  const a = [];
  t.is(a.first(), undefined, 'Array "first" improperly handles empty array');

  const b = [1, 2, 3];
  t.is(b.first(), b[0], 'Array "first" improperly handles NOT empty array');
});

test('array last', (t) => {
  const a = [];
  t.is(a.last(), undefined, 'Array "last" improperly handles empty array');

  const b = [1, 2, 3];
  t.is(b.last(), b[b.length - 1], 'Array "last" improperly handles NOT empty array');
});
