import React from 'react'

export default function BrandsSkeleton() {
  // Number of skeleton items to show
  const skeletonCount = 6;

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container">
          <h2 className="text-3xl font-bold ml-4 py-2">Brands: </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 py-6 gap-3">
            {[...Array(skeletonCount)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white shadow-xl border border-gray-400/30 p-3 animate-pulse"
              >
                <div className="w-20 h-20 mx-auto bg-gray-300 rounded object-contain" />
                <div className="h-5 bg-gray-300 rounded mt-4 mx-auto w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}