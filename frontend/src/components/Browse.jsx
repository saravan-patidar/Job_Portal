import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className='font-bold text-lg my-10'>Search Results ({jobArray.length})</h1>
        <div className="flex gap-5">
          {jobArray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobArray.map((item, index) => (
                  <Job />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Browse