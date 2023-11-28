import { ERROR_MSG } from '../src/Constants';
import roundCountValidator from '../src/validator/roundCount';

describe('시도 횟수 입력 테스트', () => {
  test('입력값이 없으면 예외 발생', () => {
    expect(() => {
      const input = '';
      roundCountValidator.validateRoundCount(input);
    }).toThrow(ERROR_MSG.NOTHING);
  });

  test('입력값이 0이거나 음수면 예외 발생', () => {
    expect(() => {
      const input = ['0', '-2'];
      input.forEach((element) => {
        roundCountValidator.validateRoundCount(element);
      });
    }).toThrow(ERROR_MSG.MINUS_NUMBER);
  });

  test('입력값이 정수가 아니면 예외 발생', () => {
    expect(() => {
      const input = ['1.23', '3.5'];
      input.forEach((element) => {
        roundCountValidator.validateRoundCount(element);
      });
    }).toThrow(ERROR_MSG.NOT_INTEGER);
  });
});
