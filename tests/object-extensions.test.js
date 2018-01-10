import test from 'ava';
import '../src';

test('Object deepCopy', (t) => {
  const origin = {
    topLevelProp: {
      nestedObject: {
        one: 1,
        collection: [1, 2, [3, 4]],
      },
    },
    two: 2,
  };

  const copy = origin.deepCopy();
  origin.topLevelProp.nestedObject.one = 2;
  origin.topLevelProp.nestedObject.collection[2][0] = 'abc';

  t.is(copy.two, 2, 'deep copying object fails');
  t.is(copy.topLevelProp.nestedObject.one, 1, 'deep copying object fails');
  t.is(copy.topLevelProp.nestedObject.collection[2][0], 3, 'deep copying object fails');
});

test('Object isUndefined static method', (t) => {
  t.true(Object.isUndefined(undefined));
  t.false(Object.isUndefined(null));
  t.false(Object.isUndefined({}));
});

