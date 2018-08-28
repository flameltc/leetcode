/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if(intervals.length==0) return []
  var len=intervals.length
  var start=[]
  var nd=[]
  for(var i=0;i<len;i++){
    start[i]=intervals[i].start
    nd[i]=intervals[i].end
  }
  start.sort((a,b)=>a-b)
  nd.sort((a,b)=>a-b)
  var e=0,s=1,k=0
  var res=[]
  while(s<len){
    if(start[s]>nd[e]){
      res.push(new Interval(start[k],nd[e]))
      k=s
    }
    e++
    s++
  }
  res.push(new Interval(start[k],nd[e]))
  return res
};

