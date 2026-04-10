import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto my-3">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto my-3">
        <Navbar></Navbar>
      </nav>
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default Home;
