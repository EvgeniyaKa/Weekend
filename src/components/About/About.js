import React from "react";
import MainImg from "./MainImg";

const About = () => {
  return (
    <div className="w-96 md:w-full xl:w-full mx-auto flex flex-col text-center mb-7">
      <MainImg />
      <h1 className="text-green-600 w-full text-xl font-bold px-5 mb-7">Weekend c детьми</h1>
      <span className="w-full px-5 text-base mb-4">
        Это уникальный сервис по поиску различных вариантов досуга с детьми, который приятно удивит
        Вас своей простотой и информативностью.
      </span>
      <span className="w-full px-5 text-base">
        Чтобы поиск был легче, выберите интересующую категорию
      </span>
    </div>
  );
};

export default About;
