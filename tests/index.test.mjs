import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('rounds a positive number', () => {
  assert.equal(api.roundSignificant(1234.56, 3), 1230);
});
test('rounds a small magnitude', () => {
  assert.equal(api.roundSignificant(0.00123456, 3), 0.00123);
});
test('preserves a negative sign', () => {
  assert.equal(api.roundSignificant(-987.6, 2), -990);
});
test('preserves zero', () => {
  assert.equal(api.roundSignificant(0, 4), 0);
});
test('keeps requested precision when possible', () => {
  assert.equal(api.roundSignificant(12.34, 4), 12.34);
});
test('rejects invalid precision', () => {
  assert.throws(() => api.roundSignificant(1, 0), RangeError);
});
