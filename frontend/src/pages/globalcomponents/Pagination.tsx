import react from "react"

const Pagination = () => {
    return <div className="flex text-[#374151] items-center gap-5">
        <button className="flex items-center gap-1">
            <span className="text-2xl">&lt;</span>
            <span>Förre</span>
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button className="flex items-center gap-1">
            <span>Nästa</span>
            <span className="text-2xl">&gt;</span>
        </button>
    </div>
}

export default Pagination;