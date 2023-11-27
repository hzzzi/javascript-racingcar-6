import { ERROR_MSG } from '../Constants';

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
    if (!Number.isInteger(input)) {
      throw new Error(ERROR_MSG.NOT_INTEGER);
    }
  },
};
export default roundCountValidator;
