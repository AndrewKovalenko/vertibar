import test from 'ava';
import { spy, useFakeTimers } from 'sinon';
import '../src';

const THROTTLE_DELAY = 200;
const CALL_REPEATING_INTERVAL = 100;
const LITTLE_BIT_LATER = 10;
const NUMBER_OF_DESIRED_CALLS = 3;

let fakeClock;

test.before(() => {
  fakeClock = useFakeTimers();
});


const makeCalls = async (mockFunction, mockCallArguments) => {
  const result = new Promise((resolve) => {
    let callsAttempts = 0;

    const intervalId = setInterval(() => {
      callsAttempts++;
      mockFunction(...mockCallArguments);

      if (callsAttempts >= NUMBER_OF_DESIRED_CALLS) {
        clearInterval(intervalId);
        fakeClock.tick(THROTTLE_DELAY + LITTLE_BIT_LATER);
        resolve();
      }
    }, CALL_REPEATING_INTERVAL);
  });

  fakeClock.tick((NUMBER_OF_DESIRED_CALLS * CALL_REPEATING_INTERVAL) + LITTLE_BIT_LATER);

  return result;
};

test('Function debounce', async (t) => {
  const mockFunction = spy();
  const mockContext = {};
  const mockCallArguments = [1, 2, 3];

  const throtteledMock = mockFunction.debounce(THROTTLE_DELAY, mockContext);
  await makeCalls(throtteledMock, mockCallArguments);

  t.true(mockFunction.calledOnce);
  t.true(mockFunction.calledWith(...mockCallArguments));
  t.true(mockFunction.calledOn(mockContext));
});

test('Function debounce uses initial caller context by default', async (t) => {
  const mockFunction = spy();
  const mockContext = {};
  const mockCallArguments = [1, 2, 3];

  const throtteledMock = mockFunction.debounce(THROTTLE_DELAY);
  const artificialContextCall = makeCalls.bind(mockContext);
  await artificialContextCall(throtteledMock, mockCallArguments);

  t.true(mockFunction.calledOnce);
  t.true(mockFunction.calledWith(...mockCallArguments));
  t.true(mockFunction.calledOn(mockFunction));
});

test('Function debounce throws an error if there is no waiting parameter passed', async (t) => {
  const mockFunction = spy();
  const error = t.throws(() => {
    mockFunction.debounce();
  }, Error);

  t.is(error.message, 'Missing debounce waiting period.');
});


test('Function throttle', async (t) => {
  const mockFunction = spy();
  const mockContext = {};
  const mockCallArguments = [1, 2, 3];
  const DELAY_FOR_TWO_CALLS = THROTTLE_DELAY / 2;
  const throttleMock = mockFunction.throttle(DELAY_FOR_TWO_CALLS, mockContext);
  await makeCalls(throttleMock, mockCallArguments, CALL_REPEATING_INTERVAL);

  t.is(mockFunction.callCount, 2, 'Function was not throtteled as expected');
  t.true(mockFunction.calledWith(...mockCallArguments));
  t.true(mockFunction.calledOn(mockContext));
});


test('Function throttle uses initial caller context by default', async (t) => {
  const mockFunction = spy();
  const mockContext = {};
  const mockCallArguments = [1, 2, 3];
  const throttleMock = mockFunction.throttle(THROTTLE_DELAY);
  const artificialContextCall = makeCalls.bind(mockContext);
  await artificialContextCall(throttleMock, mockCallArguments, CALL_REPEATING_INTERVAL);

  t.true(mockFunction.calledOnce);
  t.true(mockFunction.calledWith(...mockCallArguments));
  t.true(mockFunction.calledOn(mockFunction));
});

test('Function throttle throws an error if there is no waiting parameter passed', async (t) => {
  const mockFunction = spy();
  const error = t.throws(() => {
    mockFunction.throttle();
  }, Error);

  t.is(error.message, 'Missing throttle rate.');
});

test.after(() => {
  fakeClock.restore();
});
