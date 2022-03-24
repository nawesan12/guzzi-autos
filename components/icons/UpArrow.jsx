export default function UpArrow({ width, height, classes, strokeWidth, strokeColor, fillColor }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={classes} width={width} height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} fill={fillColor} strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        </svg>
    )
}