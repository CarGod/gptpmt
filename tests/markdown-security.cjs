const assert = require('node:assert/strict');
const { Worker } = require('node:worker_threads');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
assert.match(md.render('"hello" -- **world**\n\n[guide][ref]\n\n[ref]: https://example.com'), /“hello” – <strong>world<\/strong>/);
assert.match(md.render('[guide][ref]\n\n[ref]: https://example.com'), /href="https:\/\/example.com"/);
// Exercise both advisory paths locally, with an isolated worker and hard timeout.
const worker = new Worker(`
  const { parentPort, workerData } = require('node:worker_threads');
  const md = require(workerData.module)({typographer: true});
  const start = performance.now();
  md.render('"a '.repeat(32000) + "b' ".repeat(32000));
  md.render('[label]: /url "' + 'continuation\\n'.repeat(24000));
  parentPort.postMessage({ elapsedMs: performance.now() - start });
`, { eval: true, workerData: { module: require.resolve('markdown-it') } });
const timeout = setTimeout(() => { worker.terminate(); throw new Error('Markdown security regression exceeded 5 seconds'); }, 5000);
worker.on('message', result => { clearTimeout(timeout); console.log('Markdown rendering and security regressions passed', result); });
worker.on('error', error => { clearTimeout(timeout); throw error; });
