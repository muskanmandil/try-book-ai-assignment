import React from "react";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Authentication from "../components/Authentication";
import Endpoints from "../components/Endpoints";
import Tutorial from "../components/Tutorial";
import CodeExamples from "../components/CodeExamples";
import Pricing from "../components/Pricing";

const ApiPage = () => {
  return (
    <>
      <header>
        <h1>Book Generator API</h1>
      </header>
      <Navbar />
      <main>
        <Overview />
        <Authentication />
        <Endpoints />
        <Tutorial />
        <CodeExamples />
        <Pricing />
      </main>
    </>
  );
};

export default ApiPage;
