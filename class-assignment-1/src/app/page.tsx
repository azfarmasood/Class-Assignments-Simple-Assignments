export default function Home() {
  return (
    <main>
      <div style={{width: "100vw", height: "100vh", overflow: "hidden"}} className="bg-zinc-900 relative">
        <div style={{ height: "80vh", width: "100vw", transform: "rotate(-45deg)", transformOrigin: "top right" }} className="bg-slate-800 absolute"></div>
        <div className="text-white font-bold md:text-xl top-0 lef-0 px-10 mt-64 max-w-2xl">
          <h1 className="md:text-4xl text-3xl font-bold">My First Class Assignment</h1>
          <p className="text-white md:text-lg font-bold text-sm mt-3">This is my first class Assignment and With the Help of Sir Hamza Syed I can Create this type of design now I can create more of them soon Inshallah and could be very creative</p>
          <button className="font-bold rounded-full md:text-2xl text-sm px-6 py-3 my-4 bg-slate-700">Enroll Now</button>
      </div>
      </div>
    </main>
  )
}
