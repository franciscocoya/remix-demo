import { Form, useTransition } from "remix";


export default function FormularioAddasignatura() {
  const transition = useTransition();
  return (
    <Form method="post">
      <label htmlFor="denominacion">Denominación</label>
      <input type="text" name="denominacion" placeholder="Introduce el nombre completo de la asignatura" />
      <br />
      <label htmlFor="alias">Alias</label>
      <input type="text" name="alias" placeholder="DAW, ED, SI..." />
      <br />
      <label htmlFor="curso">Curso</label>
      <input type="text" name="curso" />
      <br />
      <label htmlFor="horas">Número de horas totales</label>
      <input type="text" name="horas" />
      <br />
      <input type="submit" value={
        transition.submission
          ? "Añadiendo..."
          : "Añadir"
      } />
    </Form>
  );
}