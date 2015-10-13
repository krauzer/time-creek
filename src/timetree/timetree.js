const _times = Symbol();
const _intervals = Symbol();
const _sorted = Symbol();

export class TimeTree {
  constructor(date) {
    this[_times] = [+date];
    this[_sorted] = false;
    this.timeDetails = new Map();
    this[_intervals]= [];
    this.timeDetails.set(+date, {});
  }

  add(date){
    this[_times].push(+date);
    this[_sorted] = false;
    this.timeDetails.set(+date, {})
  }

  sort(){
    this[_times].sort();
    this[_sorted] = true;
  }

  setIntervals(){
    if (!this.sorted) this.sort();
    this.times.forEach((v,i,a) => {
      if (a[i+1]) this[_intervals].push(a[i+1] - v);
    });
  }

  get times(){
    if (!this.sorted) this.sort();
    return this[_times].slice();
  }

  get intervals(){
    return this[_intervals].slice();
  }

  get sorted(){
    return this[_sorted];
  }

}