export class Alarm {
  constructor(t) {
    this.t = t
  }

  setTime(h,m) {
    this.h = h
    this.m = m
  }

  getTimeFormat(date) {
    const locale = 'ko-KR'
    const options = {
      hour: 'numeric', minute: 'numeric', hour12: false
    }
    const time = Intl.DateTimeFormat(locale, options)
    return time.format(date)
  }
  play() {
  
    const date = new Date()
    date.setHours(this.h)
    date.setMinutes(this.m)


    const alarm = this.getTimeFormat(date)
    
    setInterval(()=> {
      const now = this.getTimeFormat(Date.now())
      if (alarm === now) {
        console.log("arrived!!");
      }
      console.log("[🚀 253eosam] |  file: date.js:28 |  Alarm |  setInterval |  now", now)
    }, 1000 * 10)
  }
}