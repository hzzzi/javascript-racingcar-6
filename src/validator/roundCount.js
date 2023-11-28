import { ERROR_MSG } from '../Constants.js';

const roundCountValidator = {
  isNothing(input) {
    if (input === '') {
      throw new Error(ERROR_MSG.NOTHING);
    }
  },
  isPositive(input) {
    if (Number(input) <= 0) {
      throw new Error(ERROR_MSG.MINUS_NUMBER);
    }
  },
  isInteger(input) {
    if (!Number.isInteger(Number(input))) {
      throw new Error(ERROR_MSG.NOT_INTEGER);
    }
  },

  validateRoundCount(input) {
    this.isNothing(input);
    this.isPositive(input);
    this.isInteger(input);
  },
};
export default roundCountValidator;
