export default function counter({counter}) {
    return (
        <div className="flex justify-center">
            <span className='font-counter'>
                {Number(counter).toLocaleString('en-US')}
            </span>
        </div>
    )
}