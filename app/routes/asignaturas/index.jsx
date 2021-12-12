import { useLoaderData } from "remix";

//import * as data from "./asignaturas.json";

export const loader = () => {
  return [
    {
      slug: "SI",
      denominacion: "Sistemas informáticos",
    },
    {
      slug: "BBDD",
      denominacion: "Bases de datos",
    }
  ]

};

export default function Asignaturas() {
  const asignaturas = useLoaderData();
  return (
    <div className="">
      <h1>Asignaturas DAW</h1>
      <ul>
        {
          asignaturas.map(a => (
            <li key={a.slug}>
              {a.denominacion}
            </li>
          ))
        }
      </ul>
    </div>
  );
};