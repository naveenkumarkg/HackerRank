//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

let size = 5;
let arr = [1, 2, 1, 2, 3];

console.log(`Size: ${size}`);
console.table(arr);

function pairOfSocks(size, ar) {
  // Vaccination
  if (!ar || ar.length !== size) return 0;

  let numberOfPairs = 0;
  let newSocksCount = new Map();


  // check for pairs from the array
  for (let i = 0; i < ar.length; i++) {
    let sock = ar[i];

    if (!newSocksCount.has(sock)) {
      newSocksCount.set(sock, 1);
    } else {
      let count = newSocksCount.get(sock) + 1;
      newSocksCount.set(sock, count);
    }
  }

  // get pair of socks
  for (let type of newSocksCount.keys()) {
    let pair = newSocksCount.get(type);
    numberOfPairs += Math.floor(pair / 2);
  }
  console.table(newSocksCount);
  return numberOfPairs;
}

console.log("Total Number of Pairs: ", pairOfSocks(size, arr));
