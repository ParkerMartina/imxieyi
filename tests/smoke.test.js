import test from 'node:test';
import assert from 'node:assert';
import server from '../backend/src/index.js';

 test('smoke', async (t)=>{
   assert.ok(server);
 });
