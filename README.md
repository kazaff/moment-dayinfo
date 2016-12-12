This plugin is used to calculate the target day or month's info.

More detail: [blog](http://blog.kazaff.me/2016/12/11/去年的今天就是你的deadline/)

```javascript
moment.setFirstDay(1);
console.log("当月总周数：", moment.totalOfWeekOfMonth('2026-02-01'));
console.log("当日为第几周：", moment.weekOfMonth('2026-02-02'));
console.log("当日为第几个星期几：", moment.numOfDayOfWeek('2026-02-02'));
console.log("当月第几个星期几是几号：", moment.dateOfNumOfDayOfWeek('2026-02', 0, 1));
```
