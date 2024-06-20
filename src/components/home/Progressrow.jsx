import React from "react";
import Progressbar from "./Progressbar";

function Progressrow() {
  return (
    <div className="grid grid-cols-2 mt-10 p-10">
      <div className="p-3">
        <img
          className="rounded-lg w-[500px] h-[300px]"
          src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <h2 className="font-bold text-2xl text-blue-700">
          Voluptatem dignissimos provident quasi corporis voluptas
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div>
          <div className="flex flex-col gap-2">
            <Progressbar title="HTML" percentage={100} />
            <Progressbar title="CSS" percentage={70} />
            <Progressbar title="JS" percentage={60} />
            <Progressbar title="React" percentage={80} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progressrow;
