

export default function ProductCardSkeleton() {
  return (
    <div className="card relative bg-white rounded-lg shadow-xl animate-pulse">
      <div className="mx-auto block">
        <div className="h-52 w-full bg-gray-200 rounded-lg" />
      </div>
      <div className="content p-3 space-y-3">
        <div className="h-4 w-24 bg-gray-200 rounded" />
        <div className="h-6 w-40 bg-gray-200 rounded" />
        <div className="flex space-x-2 items-center">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-8 bg-gray-200 rounded" />
          <div className="h-4 w-8 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-x-2 flex items-center">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
          </div>
          <div>
            <div className="bg-gray-200 flex items-center justify-center size-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="absolute top-3 left-3 h-6 w-16 bg-gray-200 rounded-lg" />
      <div className="absolute top-5 right-5 flex flex-col items-center gap-4 bg-gray-200 py-4 px-2 rounded-lg">
        <div className="h-6 w-6 bg-gray-300 rounded-full" />
        <div className="h-6 w-6 bg-gray-300 rounded-full" />
        <div className="h-6 w-6 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}