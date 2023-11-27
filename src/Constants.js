const GAME_MSG = {
  INPUT: {
    NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    ROUND_COUNT: '시도할 횟수는 몇 회인가요?',
  },
  OUTPUT: {
    ROUND_RESULT: '실행 결과',
    WINNER: '최종 우승자 : ',
  },
};

const NEW_LINE = '\n';

const CONDITION = {
  NUMBER_RANGE: {
    FROM: 0,
    TO: 9,
  },
  FORWARD_STANDARD: 4,
  GO_FORWARD: 1,
};

export { GAME_MSG, NEW_LINE, CONDITION };
