import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="min-h-130 p-4">
      <section className="">Home</section>
      <section className="flex flex-col justify-around items-center my-10 bg-amber-300 rounded-xl">
        <div className="h-20 w-4/5 bg-conic from-blue-200 via-indigo-200 to-blue-600 rounded"></div>
        <div className=" text-gray-800 hover:text-red-800 my-2">
          <button onClick={() => navigate("/blog")}>
            <h2>Check out my Blog</h2>
          </button>
        </div>
      </section>
    </main>
  );
}
