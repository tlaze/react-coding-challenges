function ProgressBar({total, readCount}){
    const percentage = total > 0 ? Math.round((readCount / total) * 100) : 0;
    return(
        <div className="w-full max-w-xl mx-auto my-4">
            <p className="text-sm font-medium mb-1 text-gray-700">{readCount}/ {total} books read ({percentage}%)</p>
         </div>
    )
}
export default ProgressBar