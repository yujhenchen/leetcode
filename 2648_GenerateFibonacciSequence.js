/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  current = 0;
  next = 1;
  while (true) {
    yield current;
    // let newNext = current + next;
    // current = next;
    // next = newNext;

    // swap using array destructuring
    [current, next] = [next, current + next];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
