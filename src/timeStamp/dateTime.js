import {parseISO,formatDistanceToNow} from "date-fns"

const Timeago=({timeStamp})=>{
    const time = formatDistanceToNow(parseISO(timeStamp))
    const timeDispay = time==="less than a minute"? "<1 min":time
    return <span className="text-sm text-slate-500 font-semibold text-sm break-all">{`${timeDispay} ago`}</span>
}

export default Timeago