import React from "react";

export default function CartSkeleton() {
  return (
    <>
      <section className="py-8">
        <div className="container grid md:grid-cols-3 gap-4">
          {/* left */}
          <div className="md:col-span-2 border border-gray-400/20 rounded-md p-5 shadow-lg">
            <div className="border-b border-gray-400/50 py-3">
              <div className="h-6 w-40 bg-gray-300 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 py-4 border-b border-gray-100 animate-pulse"
                >
                  <div className="h-16 w-16 bg-gray-200 rounded"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    <div className="h-4 w-20 bg-gray-100 rounded"></div>
                  </div>
                  <div className="h-6 w-12 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="space-y-4 border border-gray-400/20 px-5 py-8">
            <div className="h-6 w-40 bg-gray-300 rounded animate-pulse mb-2"></div>
            <div className="flex items-center justify-between *:text-gray-400 *:capitalize">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-gray-100 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between *:text-gray-400 *:capitalize">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-12 bg-gray-100 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between *:text-gray-400 *:capitalize">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-10 bg-gray-100 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between *:font-bold border-t border-gray-400/50 pt-3 *:capitalize">
              <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="bg-primary-500 my-3 w-full rounded-md h-10 animate-pulse"></div>
            <div className="bg-gray-200 my-2 w-full rounded-md h-10 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}
