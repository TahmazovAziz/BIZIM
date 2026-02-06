import StoreHeader from "./StoreHeader/StoreHeader";
import st from './Store.json'
import { useMemo, useState } from "react";
import './Store.scss'
import popular from '../Popular/Popular.json'
import PopularButton from "../UI/PopularButton/PopularButton";
import StoreProduct from "./StoreProduct/StoreProduct";
import StorePagination from "./StorePagination/StorePagination";
import StoreSort from "./StoreSort/StoreSort";
import useStore from "../../hooks/useStore";
export default function Store() {

    
    const {
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

 } = useStore()

    return (
        <section className="store">
            <div className="store__container">
                <StoreHeader />

                <div className="store__filters">
                    <div className="store__filter-buttons">
                    {Object.values(popular).map((item, index) => (
                        <PopularButton activeClass="popular__button_active" standartClass="popular__button" active={selectedIndex == index} onClick={()=>{setSelectedIndex(index);setFilter(item.name)}}>{item.label}</PopularButton>
                    ))}
                    </div>
                    <StoreSort sortType={sortType} setCurrentPage={setCurrentPage} setSortType={setSortType}/>
                </div>

                <StoreProduct currentCards={currentCards}/>
                <StorePagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage}/>

            </div>
        </section>
    )
}