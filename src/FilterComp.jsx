import React from 'react'
import Search from './Search'
import Filter from './Filter'

export default function FilterComp() {
  return (
    <div className="filter-section">
        <div className="global-container">
            <div className='filtercomp-container'>
                <Search />
                <Filter />
            </div>
        </div>
    </div>
    
  )
}
