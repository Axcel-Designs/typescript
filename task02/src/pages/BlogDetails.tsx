import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { BlogPost } from "../types/blogPosts";
import Loading from "../component/loading";

export default function BlogDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${import.meta.env.VITE_PROJECT}/${id}`, {
          method: "GET",
          headers: { "content-type": "application/json" },
        });
        const data = await res.json();
        setData(data);
      } catch (error) {
        setErr(error instanceof Error ? error.message : String(error));
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  function onDelete() {
    async function handleDelete() {
      const res = await fetch(`${import.meta.env.VITE_PROJECT}/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      return data;
    }
    handleDelete();
    navigate("/blog");
  }

  if (loading)
    return (
      <>
        <Loading />
      </>
    );
  if (err) return <>{err}</>;

  return (
    <>
      <section className="my-4 p-4 flex flex-col ">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2>Post</h2>
          </div>
          <NavLink to={"/blog"}>
            <button className="border-2 py-1 px-4 hover:bg-gray-300">
              Go Back
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col flex-wrap gap-3 justify-around items-center ring ring-gray-400 shadow-xl w-fit place-self-center my-8 p-8 rounded-xl">
          {data && (
            <>
              <li
                key={data.id}
                className="w-50 flex flex-col justify-around items-center"
              >
                <li className="bg-gray-400 w-full">
                  <img src={data.avatar} className="w-30 h-30 m-auto" />
                </li>
                <div className="m-4">
                  <h4>{data.name}</h4>
                  <p>{data.title}</p>
                  <p>{data.createdAt}</p>
                </div>
              </li>
              <button
                onClick={onDelete}
                className="border-2 py-1 px-4 bg-red-600 text-white hover:border-black"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}
