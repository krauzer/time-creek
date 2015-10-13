

export class TimeTree {
  constructor(date) {
    this.times = [+date];
    this.sorted = false;
    this.timeDetails = new Map();
    this.intervals = [];
    this.timeDetails.set(+date, {});
  }

  add(date){
    this.times.push(+date);
    this.sorted = false;
    this.timeDetails.set(+date, {})
  }

  sort(){
    this.times.sort();
    this.sorted = true;
  }

  setIntervals(){
    if (!this.sorted) this.sort();
    this.times.forEach((v,i,a) => {
      if (a[i+1]) this.intervals.push(a[i+1] - v);
    });
  }

  get times(){
    if (!this.sorted) this.sort();
    return this.times.slice();
  }

  get intervals(){
    return this.intervals.slice();
  }

}
