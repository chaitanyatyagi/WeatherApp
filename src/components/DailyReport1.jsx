import '../ComponentStyle/DailyReportCard.css'
import {useSelector} from 'react-redux'

function DailyReport() {
    const temp = useSelector(state => state.celsiusFahrenheit)
    const placeData = useSelector(state => state.placeData)
    return (
        placeData.location?
        <div className='DailyReportCard'>
            <div className='DailyReportInside'>{placeData.forecast.forecastday[0].hour[6].time}</div>
            <div className='DailyReportInsideImg'><img src={placeData.forecast.forecastday[0].hour[6].condition.icon} alt="" /></div>
            {temp?<div className='DailyReportInside'>{placeData.forecast.forecastday[0].hour[6].temp_c}&deg;C</div>:<div className='DailyReportInside'>{placeData.forecast.forecastday[0].hour[6].temp_f}&deg;F</div>}
        </div>: ''
    )
}


export default DailyReport
