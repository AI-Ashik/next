import React from "react";
import NavBar from "../../components/NavBar";

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
      {data.map((curElement) => {
        return (
          <div key={curElement.id} className="ssr-styles">
            <h3>{curElement.id}</h3>
            <h2>{curElement.title}</h2>
          </div>
        );
      })}
    </>
  );
};

export default blog;
