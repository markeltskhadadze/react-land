import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import '../assets/css/catalog.css'
import { CatalogList } from './parts/CatalogList'
import { filterByType, getAllCategory } from '../store/reducers/catalog'

export function Catalog() {
    const catalogName = useSelector((state) => state.catalog.catalogName)
    const filteredCategoryList = useSelector((state) => state.catalog.filteredCategoryList)
    const dispatch = useDispatch()

    const handleFilterByType = (type) => {
        console.log(type)
        dispatch(filterByType(type))
    }

    const handleAllCategory = () => {
        dispatch(getAllCategory())
    }

    useEffect(() => {
        handleAllCategory()
    }, [])

    return (
        <div>
            <div className='category-container'>
                { catalogName.map((item, index) => (
                    <p onClick={() => handleFilterByType(item)}  className="category-name" key={ index }>{ item }</p>
                )) }
            </div>
            <div className='category-list'>
            { filteredCategoryList.map((item, index) => (
                <CatalogList
                    name={item.name}
                    key={index}
                />
            )) }
            </div>
        </div>
    )
}