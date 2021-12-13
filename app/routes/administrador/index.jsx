import { Link } from "remix";


const Panel = () => {
  return (
    <>
      <ul>
        <li><Link to="/administrador/addAsignatura">Añadir una asignatura</Link></li>
        <li><Link to="/asignaturas/edit">Modificar una asignatura</Link></li>
        <li><Link to="/administrador/list">Listar todas las asignaturas</Link></li>
        <li><Link to="/asignaturas/delete/:id">Eliminar una asignatura</Link></li>
      </ul>
    </>
  );
};

export default function Administrador() {

  return (
    <>
      <h1>Menú</h1>
      <Panel />
    </>
  );
};