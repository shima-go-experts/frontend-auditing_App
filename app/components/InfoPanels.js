// components/InfoPanels.tsx

export default function InfoPanels() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 py-10">
      
      {/* BLOG Panel */}
      <div className="bg-purple-600 text-white p-6 rounded-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide">Blog</h2>
          <p className="mt-2 text-lg font-medium leading-snug">
            We offer a variety of activities for all ages and interests.
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between text-sm font-semibold">
          <span>Our Latest Articles</span>
          <span className="text-xl">→</span>
        </div>
      </div>

      {/* SUCCESS Panel */}
      <div className="bg-yellow-400 text-black p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-xs font-semibold uppercase tracking-wide">Success</h2>
        <p className="mt-2 text-2xl font-bold leading-snug">Closed Projects: 238</p>
      </div>

      {/* CONFIDENCE Panel */}
      <div className="bg-[#FDD9C8] text-black p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-xs font-semibold uppercase tracking-wide">Confidence</h2>
        <p className="mt-2 text-xl font-bold leading-snug">
          3.5★ Rating on Google Reviews
        </p>
      </div>

      {/* Fourth Panel */}
      <div className="bg-gray-100 text-black p-6 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <p className="text-sm italic text-gray-500 text-center">
          Add more metrics or content here
        </p>
      </div>

    </section>
  );
}
