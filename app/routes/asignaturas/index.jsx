import { Link, useLoaderData } from "remix";
import { getAsignaturas } from "~/asignatura";

//import * as data from "./asignaturas.json";

// export const loader = () => {
//   return [
//     {
//       slug: "sistemas-informaticos",
//       denominacion: "Sistemas informáticos",
//     },
//     {
//       slug: "bases-de-datos",
//       denominacion: "Bases de datos",
//     }
//   ]

// };

export function loader() {
  return getAsignaturas();
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
              <Link to={a.slug}>{a.denominacion}</Link>
            </li>
          ))
        }
      </ul>
    </div >
  );
};