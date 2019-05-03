import * as Req from '../utils/request'
import * as LunarCalendar from '@/utils/lunarCalendar'
import dayjs from 'dayjs'

function dataFilter (res, needCode = false) {
  return needCode ? res.data : res.data.data
}
export function getWeather (url, params) {
  console.log('LunarCalendar', )
  return Req.Get(url, params).then(res => {
    res = [dataFilter(res)[0]]
    return res.map(item => {
      return {
        week: item.week.replace('星期', '周'),
        day: dayjs().format('MM月DD日'),
        lunar: LunarCalendar.GetLunarDay(dayjs().format('YYYY'), dayjs().format('MM'), dayjs().format('DD')),
        wea: item.wea,
        tem: `${item.tem}`,
        tempRange: `${item.tem1.replace('℃', '')}~${item.tem2}`,
        win: `${item.win ? item.win[0] : ''}${item.win_speed}`,
        inner: [
          {title: '温度', content: '23.5℃'},
          {title: '湿度', content: `${item.humidity}%`}
        ]
      }
    })[0]
  })
}
