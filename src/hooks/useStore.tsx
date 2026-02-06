import { useState, useMemo } from "react";
import st from '../Components/Store/Store.json'

export default function useStore(){    
    const [filter, setFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPages = 12;
    const filteredCards = st.cards.filter(item=> filter == '' ? item.category == item.category : item.category == filter)
    const totalPage = Math.ceil(filteredCards.length / itemPerPages)
    const [sortType, setSortType] = useState('popular')
    const sortedCards = useMemo(()=>{
        const cards = [...filteredCards]
        switch(sortType){
            case('price-desc'):
                return cards.sort((a , b)=> a.price - b.price)
            case('price-asc'):
                return cards.sort((a , b)=> b.price - a.price)
            default:
                return cards
        }
    }, [filteredCards, sortType])
    const indexOfLastItem = currentPage  * itemPerPages;
    const indexOfFirstItem = indexOfLastItem - itemPerPages;
    const currentCards = sortedCards.slice(indexOfFirstItem, indexOfLastItem)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    return {
        filter,
        setFilter,
        currentPage,
        setCurrentPage,
        itemPerPages,
        filteredCards,
        totalPage,
        sortType,
        setSortType,
        sortedCards,
        indexOfFirstItem,
        indexOfLastItem,
        currentCards,
        selectedIndex,
        setSelectedIndex

    }
}