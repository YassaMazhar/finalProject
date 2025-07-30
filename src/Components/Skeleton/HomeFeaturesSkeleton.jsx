import React from 'react'

export default function HomeFeaturesSkeleton() {
  return (
    <>
      <section className="py-8">
        <div className="container space-y-4">
          <div>
            <div className="h-6 w-48 bg-gray-200 animate-pulse rounded mb-2"></div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5 gap-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="bg-white p-4 rounded shadow animate-pulse">
                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
