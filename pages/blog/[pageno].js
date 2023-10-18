import NavBar from "../../components/NavBar";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElement) => {
    return {
      params: {
        pageno: curElement.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const MyData = () => {
  const { id, title, body } = data;
  return (
    <>
      <NavBar />
      <div key={id} className="ssr-styles ssr-styles-inside">
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};

export default MyData;
