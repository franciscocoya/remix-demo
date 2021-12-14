import { db } from "~/utils/db.server";
import { useLoaderData, Link } from "remix";

import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export let loader = async () => {
  const data = await db.asignatura.findMany();
  return data;
};

const ListItem = ({ props }) => {
  return (
    <li>
      {props.denominacion} <Link to={`/administrador/edit:${props.id}`}><FontAwesomeIcon icon={faEdit} /></Link><FontAwesomeIcon icon={faTrashAlt} />
    </li>

  );
}


export default function ListadoAsignaturas() {
  // const transition = useTransition();
  const data = useLoaderData();

  return (
    <ul>
      {data.map(a => (
        <ListItem props={a} key={a.id} />
      ))}
    </ul>
  );
};