import test from 'node:test';
import assert from 'node:assert';
import { calculateInterest } from '../backend/src/modules/lending.js';
import { getSwapOutput } from '../backend/src/modules/dex.js';
import { autoCompound } from '../backend/src/modules/yield.js';
import { StableVault } from '../backend/src/modules/stablecoin.js';
import { Governance } from '../backend/src/modules/governance.js';

test('lending calculateInterest simple', () => {
  assert.strictEqual(calculateInterest(1000, 0.1, 1), 100);
});

test('dex getSwapOutput monotonic', () => {
  const out1 = getSwapOutput(1000, 100000, 100000);
  const out2 = getSwapOutput(2000, 100000, 100000);
  assert.ok(out2 > out1);
});

test('yield autoCompound daily', () => {
  const result = autoCompound(1000, 0.1, 30);
  assert.ok(result > 1000);
});

test('stablecoin vault mint', () => {
  const v = new StableVault(1.5);
  assert.strictEqual(v.mint(1500), 1000);
});

test('governance proposal voting', () => {
  const g = new Governance();
  const id = g.createProposal('Add new pool');
  g.vote(id);
  assert.strictEqual(g.proposals[0].votes, 1);
});
