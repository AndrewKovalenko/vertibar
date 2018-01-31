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

test('Function debounce uses caller context by default', async (t) => {
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


test.after(() => {
  fakeClock.restore();
});
