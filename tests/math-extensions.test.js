import test from 'ava';
import '../src/extensions/math';

test('Math roundTo', (t) => {
  const integerResult = Math.roundTo(1, 2).toString();
  t.is(integerResult, '1', 'roundTo is does not round integer properly');

  const floatResult = Math.roundTo(1.25, 2).toString();
  t.is(floatResult, '1.25', 'roundTo is does not round integer properly');

  const floatWithTrunkResult = Math.roundTo(1.25376, 3).toString();
  t.is(floatWithTrunkResult, '1.254', 'roundTo is does not round integer properly');
});
