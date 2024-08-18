export default function Container({ children, className = '', divider = false }) {
    return (
        <div className={`myContainer ${className} ${divider && 'relative'}`}>
            {divider && <hr className="border-light-black border absolute w-full left-0 top-11" />}
            {children}
        </div>
    )
}