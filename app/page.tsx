
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section>
      <div className="rounded-2xl bg-white/80 p-8 shadow-md">
        <h2 className="text-3xl font-bold mb-2">Üdv a Felhőállat Lexikonban</h2>
        <p className="text-slate-700 mb-4">
          Ez egy képzeletbeli enciklopédia a felhőkből született lényekről. Fedezd fel a különleges fajokat,és olvasd el rövid leírásukat.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border bg-gradient-to-b from-white to-sky-50">
            <h3 className="font-semibold">Mit találsz itt?</h3>
            <ul className="mt-2 list-disc list-inside text-slate-700">
              <li>Képzeletbeli felhőállat leírások</li>
              <li>Lista a felhőállatokról (Lexikon)</li>
            </ul>
            <Link href="/lexikon" className="inline-block mt-4 text-sm font-medium underline">Ugrás a lexikonra</Link>
          </div>

          <div className="p-4 rounded-lg border bg-gradient-to-b from-white to-sky-50">
            <h3 className="font-semibold">Honnan jött az ötlet?</h3>
            <p className="mt-2 text-slate-700">
              Egy egyszerű, kreatív feladat részeként készült ez a kis oldal: bemutatni egy még nem létező világot barátságos, olvasható formában.
            </p>

          </div>
        </div>
      </div>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-3">Kiemelt felhőállatok</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <article className="p-4 rounded-lg bg-white/80 border shadow-sm">
            <h4 className="font-bold">Cumulus macska</h4>
            <p className="text-sm text-slate-700 mt-1">Puhatestű, dorombolással kavarja a légáramlást. Kedveli a napos, szellős felhőket.</p>
          </article>

          <article className="p-4 rounded-lg bg-white/80 border shadow-sm">
            <h4 className="font-bold">Nimbus bagoly</h4>
            <p className="text-sm text-slate-700 mt-1">Éjszakai vadász, halk szárnycsapásokkal mozog. Esőt hozó felhők között gyakori.</p>
          </article>

          <article className="p-4 rounded-lg bg-white/80 border shadow-sm">
            <h4 className="font-bold">Cirrus delfin</h4>
            <p className="text-sm text-slate-700 mt-1">Széllel lebegő, gyors mozgású lény, aki magas rétegekben játszik.</p>
          </article>

          
        </div>
      </section>
    </section>
  );
}
