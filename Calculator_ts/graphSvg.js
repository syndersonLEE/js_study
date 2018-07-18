function CreateSVG() {
    var xmlns = "http://www.w3.org/2000/svg";
    var svgContainer = document.getElementById("svgContainer");
    var svgElem = document.createElementNS(xmlns, "svg");
    svgContainer.appendChild(svgElem);
    svgElem.setAttributeNS(null, "text-align", "center");
    svgElem.setAttributeNS(null, "width", "360");
    svgElem.setAttributeNS(null, "height", "500");
    var calculBack = document.createElementNS(xmlns, "rect");
    svgElem.appendChild(calculBack);
    calculBack.setAttributeNS(null, 'class', "calculBack");
    calculBack.setAttributeNS(null, 'width', "360");
    calculBack.setAttributeNS(null, 'height', "470");
    var calculPanel = document.createElementNS(xmlns, "g");
    svgElem.appendChild(calculPanel);
    calculPanel.setAttributeNS(null, 'class', "calculPanel");
    var displayBox = document.createElementNS(xmlns, "rect");
    calculPanel.appendChild(displayBox);
    displayBox.setAttributeNS(null, 'class', "displayBox");
    displayBox.setAttributeNS(null, 'width', "300");
    displayBox.setAttributeNS(null, 'height', "70");
    var displayScreen = document.createElementNS(xmlns, "text");
    calculPanel.appendChild(displayScreen);
    displayScreen.setAttributeNS(null, 'id', "display");
    displayScreen.setAttributeNS(null, 'x', "60");
    displayScreen.setAttributeNS(null, 'y', "50");
    var button = document.createElementNS(xmlns, "g");
    svgElem.appendChild(button);
    button.setAttributeNS(null, 'class', "button");
    function createButton(att) {
        var varRect = document.createElementNS(xmlns, "rect");
        var varText = document.createElementNS(xmlns, "text");
        button.appendChild(varRect);
        button.appendChild(varText);
        varRect.setAttributeNS(null, 'x', att.x1);
        varRect.setAttributeNS(null, 'y', att.y1);
        varRect.setAttributeNS(null, 'class', "textRec");
        varRect.setAttributeNS(null, 'width', "60");
        varRect.setAttributeNS(null, 'height', "60");
        varRect.setAttributeNS(null, 'onclick', att.func);
        varText.setAttributeNS(null, 'x', att.x2);
        varText.setAttributeNS(null, 'y', att.y2);
        varText.setAttributeNS(null, 'class', "textButton");
        varText.setAttributeNS(null, 'onclick', att.func);
        varText.innerHTML = att.t;
    }
    var rectWid = ['35', '110', '185', '260'];
    var rectHei = ['95', '165', '235', '305', '375'];
    var numWid = ["59", "134", "210", "285"];
    var numHei = ["130", "202", "270", "340", "410"];
    var butFunc = ['clearNumDisplay("")', 'operNum("%")', 'operNum("/")', 'addNumDisplay(".")',
        'addNumDisplay("7")', 'addNumDisplay("8")', 'addNumDisplay("9")', 'operNum("*")',
        'addNumDisplay("4")', 'addNumDisplay("5")', 'addNumDisplay("6")', 'operNum("-")',
        'addNumDisplay("1")', 'addNumDisplay("2")', 'addNumDisplay("3")', 'operNum("+")',
        'addNumDisplay("0")', 'operNum("=")'];
    var butVal = ['C', '%', '/', '.',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '='];
    var iterVal = 0;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; (j < 4) && (iterVal < 18); j++) {
            var temp = {
                x1: rectWid[j],
                y1: rectHei[i],
                x2: numWid[j],
                y2: numHei[i],
                func: butFunc[iterVal],
                t: butVal[iterVal]
            };
            createButton(temp);
            iterVal++;
        }
    }
    //draw GRAPH
    var graphContainer = document.getElementById("svgContainer");
    var svgGraph = document.createElementNS(xmlns, "svg");
    graphContainer.appendChild(svgGraph);
    svgGraph.setAttributeNS(null, 'width', "900");
    svgGraph.setAttributeNS(null, 'height', "430");
    var axisLine = document.createElementNS(xmlns, "path");
    svgGraph.appendChild(axisLine);
    axisLine.setAttributeNS(null, 'd', "M100 30 L100 380 L800 380");
    axisLine.setAttributeNS(null, 'stroke', "black");
    axisLine.setAttributeNS(null, 'fill', "none");
    var gridLine = document.createElementNS(xmlns, "g");
    svgGraph.appendChild(gridLine);
    gridLine.setAttributeNS(null, 'class', "grid");
    function makeLine(svgAtt) {
        var varLine = document.createElementNS(xmlns, "line");
        gridLine.appendChild(varLine);
        varLine.setAttributeNS(null, 'class', svgAtt["class"]);
        varLine.setAttributeNS(null, 'x1', svgAtt.x1);
        varLine.setAttributeNS(null, 'x2', svgAtt.x2);
        varLine.setAttributeNS(null, 'y1', svgAtt.y1);
        varLine.setAttributeNS(null, 'y2', svgAtt.y2);
    }
    var xGridLen = ["226.6", "343.2", "460.2", "576.6", "693.3"];
    var yGridLen = ["88.3", "146.6", "205", "263.3", "321.6"];
    for (var i in xGridLen) {
        var temp = {
            "class": "xGridLine",
            x1: xGridLen[i],
            x2: xGridLen[i],
            y1: "30",
            y2: "380"
        };
        makeLine(temp);
    }
    for (var i in yGridLen) {
        var temp = {
            "class": "yGridLine",
            x1: "100",
            x2: "800",
            y1: yGridLen[i],
            y2: yGridLen[i]
        };
        makeLine(temp);
    }
    var xyLabel = document.createElementNS(xmlns, "g");
    svgGraph.appendChild(xyLabel);
    xyLabel.setAttributeNS(null, 'class', "xyLabel");
    function makeLabel(svgAtt) {
        var varText = document.createElementNS(xmlns, "text");
        xyLabel.appendChild(varText);
        varText.setAttributeNS(null, 'class', svgAtt["class"]);
        varText.setAttributeNS(null, 'x', svgAtt.x1);
        varText.setAttributeNS(null, 'y', svgAtt.y1);
        varText.innerHTML = svgAtt.t;
    }
    var xLabelWid = ['213', '318', '442', '554', '680'];
    var yLabelHei = ['30', '88.3', '146.6', '205', '263.3', '321.6', '380'];
    var xLabelVal = ["First", "Second", "Third", "Fourth", "Fifth"];
    var yLabelVal = ["120", "100", "80", "60", "40", "20", "0"];
    for (var i in xLabelWid) {
        var temp = {
            "class": "xLabel",
            x1: xLabelWid[i],
            y1: "410",
            t: xLabelVal[i]
        };
        makeLabel(temp);
    }
    for (var i in xLabelWid) {
        var temp = {
            "class": "yLabel",
            x1: "60",
            y1: yLabelHei[i],
            t: yLabelVal[i]
        };
        makeLabel(temp);
    }
    var resultMark = {
        "class": "resultMark",
        x1: "5",
        y1: "50",
        t: "Results"
    };
    makeLabel(resultMark);
    var fifthBar = document.createElementNS(xmlns, "g");
    svgGraph.appendChild(fifthBar);
    function makeBar(svgAtt) {
        var varBar = document.createElementNS(xmlns, "rect");
        fifthBar.appendChild(varBar);
        varBar.setAttributeNS(null, 'class', "recBar");
        varBar.setAttributeNS(null, 'x', svgAtt.x1);
        varBar.setAttributeNS(null, 'y', svgAtt.y1);
        varBar.setAttributeNS(null, 'width', "40");
        varBar.setAttributeNS(null, 'height', "0");
    }
    var barLoc = ["206.6", "323.2", "440", "556.6", "673.3"];
    for (var i in barLoc) {
        var temp = {
            x1: barLoc[i],
            y1: "380"
        };
        makeBar(temp);
    }
}
