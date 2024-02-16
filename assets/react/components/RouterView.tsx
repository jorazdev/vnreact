import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutView from "../views/AboutView";
import HomeView from "../views/home/HomeView";
import PersonView from "../views/person/PersonView";
import Page404View from "../views/Page404View";
import TailwindView from "../views/tailwind/TailwindView";

const RouterView = () => {
    return (
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/person" element={<PersonView />} />
          <Route path="/tailwind" element={<TailwindView />} />
          <Route path="*" element={<Page404View />} />
        </Routes>
    );
};

export default RouterView;