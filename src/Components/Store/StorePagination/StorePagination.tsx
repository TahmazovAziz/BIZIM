interface StorePaginationProps{
    currentPage:number;
    totalPage:number;
    setCurrentPage:(val:number)=>void;
}

export default function StorePagination({currentPage, totalPage, setCurrentPage}:StorePaginationProps) {
    const nextButton = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const prevButton = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const numberPage = (num: number) => {
        setCurrentPage(num)
    }
    return (
        <div className="store__pagination">
            <button className="store__pagination-button store__pagination-button_prev" onClick={prevButton} disabled={currentPage === 1}>Назад</button>
            <div className="store__pagination-numbers">
                {Array.from({ length: totalPage }, (_, i) => (
                    <button key={i + 1} className={`store__pagination-number ${currentPage == i + 1 ? 'store__pagination-number_active' : ''}`} onClick={() => numberPage(i + 1)}>{i + 1}</button>
                ))}
            </div>
            <button className="store__pagination-button store__pagination-button_next" onClick={nextButton} disabled={currentPage === totalPage}>Вперед</button>
        </div>
    )
}