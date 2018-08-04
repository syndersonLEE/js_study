

// Script
var chart = bb.generate({
  data: {
    columns: [
      ["data1", 30, -200, -100, 400, 150, 250],
    	["data2", -50, 150, -150, 150, -50, -150],
    	["data3", -100, 100, -40, 100, -150, -50]
    ]
  },
  axis: {
    y: {
      tick: {
        format: function(x) {
			return d3.format("$,")(x);
       }
      }
    }
  },
  bindto: "#YAxisTickFormat"
});

setTimeout(function() {
	chart.transform("pie");
}, 1000);

setTimeout(function() {
	chart.transform("line");
}, 2000);
