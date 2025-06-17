function ProgressBar({total, readCount}){
    const percentage = total > 0 ? Math.round((readCount / total) * 100) : 0;
    return(
        <div>{readCount}/ {total} books read ({percentage}%) </div>
    )
}
export default ProgressBar