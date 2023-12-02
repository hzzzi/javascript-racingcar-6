import Car from '../src/model/Car';

describe('Car class 테스트', () => {
  test('이름과 초기 위치로 차 객체 생성하는지', () => {
    const car = new Car('pobi');
    expect(car.name).toBe('pobi');
    expect(car.position).toBe(0);
  });

  test('번호를 랜덤하게 잘 생성하는지', () => {
    const car = new Car('pobi');
    const randomNumber = car.getRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(9);
  });

  test('랜덤값이 4이상일 떄 이동하는지', () => {
    const car = new Car('pobi');
    const originalPosition = car.Position;
    car.forwardOrStop();
    if (car.getRandomNumber() >= 4) {
      expect(car.position).toBe(originalPosition + 1);
    } else {
      expect(car.position).toBe(originalPosition);
    }
  });
});
