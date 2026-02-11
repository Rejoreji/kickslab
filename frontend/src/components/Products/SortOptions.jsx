import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SortOptions = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleSortChange = (e) => {
        const sortBy = e.target.value;
        searchParams.set("sort", sortBy);
        setSearchParams(searchParams);
    }
  return (
    <div className='mb-4 flex items-center justify-end'>
      <select id="sort" className="border rounded-md p-2 focus:outline-none " onChange={handleSortChange} value={searchParams.get("sort") || ""}>
        <option value="default">Sort by Default</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="newest">Newest Arrivals</option>
      </select>
    </div>
  )
}

export default SortOptions
