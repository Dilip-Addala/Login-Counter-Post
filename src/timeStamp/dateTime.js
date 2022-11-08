import {parseISO,formatDistanceToNow} from "date-fns"

const Timeago=({timeStamp})=>{
    const time = formatDistanceToNow(parseISO(timeStamp))
    return <span className="text-sm text-slate-500 font-semibold text-sm">{`${time} ago`}</span>
}

export default Timeago