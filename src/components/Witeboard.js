import { useState,useEffect } from 'react';
function Witeboard(){
    const [urlState,setUrlState] = useState({
        url: ""
    });
    useEffect(()=>{
        setUrlState({url:`https://witeboard.com/${window.location.href.substring(window.location.href.indexOf('#')+1)}`})
    })
    return(
        <iframe src={urlState.url}
        className="whiteboard"
        allowFullScreen = "1"
        width = "97%"
        frameBorder="0"
        />
    )
}
export default Witeboard;