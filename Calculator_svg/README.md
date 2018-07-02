Calculator_svg 실습
================

'svg' 를 이용해서 기존 'Calculator_2'의 html을 수정하고 그래프를 삽입합니다.

svg 태그로 수정
-----------
``` r        
<g class="calculPanel" width="400" font-family="Comic Sans MS">
	<rect x="30" y="10" rx="20" ry="20" width="300" height="70" style="fill:#ccffff;" />
	<text id="display" font-size="16" x="60" y="50"></text>
</g>
```
기존 div로 구성되어 있던 태그들은 전부 svg로 수정하였음
예시 코드는 display부분을 수정한것

그래프로 변환
-----------

``` r        
function addDataQueue(displayedValue){
  if(queueData.length < 5){
    queueData.push(displayedValue);
  }
  else{
    queueData.shift();
    queueData.push(displayedValue);
  }
}
```


큐를 이용해서 수식을 계산할 때마다 데이터에 그래프로 변환해 줌

#### 실습간 미해결 과제 및 의문점

1.text 크기 제한이 안되어 숫자가 오버 될 경우에는 뚫고 지나감 -> svg 태그 안에 svg 태그가 들어가지 않기 때문에, 이미 그려진 화면 위에 제한은 불가

2.그려진 태그간의 부모 자식 관계가 g태그 제외하고 없는가?


