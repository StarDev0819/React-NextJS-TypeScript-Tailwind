import ALink from "./ALink";

export default function Button(props) {
    const { href, children, className, style } = props;

    return (
        <>
            <button className={'flex justify-between items-center px-2.5 h-10 ' + className} style={style}>
                {children}
            </button>
        </>
    );
}