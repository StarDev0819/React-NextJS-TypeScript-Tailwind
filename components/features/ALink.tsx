import Link from "next/link";

export default function ALink(props) {
    const { href, children, className, style } = props;
    
    function defaultFunction(e) {
        if (props.href == '#') {
            e.preventDefault();
        }
    }

    return (
        <Link href={href} {...props}>
            <a className={className} style={style} onClick={defaultFunction}>
                {children}
            </a>
        </Link>
    )
}