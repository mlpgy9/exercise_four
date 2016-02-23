$(document).ready(function() {

	getData();

});




function getData() {

	console.log();

	$.getJSON("columbia.json", function(schoolsData) {
	//Callback runs after the data is loaded.
	
	loopThroughData(schoolsData);
	});
	
	}
	
	
function loopThroughData(s) {

	for (i=0 ; i<s.length; i++){
	
		var schoolName = s[i]["SCHOOL_NAME"];
		var year = s[i]["YEAR"];
		var gradPct = s[i]["GRADUATES_PCT"];
	
		//If graduation percent is less than 50...
		//use '<' operator to test for values less than 50%
		//use '&&' to indicate 'AND'
// 		if (year === 2002 && gradPct != 0){
// 		//do this...
// 		console.log(year, schoolName, gradPct);
// 		}
// 		}
// 		
	

	var barWidth = gradPct * 8;

	if (year === 2014 && gradPct != 0) {
		
	$(".chart").append("<p class='name'>"+schoolName+", "+year+"</p>" + 
	"<div class= 'val'>"+gradPct+"%</div>" +
	"<div class='bar' style='width: "+barWidth+"px'></div>"
	);	
	
	
	
	}
	}
	}
	



