import { useLoaderData } from "remix";
import { getAsignatura } from "~/asignatura"

export const loader = ({ params }) => {
  const { slug } = params;
  if (slug == undefined) {
    throw new Error("Error. No hay slug");
  }

  return getAsignatura(slug);
};

export default function AsignaturaSlug() {
  const asignatura = useLoaderData();
  return (
    <>
      <h1>{asignatura.denominacion}</h1>
      <div dangerouslySetInnerHTML={{ __html: asignatura.html }} />
    </>
  );
}