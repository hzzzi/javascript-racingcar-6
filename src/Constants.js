const GAME_MSG = {
  INPUT: {
    NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    ROUND_COUNT: '시도할 횟수는 몇 회인가요?',
  },
  OUTPUT: {
    ROUND_RESULT: '실행 결과',
    DASH: '-',
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

const DEFAULT_ERROR = '[ERROR] ';

const ERROR_MSG = {
  NOTHING: `${DEFAULT_ERROR}값을 입력해주세요.`,
  MINUS_NUMBER: `${DEFAULT_ERROR}1 이상의 수만 입력해주세요.`,
  NOT_INTEGER: `${DEFAULT_ERROR}정수만 입력해주세요.`,
  AT_LEAST_TWO_CARS: `${DEFAULT_ERROR}2대 이상의 차 이름을 입력해주세요.`,
  MORE_THAN_FIVE_LETTERS: `${DEFAULT_ERROR}차 이름은 5글자 이하로만 입력해주세요.`,
  DUPLICATED: `${DEFAULT_ERROR}차 이름은 중복될 수 없습니다.`,
};

export { GAME_MSG, NEW_LINE, CONDITION, ERROR_MSG };
