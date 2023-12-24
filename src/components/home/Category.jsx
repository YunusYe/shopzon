import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = (setCategory) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories) 


  console.log(categories,"categories");

  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])
  return (
    <div className='w-1/5 bg-gray-100 p-4'>
      <div className='border-b pb-1 text-xl font-bold p-2'>Kategori</div>
      {
        categories?.map((category,i) => (
          <div onClick={() => setCategory(category)} className='text-lg cursor-pointer hover:bg-gray-200 p-3' key={i}>{category}</div>
        ))
      }
    </div>
  )
}

export default Category