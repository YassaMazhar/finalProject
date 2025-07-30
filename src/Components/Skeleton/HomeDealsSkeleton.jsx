import React from 'react'

export default function HomeDealsSkeleton() {
  // Skeleton loading UI
  return (
    <>
      <section className="py-8">
        <div className="container space-y-4">
          <div className="top section">
            <div>
              <h3 className="text-2xl font-bold mb-2 capitalize bg-gray-200 rounded animate-pulse w-48 h-8"></h3>
              <div className="flex space-x-2">
                <span className="bg-gray-200 rounded w-20 h-6 animate-pulse"></span>
                <span className="font-bold">:</span>
                <span className="size-6 bg-gray-300 animate-pulse rounded-lg"></span>
                <span className="font-bold">:</span>
                <span className="size-6 bg-gray-300 animate-pulse rounded-lg"></span>
                <span className="font-bold">:</span>
                <span className="size-6 bg-gray-300 animate-pulse rounded-lg"></span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5 gap-5">
            {[...Array(5)].map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-200 rounded-lg p-4 animate-pulse flex flex-col space-y-3"
              >
                <div className="h-32 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
