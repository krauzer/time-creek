

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


}
