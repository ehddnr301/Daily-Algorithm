# Daily Algorithm

## 두개뽑아덧셈

- 나 : 숫자를 만들어서 중복검사후 array 넣기
- 다른코드 : 숫자를 만들어서 넣은후에 중복을 없애기.

### Set

- [...new Set(arr)]
- Set 은 어떤 타입이던 유니크한 value 만 저장합니다.
- The Set object lets you store unique values of any type, whether primitive values or object references.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

## 인형뽑기

- 나
  - for 루프로 각각 이번에 실행할 moves가 무엇인지 얻는다. (crane)
  - 이번에 실행할 moves(가로 몇번째) 에 따라 제일 위에서 부터 검사하면서 내려온다. (thisTry)
  - thisTry 값이 0이 아니라면 인형뽑기를 한다.
- 다른코드 : 대체적으로 풀이가 비슷한 느낌이었던것 같다.

## 키패드 누르기

- 실패
- 각 버튼을 obj형태로 구성해서 x,y좌표로 나타내는 풀이가 제일 깔끔해 보였습니다.