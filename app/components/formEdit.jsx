import { Form, useTransition } from "remix";

const handleChange = (e) => {
  console.log(props);
  console.log(e.target.value);
};


export default function FormularioEditAsignatura({ denominacion, alias, horas, curso }) {
  const transition = useTransition();

  return (
    <Form method="post">
      <label htmlFor="denominacion">Denominación</label>
      <input type="text" name="denominacion" placeholder={denominacion} />
      <br />
      <label htmlFor="alias">Alias</label>
      <input type="text" name="alias" placeholder={alias} />
      <br />
      <label htmlFor="curso">Curso</label>
      <input type="text" name="curso" placeholder={curso} />
      <br />
      <label htmlFor="horas">Número de horas totales</label>
      <input type="text" name="horas" placeholder={horas} />
      <br />
      <input type="submit" value={
        transition.submission
          ? "Editando..."
          : "Editar"
      } />
    </Form>
  );
}