// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
let size = 8;
let path = ["U", "D", "D", "D", "U", "D", "U", "U"];
function count_valley(size, path) {
  seaLevel = 0;
  mountain = 0;
  valley = 0;
  if (!path || path.length !== size) return 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      if (seaLevel === 0) {
        mountain++;
      }
      seaLevel++;
    }
    if (path[i] === "D") {
      if (seaLevel === 0) {
        valley++;
      }
      seaLevel--;
    }
  }

  return valley;
}
