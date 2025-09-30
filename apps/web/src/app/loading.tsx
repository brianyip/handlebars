export default function Loading() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gray-200 animate-pulse" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
          <div className="bg-[#f5f0e8] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:pt-20 md:pb-16">
            <div className="space-y-4">
              <div className="h-12 bg-gray-300 animate-pulse rounded w-3/4" />
              <div className="h-12 bg-gray-300 animate-pulse rounded w-2/3" />
            </div>
            <div className="mt-8 space-y-2">
              <div className="h-4 bg-gray-300 animate-pulse rounded" />
              <div className="h-4 bg-gray-300 animate-pulse rounded" />
              <div className="h-4 bg-gray-300 animate-pulse rounded w-5/6" />
            </div>
            <div className="mt-10">
              <div className="h-12 bg-gray-400 animate-pulse rounded w-32" />
            </div>
          </div>
          <div className="bg-[#3a3a3a] px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12">
            <div className="h-4 bg-gray-600 animate-pulse rounded w-40 mb-6" />
            <div className="h-10 bg-gray-600 animate-pulse rounded w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}