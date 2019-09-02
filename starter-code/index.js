class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = this.items.length;
    }
    add(x) {
      this.items.push(x);
      this.items.sort((a,b) => a > b ? 1 : a < b ? -1 : 0);
      this.length = this.items.length;
    }
    get(pos) {
      return this.items[pos];
    }
    max() {
      let max = -Infinity;
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items[this.length-1]
      }
    }
    min() {
      let min = +Infinity;
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items[0]
      }
    }
    average() { 
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        let average = this.sum()/this.length;
return average
      }
    }
    sum() {
      if (this.items.length === 0) {
        return 0;
      } else {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
          sum += this.items[i];
        }
        return sum;
      }
    }
  };
  
  module.exports = SortedList;