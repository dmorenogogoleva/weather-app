import { getGradientValues } from "../getGradientValues";

test("getGradientValues works", () => {
  const params = {
    range: { min: 0, max: 10 },
    todayMin: 1,
    todayMax: 9,
    currentTemp: 5,
  };
  expect(getGradientValues(params)).toStrictEqual({
    left: 10,
    right: 10,
    current: 50,
  });
});

test("getGradientValues works with zeros", () => {
  const params = {
    range: { min: -5, max: 5 },
    todayMin: -5,
    todayMax: 0,
    currentTemp: 0,
  };
  expect(getGradientValues(params)).toStrictEqual({
    left: 0,
    right: 50,
    current: 50,
  });
});

test("getGradientValues works with negative values", () => {
  const params = {
    range: { min: -10, max: 0 },
    todayMin: -9,
    todayMax: -1,
    currentTemp: -5,
  };
  expect(getGradientValues(params)).toStrictEqual({
    left: 10,
    right: 10,
    current: 50,
  });
});

test("getGradientValues works without current", () => {
  const params = {
    range: { min: 0, max: 10 },
    todayMin: 2,
    todayMax: 7,
  };

  expect(getGradientValues(params)).toStrictEqual({
    left: 20,
    right: 30,
  });
});

test("getGradientValues throws error", () => {
  const params1 = {
    range: { min: 10, max: 0 },
    todayMin: 1,
    todayMax: 9,
    currentTemp: 5,
  };

  const params2 = {
    range: { min: 0, max: 10 },
    todayMin: 10,
    todayMax: 0,
    currentTemp: 5,
  };
  expect(() => getGradientValues(params1)).toThrowError();
  expect(() => getGradientValues(params2)).toThrowError();
});
