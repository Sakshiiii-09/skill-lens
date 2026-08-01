import { formatSize } from './app/lib/utils';

const testCases = [
  { bytes: 0, expected: '0 Bytes' },
  { bytes: 500, expected: '500 Bytes' },
  { bytes: 1024, expected: '1 KB' },
  { bytes: 1536, expected: '1.5 KB' },
  { bytes: 1048576, expected: '1 MB' },
  { bytes: 1073741824, expected: '1 GB' },
  { bytes: 20 * 1024 * 1024, expected: '20 MB' },
];

let allPassed = true;
testCases.forEach(({ bytes, expected }) => {
  const result = formatSize(bytes);
  if (result === expected) {
    console.log(`PASS: ${bytes} -> ${result}`);
  } else {
    console.log(`FAIL: ${bytes} -> expected ${expected}, got ${result}`);
    allPassed = false;
  }
});

if (!allPassed) {
  process.exit(1);
}
