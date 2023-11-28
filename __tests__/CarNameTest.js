import { ERROR_MSG } from '../src/Constants';
import carNameValidator from '../src/validator/carName';

describe('자동차 이름 입력 테스트', () => {
  test('입력값이 없으면 예외 발생', () => {
    expect(() => {
      const input = '';
      carNameValidator.validateCarName(input);
    }).toThrow(ERROR_MSG.NOTHING);
  });

  test('차를 한대만 입력하면 예외 발생', () => {
    expect(() => {
      const input = ['pobi'];
      carNameValidator.validateCarName(input);
    }).toThrow(ERROR_MSG.AT_LEAST_TWO_CARS);
  });

  test('차 이름이 5글자 초과하면 예외 발생', () => {
    expect(() => {
      const input = ['pobi', 'javajigi'];
      carNameValidator.validateCarName(input);
    }).toThrow(ERROR_MSG.MORE_THAN_FIVE_LETTERS);
  });

  test('차 이름을 중복해서 입력하면 예외 발생', () => {
    expect(() => {
      const input = ['pobi', 'pobi'];
      carNameValidator.validateCarName(input);
    }).toThrow(ERROR_MSG.DUPLICATED);
  });
});
