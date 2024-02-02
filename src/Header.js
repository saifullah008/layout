import React from "react";
export default function Header() {
  return (
    <header className="flex justify-center align-middle p-4 bg-green-700 text-white w-100">
      <h1>
        <a href="/">
          <h1 className="text-2xl font-semibold">
            Microfrontend architecture demo
          </h1>
        </a>
      </h1>
    </header>
  );
}
