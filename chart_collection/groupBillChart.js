document.addEventListener('DOMContentLoaded', function () {
  bb.generate({
    data: {
      columns: [
    ["data1", 30, 200, 100, 400, 150, 250],
    ["data2", 50, 20, 10, 40, 15, 25]
      ]
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billLine"
  });

  bb.generate({
    data: {
      columns: [
  	["data1", 30, 200, 100, 400, 150, 250],
  	["data2", 130, 100, 140, 200, 150, 50]
      ],
      type: "bar"
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billBar"
  });

  bb.generate({
    data: {
      columns: [
        ["setosa", 30],
  			["versicolor", 40],
  			["virginica", 20],
      ],
      type: "pie"
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billPie"
  });

  bb.generate({
    data: {
      x: "x",
      columns: [
      	["x", "Data A", "Data B", "Data C", "Data D", "Data E"],
      	["data1", 330, 350, 200, 380, 150],
      	["data2", 130, 100, 30, 200, 80],
      	["data3", 230, 153, 85, 300, 250]
      ],
      type: "radar",
      labels: true
    },
    radar: {
      axis: {
        max: 400
      },
      level: {
        depth: 4
      }
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billRader"
  });

  bb.generate({
    data: {
      columns: [
      	["data1", 30],
      	["data2", 120]
      ],
      type: "donut",
    },
    donut: {
      title: "Iris Petal Width"
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billDount"
  });

  bb.generate({
    data: {
      xs: {
        setosa: "setosa_x",
        versicolor: "versicolor_x"
      },
      columns: [
      	["setosa_x", 3.5, 3, 3.2, 3.1, 3.6, 3.9],
        ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8],
      	["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3],
      	["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6]
      ],
      type: "scatter"
    },
    axis: {
      x: {
        label: "Sepal.Width",
        tick: {
          fit: false
        }
      },
      y: {
        label: "Petal.Width"
      }
    },
    size: {
      width: 500,
      height: 250
    },
    bindto: "#billScatter"
  });



});
