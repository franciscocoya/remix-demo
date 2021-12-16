import { db } from "~/utils/db.server";
import { useLoaderData, Link, Form } from "remix";

import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getItem, deleteItemById } from "~/model/asignatura.model";


export let loader = async () => {
  const data = await db.asignatura.findMany();
  return data;
};

export async function action({ request }) {
  const data = await request.formData();
  const deletedUItem = await deleteItemById(Number(data.get("id")));
  return deletedUItem;
}

// Recarar el componente al eliminar un elemento de la lista
export function unstable_shouldReload({
  submission
}) {
  return (
    submission &&
    submission.action === `/administrador/list`
  );
}


const ListItem = ({ props }) => {
  return (
    <li>
      {props.denominacion}
      <Link to={`/administrador/edit:${props.id}`}><FontAwesomeIcon icon={faEdit} /></Link>
      <Form method="post">
        <input type="hidden" name="id" value={props.id} />
        <button type="submit">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </Form>

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