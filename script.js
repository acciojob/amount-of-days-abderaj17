//your JS code here. If required.
function daysOfAYear(year) {
  	if(year % 4 == 0){
		if(year % 400 == 0){
			if(year % 400 == 0){
				return 366
			}else{
				return 365
			}
		}else{
			return 366
		} else{
		return 365;
		}
	}
}