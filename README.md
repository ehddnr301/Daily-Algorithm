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

## 다트게임

- 실패
  
- score, bonus, option 을 각각 모아서 마지막에 계산하였습니다.
- number만 추출하는 과정에서 10을 처리하는 과정이 잘못되었어서 일부테스트를 통과하지못했지만 수정하였습니다!
- parseInt('10sfweioqwef') 의 결과는 10 입니다.

## 점프와 순간이동

- 처음 1 코드를 제출했을때 전부 pass 했으나 효율성에서 0점이여서 다시 시도해야합니다.
- console.log을 안지워서 통과를 못했던것이었습니다. ㅋㅋ

## 영어 끝말잇기

- 초기 3개는 통과했는데 다른 테스트 케이스를 통과하지못해 수정이 필요합니다.

## 위장

- 초기 테스트는 통과했는데 다른 테스트 케이스를 통과하지 못했습니다.
- 공식을 잘못이해한듯 합니다.









