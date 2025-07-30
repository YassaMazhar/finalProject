export default function CartItemSkeleton() {
  return (
    <>
      <div className="flex items-center justify-between px-2 pt-7 animate-pulse">
        <div className="flex items-center gap-3">
          <div>
            <div className="size-20 rounded-md bg-gray-200" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="h-3 w-24 bg-gray-200 rounded" />
            <div className="flex items-center gap-2">
              <div className="h-3 w-16 bg-gray-200 rounded" />
              <div className="h-3 w-8 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
        <div className="space-x-5 flex items-center">
          <div className="space-x-2 flex items-center">
            <div className="h-4 w-8 bg-gray-200 rounded" />
          </div>
          <div>
            <div className="h-4 w-16 bg-gray-200 rounded" />
          </div>
          <div className="h-6 w-6 bg-gray-200 rounded" />
        </div>
      </div>
    </>
  );
}