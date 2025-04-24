
export default function Avatar({size}){
    let width = 'w-12'
    if (size === 'lg'){
      width = 'w-36';
    }
    return(
        <div className={`${width} rounded-full overflow-hidden`}>
                    <img src="https://i.pinimg.com/736x/e6/af/29/e6af29443b3536ce95cdf842fc1e4f81.jpg" alt="" />
                </div>
    )
}
