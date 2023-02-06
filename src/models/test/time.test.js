const Time = require('../Time')

test('constructor function Time features.', () => {
  const t = new Time(11,15)
  expect(t.getTime()).toBe("11:15")

  t.setTime(23,0)
  expect(t.getTime()).toBe("23:00")
  
  t.setTime()
  expect(t.getTime()).toBe("24:00")
  
  t.setTime(0,1)
  expect(t.getTime()).toBe("24:01")

  t.setTime(1,1)
  expect(t.getTime()).toBe("01:01")

  expect(() => t.setTime(24,1)).toThrow(Error)
  expect(() => t.setTime(23,-1)).toThrow(Error)
});