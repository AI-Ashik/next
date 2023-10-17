import React from "react";
// import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("./");
    }, 3000);
  }, [router]);

  return (
    <>
      <NavBar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>

          <a style={{ cursor: "pointer" }} onClick={() => router.push("./")}>
            Back To Homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
