"use client";

import React, { useState } from "react";

type Animal = {
  id: string;
  name: string;
  description: string;
};

export default function LexikonPage() {
  const [animals] = useState<Animal[]>([
    {
      id: "1",
      name: "Cumulus macska",
      description: "Puha, fehér és lusta – leginkább délután úszik át az égen.",
    },
    {
      id: "2",
      name: "Nimbus bagoly",
      description: "Éjszaka formálódik, villámgyorsan tűnik el hajnalban.",
    },
    {
      id: "3",
      name: "Cirrus delfin",
      description: "A magasban úszik, és szivárványok között bukfencezik.",
    },
  ]);

  return (
    <main className="min-h-screen bg-sky-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-sky-800"> Felhőállat Lexikon</h1>
      <ul className="space-y-4">
        {animals.map((a) => (
          <li key={a.id} className="bg-white shadow-md rounded-xl p-4 w-80 text-center">
            <h2 className="text-xl font-semibold text-sky-700">{a.name}</h2>
            <p className="text-gray-600 mt-2">{a.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
