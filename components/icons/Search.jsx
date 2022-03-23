export default function Search({ width, height, classes, strokeWidth, strokeColor, fillColor }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={classes} width={width} height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} fill={fillColor} strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
    )
}