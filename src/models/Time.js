const initTime = {
  h : 0,
  m : 0
}

module.exports = class Time {
  constructor(h = initTime.h, m = initTime.m) {
    this.t = this.format(h, m)
  }

  format(h, m) {
    const locale = 'ko-KR'
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }

    const time = Intl.DateTimeFormat(locale, options)

    const date = new Date()
    date.setHours(h)
    date.setMinutes(m)

    return time.format(date)
  }

  setTime(h = initTime.h, m = initTime.m) {
    if (!(0 <= h && h < 24)) throw new Error("Only a time between 0 and 24 can be set.")
    if (!(0 <= m && m < 60)) throw new Error("Only a time between 0 and 60 can be set.")
    this.t = this.format(h,m)
  }

  getTime() {
    return this.t
  }
}
