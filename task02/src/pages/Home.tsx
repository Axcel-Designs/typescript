import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="">Home</section>
      <section className="flex flex-col justify-around items-center my-10 bg-blue-300 rounded-lg py-4 ">
        <div className="h-20 w-4/5 rounded"></div>
        <div className=" text-gray-800 hover:text-red-800 my-2">
          <button onClick={() => navigate("/blog")}>
            <h2 className="text-center">Check out my Blog</h2>
          </button>
        </div>
        <p className="text-center">feel free to add your own blog Post</p>
        <p>All new Posts are ound at the bottom of the blog page</p>
        <div className="text-red-600 my-2">
          <p className="text-center">Please Only delete/Update the Post you added !!!</p>
        </div>

      </section>
    </>
  );
}
