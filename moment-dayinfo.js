(function () {
  var moment = (typeof require !== 'undefined' && require !== null) && !require.amd ? require('moment') : this.moment;
	var firstDay = 0;

	// 设置每周起始日是星期几，num范围：0~6，0代表星期日，1代表星期一，...，6代表星期六
	moment.setFirstDay = function (num){
		firstDay = num;
	};

	// 返回指定月份包含的总周数，例如：2015年8月份总共包含6周
  moment.totalOfWeekOfMonth = function (date) {
		var origin = moment(date);
		var dd = moment(date);
		dd.date(1);

		var totalOfWeekOfMonth = 0;
		var step = 1;
		var plus = dd.day() !== firstDay ? 2 : 1;	// 若1号不是周起始日，相当于第一周，碰见第一个礼拜日时，就需要+2，之后再碰见周日只需要+1
    while(dd.month() === origin.month()){
        if(dd.day() === firstDay){
            totalOfWeekOfMonth += plus;
						plus = 1;
						step = 7;
        }
        dd.add(step, 'd');
    }
    return totalOfWeekOfMonth;
  };

	// 返回指定日期属于当月的第几周，例如：当日属于9月份的第三个周
	moment.weekOfMonth = function (date){
		var origin = moment(date);
    var dd = moment(date);
    dd.date(1);

    var weekOfMonth = dd.day() === firstDay ? 0 : 1;	// 若该月第一天是周起始日，为了避免下面循环中重复累加，初始值应该为0
    while(dd.date() <= origin.date() && dd.month() === origin.month()){
        if(dd.day() === firstDay){
            weekOfMonth++;
        }
        dd.add(1, 'd');
    }
    return weekOfMonth;
	}

	// 返回指定日期在当月中是第几个礼拜几，例如：当日为9月份的第二个礼拜三
	moment.numOfDayOfWeek = function (date){
		var origin = moment(date);
    var dd = moment(date);
    dd.date(1);

    var numOfDayOfWeek = 0;
    while(dd.date() <= origin.date() && dd.month() === origin.month()){
        if(dd.day() === origin.day()){
            numOfDayOfWeek++;
        }
        dd.add(1, 'd');
    }
    return numOfDayOfWeek;
	}

	// 返回指定月份中指定序号的指定星期的日期，例如：9月份第二个礼拜三的日期
	moment.dateOfNumOfDayOfWeek = function (date, dayOfWeek, num){
    var dd = moment(date);
    dd.date(1);
		var month = dd.month();
		var times = 1;

    while(dd.month() === month){
        if(dd.day() === dayOfWeek){
					if(times === num){
						return dd.format('YYYY-MM-DD');
					}
					times++;
        }
        dd.add(1, 'd');
    }
    return undefined;
	}

  if (typeof module !== "undefined" && module !== null) {
    module.exports = moment;
  } else {
    this.moment = moment;
  }
}).call(this);
