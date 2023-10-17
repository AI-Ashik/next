import React from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";

const contact = () => {
  return (
    <>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h2>About page</h2>
        <Image
          src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1931"
          width={500}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </>
  );
};

export default contact;
