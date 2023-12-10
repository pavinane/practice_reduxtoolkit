import { parseISO,formatDistanceToNow } from "date-fns";

const TimeAgo = ({timeStamp}) => {
    let timeAgo ='';

    if(timeStamp){
        const  getDate = parseISO(timeStamp);
        const getTime = formatDistanceToNow(getDate);

        timeAgo = `${getTime} ago`

    }
    return(
        <>
        <span title={timeStamp}>
            &nbsp; <i>{timeAgo}</i>
            </span>
        </>
    )
}

export default TimeAgo