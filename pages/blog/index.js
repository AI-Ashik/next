import NavBar from "../../components/NavBar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <NavBar />
      {data.slice(0, 5).map((curElement) => {
        return (
          <div key={curElement.id} className="ssr-styles">
            <h3>{curElement.id}</h3>

            <Link href={`/blog/${curElement.id}`}>
              <a>
                <h2>{curElement.title}</h2>
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;
