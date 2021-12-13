import { db } from "~/utils/db.server";
import { useLoaderData, useTransition } from "remix";

export let loader = async () => {
  const data = await db.asignatura.findMany();
  return data;
};

const ListItem = ({ props }) => {
  return (
    <li>
      {props.denominacion}
    </li>

  );
}


export default function ListadoAsignaturas() {
  const transition = useTransition();
  const data = useLoaderData();

  return (
    <ul>
      {data.map(a => (
        <ListItem props={a} key={a.id} />
      ))}
    </ul>
  );
};