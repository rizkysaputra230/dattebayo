export default function Button({handleClick}) {
    return (
        <div>
            <button
                className="bg-orange-600 py-10 px-20 rounded-xl font-serif text-3xl font-semibold text-white"
                onClick={handleClick}
            >
                Dattebayo
            </button>
        </div>
    )
}