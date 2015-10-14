import {TimeTree} from '../src/timetree/timetree';
import {expect} from 'chai';

describe("TimeTree", ()  => {

  it("sorts added dates", () => {
    let tree = new TimeTree("1998");
    tree.add("2011");
    tree.add("1987");

    const dates = tree.times;

    expect(dates).to.eql([1987,1998,2011]);
  });

  it("creates measurements for the intervals between dates", () => {
    let tree = new TimeTree("1998");
    tree.add("2011");
    tree.add("1987");

    tree.setIntervals();

    const intervals = tree.intervals;

    expect(intervals).to.eql([11,13]);
  });

});