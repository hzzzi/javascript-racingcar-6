import { ERROR_MSG } from '../Constants';

const carNameValidator = {
  isNothing(input) {
    if (input === '') {
      throw new Error(ERROR_MSG.NOTHING);
    }
  },
  atLeastTwoCars(input) {
    if (input.length === 1) {
      throw new Error(ERROR_MSG.AT_LEAST_TWO_CARS);
    }
  },
  moreThanFiveLetters(input) {
    input.forEach((element) => {
      if (element.length > 5) {
        throw new Error(ERROR_MSG.MORE_THAN_FIVE_LETTERS);
      }
    });
  },
  isDuplicated(input) {
    if (input.length !== new Set(input).size) {
      throw new Error(ERROR_MSG.DUPLICATED);
    }
  },
};
export default carNameValidator;
