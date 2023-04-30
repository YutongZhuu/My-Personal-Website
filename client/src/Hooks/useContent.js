import { useState, useCallback, useEffect} from "react"
import { httpGetContent } from "./request";


export function useContent(){
    const [content, setContent]=useState([]);

    const fetchContent= useCallback(async()=>{
        const fetchedContent=await httpGetContent();
        setContent(fetchedContent)
    }, [])

    useEffect(()=>{
        fetchContent()
    }, [fetchContent])

    return content;
}
