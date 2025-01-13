import { ReactNode } from "react";
interface SociaLProps{
    url: string;
    children: ReactNode;
}
export function Social({url, children}: SociaLProps){
    return(
        <a
            href={url} 
            rel="noopener noreferrer"
            target="_blank"
        
        >
            {children}
        </a>
    )
}