import test from 'ava';
import { stub } from 'sinon';

import * as common from '../src/extensions/common';
import '../src';

test.before(() => {
  stub(common, 'deepCopy');
});

test('array first', (t) => {
  const a = [];
  t.is(a.first, undefined, 'Array "first" improperly handles empty array');

  const b = [1, 2, 3];
  t.is(b.first, b[0], 'Array "first" improperly handles NOT empty array');
});

test('array last', (t) => {
  const a = [];
  t.is(a.last, undefined, 'Array "last" improperly handles empty array');

  const b = [1, 2, 3];
  t.is(b.last, b[b.length - 1], 'Array "last" improperly handles NOT empty array');
});

test('array empty', (t) => {
  const a = [];
  t.true(a.empty(), 'Array "empty" is false for an empty array');

  const b = [1, 2, 3];
  t.false(b.empty(), 'Array "empty" is true for a NOT empty array');
});

test('array deepCopy', (t) => {
  const a = [1, { a: 2 }];
  a.deepCopy();

  t.true(common.deepCopy.calledOnce, 'deepCopy was not called for an array');
  t.true(common.deepCopy.calledOn(a), 'deepCopy was not called the specific array instance');
});

test('array flatten', (t) => {
  const a = [1, [2, 3, [4, 5]]];
  const expectedResult = [1, 2, 3, 4, 5];

  const actualResult = a.flatten();

  t.is(expectedResult.length, actualResult.length, 'Array does not flatten properly');

  expectedResult.forEach((element, index) => {
    t.is(element, actualResult[index], 'Array elements do not match after flattening');
  });
});

test('array head', (t) => {
  const a = [1, 2, 4];

  t.is(a.head, a[0], 'Array head does not read first element');
});

test('array tail', (t) => {
  const a = [1, 2, 4];
  const expectedResult = a.slice(1);

  t.is(a.tail.length, a.length - 1, 'Array tail does not work properly');

  a.tail.forEach((element, index) => {
    t.is(element, expectedResult[index], 'Array tail elements do not match');
  });

  t.is([].tail.length, 0, 'tail of an empty array is an empty array');
});

test.after(() => {
  common.deepCopy.restore();
});
