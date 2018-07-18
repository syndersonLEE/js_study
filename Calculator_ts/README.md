기존 파일을 타입스크립트로 변환하기
================

타입스크립트를 이용해서 코드를 재설계 합니다.
-----------

1.타입스크립트 설계는 기존의 자바스크립트의 변수의 타입을 강제로 지정해주어
엄격한 프로그래밍 설계와 컴파일이 가능하고 확인이 가능하도록 하는 데에 장점이 있습니다.

그 설계를 적용한 첫번째 단계는 var을 let과 const로 지정해 줌으로서, 타입을 강제합니다.
이렇게 함으로써 컴파일 단계에서 오류가 나는 부분을 엄격히 확인해 주지만, 코드 설계 단계에서의 번거로움이 존재 합니다.

``` r        
let boolOperNum : boolean = false; 
let boolEval : boolean = true;
let calculMethod : string = ""; 
let queueData : number[] = []; 
let overQueue : boolean = false;
```

모든 설계 단계에서 변수를 let과 const로 설정해줌으로서 디버깅 단계에서 확실한 이점을 취할 수 있습니다.
또한 자바스크립트의 superset이기 때문에 기존의 var을 이용한 코딩도 불가능 하지는 않습니다.


2.기존의 다른 언어에서 사용했던 interface>class>module>library 처럼 단계적인 구축이
어려웠던 자바스크립트에서 인터페이스와 클래스를 도입함으로써, 대규모 코딩 작업에 효율적으로 이용할 수 있게 되었습니다.

제 코딩에서 인터페이스를 활용하기 어려운 측면이 있어 기존 코드에서 interface를 통해 svgAtt라는 새로운 타입을 지정하여
그 타입에 해당하는 함수를 사용하게 수정하였습니다.


``` r        
 interface svgAtt {
  width? : string;
  height? : string;
  class? : string;
  id? : string;
  x1 : string;
  y1 : string;
  x2? : string;
  y2? : string;
  t? : string;
  [index : string]: string;
}
```

```r
function makeBar(svgAtt){
              varBar.setAttributeNS (null, 'x', svgAtt.x1);
              varBar.setAttributeNS (null, 'y', svgAtt.y1);
            }
            const barLoc : string[] = [-----];
            for (let i in barLoc){
              let temp : svgAtt = {
                x1 : barLoc[i],
                y1 : "380"
              }
              makeBar(temp);
            }
```
svgAttr에서 선언한 변수의 타입을 barLoc에 svgAtt형태를 충족시켜 각 함수의 변수로 넣어 주었습니다.

