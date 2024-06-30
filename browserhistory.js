class BrowserHistory {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }
  visit(url) {
    this.history.push(url);
    this.currentIndex = this.history.length - 1;
  }
  current() {
    return this.history[this.currentIndex];
  }
  backward() {
    this.currentIndex = Math.max(0, --this.currentIndex);
  }
  forward() {
    Math.min(this.history.length - 1, ++this.currentIndex);
  }
}

const bh = new BrowserHistory();
bh.visit("A");
console.log(bh.current());
bh.visit("B");
console.log(bh.current());
bh.visit("C");
console.log(bh.current());
bh.backward();
console.log(bh.current());
bh.visit("D");
console.log(bh.current());
