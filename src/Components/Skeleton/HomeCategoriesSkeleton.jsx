export default function HomeCategoriesSkeleton() {
    // Number of skeleton items to show
    const skeletonCount = 6;

    return (
        <>
            <section className="py-8">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Shop by Category</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 py-6 gap-3">
                        {Array.from({ length: skeletonCount }).map((_, idx) => (
                            <div
                                key={idx}
                                className="card bg-white text-center py-4 rounded-lg space-y-2 cursor-pointer shadow-md hover:shadow-xl animate-pulse"
                            >
                                <div className="size-16 rounded-full mx-auto bg-gray-200" />
                                <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
