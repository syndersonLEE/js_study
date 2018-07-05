window.addEventListener('DOMContentLoaded', function CreateSVG () {
            var xmlns = "http://www.w3.org/2000/svg";
            var svgContainer = document.getElementById ("svgContainer");
            var svgElem = document.createElementNS (xmlns, "svg");
            svgContainer.appendChild (svgElem);
            svgElem.setAttributeNS (null, "width", 360);
            svgElem.setAttributeNS (null, "height", 500);
            svgElem.setAttributeNS (null, "text-align", "center");

            var calculBack = document.createElementNS (xmlns, "rect");
            svgElem.appendChild (calculBack);
            calculBack.setAttributeNS (null, 'rx', "20");
            calculBack.setAttributeNS (null, 'ry', "20");
            calculBack.setAttributeNS (null, 'width', "360");
            calculBack.setAttributeNS (null, 'height', "470");
            calculBack.setAttributeNS (null, 'style', "fill:#9C8DCA;stroke:red;stroke-width:5;opacity:0.5;");

            var calculPanel = document.createElementNS (xmlns, "g");
            svgElem.appendChild (calculPanel);
            calculPanel.setAttributeNS (null, 'class', "calculPanel");
            calculPanel.setAttributeNS (null, 'width', "400");
            calculPanel.setAttributeNS (null, 'font-family', "Comic Sans MS");

            var displayBox =  document.createElementNS (xmlns, "rect");
            calculPanel.appendChild (displayBox);
            displayBox.setAttributeNS (null, 'x', "30");
            displayBox.setAttributeNS (null, 'y', "10");
            displayBox.setAttributeNS (null, 'rx', "20");
            displayBox.setAttributeNS (null, 'ry', "20");
            displayBox.setAttributeNS (null, 'width', "300");
            displayBox.setAttributeNS (null, 'height', "70");
            displayBox.setAttributeNS (null, 'style', "fill:#ccffff;");

            var displayScreen = document.createElementNS (xmlns, "text");
            calculPanel.appendChild (displayScreen);
            displayScreen.setAttributeNS (null, 'id', "display");
            displayScreen.setAttributeNS (null, 'font-size', "16");
            displayScreen.setAttributeNS (null, 'x', "60");
            displayScreen.setAttributeNS (null, 'y', "50");

            var button = document.createElementNS (xmlns, "g");
            svgElem.appendChild (button);
            button.setAttributeNS (null, 'class', "button");

            function createButton (rx, ry, tx, ty, func, t) {
                var varRect = document.createElementNS (xmlns, "rect");
                var varText = document.createElementNS (xmlns, "text");
                button.appendChild (varRect);
                button.appendChild (varText);
                varRect.setAttributeNS (null, 'x', rx);
                varRect.setAttributeNS (null, 'y', ry);
                varText.setAttributeNS (null, 'class', "textRec");
                varRect.setAttributeNS (null, 'width', "50");
                varRect.setAttributeNS (null, 'height', "50");
                varRect.setAttributeNS (null, 'onclick', func);
                varText.setAttributeNS (null, 'x', tx);
                varText.setAttributeNS (null, 'y', ty);
                varText.setAttributeNS (null, 'class', "textButton");
                varText.setAttributeNS (null, 'fill', "black");
                varText.setAttributeNS (null, 'stroke-width', "0");
                varText.setAttributeNS (null, 'onclick', func);
                varText.innerHTML = t;
            }

            createButton ("40", "100", "57", "130", 'clearNumDisplay("")', 'C');
            createButton ("115", "100", "132", "130", 'operNum("%")', '%');
            createButton ("190", "100", "212", "130", 'operNum("/")', '/');
            createButton ("265", "100", "287", "130", 'addNumDisplay(".")', '.');
            createButton ("40", "170", "59", "202", 'addNumDisplay("7")', '7');
            createButton ("115", "170", "134", "202", 'addNumDisplay("8")', '8');
            createButton ("190", "170", "210", "202", 'addNumDisplay("9")', '9');
            createButton ("265", "170", "286", "202", 'operNum("*")', '*');
            createButton ("40", "240", "59", "270", 'addNumDisplay("4")', '4');
            createButton ("115", "240", "134", "270", 'addNumDisplay("5")', '5');
            createButton ("190", "240", "210", "270", 'addNumDisplay("6")', '6');
            createButton ("265", "240", "286", "270", 'operNum("-")', '-');
            createButton ("40", "310", "59", "340", 'addNumDisplay("1")', '1');
            createButton ("115", "310", "134", "340", 'addNumDisplay("2")', '2');
            createButton ("190", "310", "210", "340", 'addNumDisplay("3")', '3');
            createButton ("265", "310", "284", "340", 'operNum("+")', '+');
            createButton ("40", "380", "59", "410", 'addNumDisplay("0")', '0');
            createButton ("115", "380", "134", "410", 'operNum("=")', '=');
            // 115 380 210 410
            // var equalButton = document.getElementsByClassName("textRec")[17];
            // equalButton.setAttributeNS(null, "width", "200");

            //draw GRAPH
            var graphContainer = document.getElementById ("svgContainer");
            var svgGraph = document.createElementNS (xmlns, "svg");
            graphContainer.appendChild (svgGraph);
            svgGraph.setAttributeNS (null, 'width', "900");
            svgGraph.setAttributeNS (null, 'height', "430");

            var axisLine = document.createElementNS (xmlns, "path");
            svgGraph.appendChild (axisLine);
            axisLine.setAttributeNS (null, 'd', "M100 30 L100 380 L800 380");
            axisLine.setAttributeNS (null, 'stroke', "black");
            axisLine.setAttributeNS (null, 'fill', "none");

            var gridLine = document.createElementNS (xmlns, "g");
            svgGraph.appendChild (gridLine);
            gridLine.setAttributeNS (null, 'class', "grid");

            function makeLine (makeClassName, x1, x2, y1, y2){
              var varLine = document.createElementNS (xmlns, "line");
              gridLine.appendChild (varLine);
              varLine.setAttributeNS (null, 'class', makeClassName);
              varLine.setAttributeNS (null, 'x1', x1);
              varLine.setAttributeNS (null, 'x2', x2);
              varLine.setAttributeNS (null, 'y1', y1);
              varLine.setAttributeNS (null, 'y2', y2);
            }

            makeLine("xGridLine", 216.6,216.6,30,380);
            makeLine("xGridLine", 333.2,333.2,30,380);
            makeLine("xGridLine", 450.2,450.2,30,380);
            makeLine("xGridLine", 566.6,566.6,30,380);
            makeLine("xGridLine", 683.3,683.3,30,380);
            makeLine("yGridLine", 100,800,88.3,88.3);
            makeLine("yGridLine", 100,800,146.6,146.6);
            makeLine("yGridLine", 100,800,205,205);
            makeLine("yGridLine", 100,800,263.3,263.3);
            makeLine("yGridLine", 100,800,321.6,321.6);

            var xyLabel = document.createElementNS (xmlns, "g");
            svgGraph.appendChild (xyLabel);
            xyLabel.setAttributeNS (null, 'class', "xyLabel");

            function makeLabel (makeClassName, x, y, t){
              var varText = document.createElementNS (xmlns, "text");
              xyLabel.appendChild (varText);
              varText.setAttributeNS (null, 'class', makeClassName);
              varText.setAttributeNS (null, 'x', x);
              varText.setAttributeNS (null, 'y', y);
              varText.innerHTML = t;
            }

            makeLabel("xLabel", 203, 410, "First");
            makeLabel("xLabel", 308, 410, "Second");
            makeLabel("xLabel", 432, 410, "Third");
            makeLabel("xLabel", 544, 410, "Fourth");
            makeLabel("xLabel", 670, 410, "Fifth");
            makeLabel("yLabel", 50, 30, "120");
            makeLabel("yLabel", 50, 88.3, "100");
            makeLabel("yLabel", 50, 146.6, "80");
            makeLabel("yLabel", 50, 205, "60");
            makeLabel("yLabel", 50, 263.3, "40");
            makeLabel("yLabel", 50, 321.6, "20");
            makeLabel("yLabel", 50, 380, "0");
            makeLabel("Results", 0, 50, "Results");

            var fifthBar = document.createElementNS (xmlns, "g");
            svgGraph.appendChild (fifthBar);

            function makeBar (x, y){
              var varBar = document.createElementNS (xmlns, "rect");
              fifthBar.appendChild (varBar);
              varBar.setAttributeNS (null, 'class', "recBar");
              varBar.setAttributeNS (null, 'x', x);
              varBar.setAttributeNS (null, 'y', y);
              varBar.setAttributeNS (null, 'width', 40);
              varBar.setAttributeNS (null, 'height', 0);
            }

            makeBar(196.6, 30);
            makeBar(313.2, 30);
            makeBar(430, 30);
            makeBar(546.6, 30);
            makeBar(663.3, 30);

})
