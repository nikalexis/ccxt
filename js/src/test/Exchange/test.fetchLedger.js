// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
// EDIT THE CORRESPONDENT .ts FILE INSTEAD

import assert from 'assert';
import testSharedMethods from './base/test.sharedMethods.js';
import testLedgerEntry from './base/test.ledgerEntry.js';
async function testFetchLedger(exchange, code) {
    const method = 'fetchLedger';
    const items = await exchange.fetchLedger(code);
    assert(Array.isArray(items), exchange.id + ' ' + method + ' ' + code + ' must return an array. ' + exchange.json(items));
    const now = exchange.milliseconds();
    for (let i = 0; i < items.length; i++) {
        testLedgerEntry(exchange, method, items[i], code, now);
    }
    testSharedMethods.assertTimestampOrder(exchange, method, code, items);
}
export default testFetchLedger;
