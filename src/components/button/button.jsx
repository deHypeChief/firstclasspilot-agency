import './style.css'
export default function Button({children, alt}){
    return(
        <button className={alt ? "alt": ""}>{children}</button>
    )
} 