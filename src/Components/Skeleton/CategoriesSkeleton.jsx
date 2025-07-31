import React from 'react'

export default function CategoriesSkeleton() {
  // Number of skeleton cards to show while loading
  const skeletonCount = 6;

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container">
          <h2 className="text-3xl font-bold ml-4 py-2">Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 py-6 gap-3">
            {Array.from({ length: skeletonCount }).map((_, idx) => (
              <div
                key={idx}
                className="card bg-white text-center py-4 rounded-lg space-y-2 cursor-pointer shadow-md animate-pulse"
              >
                <div className="size-16 rounded-full mx-auto bg-gray-300" />
                <div className="h-4 w-2/3 mx-auto bg-gray-300 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}