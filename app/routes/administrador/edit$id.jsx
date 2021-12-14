import React from "react";
import { useLoaderData, redirect } from "remix";
import FormularioEditAsignatura from "~/components/formEdit";
import { db } from "~/utils/db.server";


/**
 * Método que obtiene una asignatura por su id
 * @param {*} myId 
 * @returns 
 */
const getAsignaturaById = async (myId) => {
  const res = await db.asignatura.findUnique({
    where: {
      id: Number(myId.split(":")[1])
    }
  }).catch(err => {
    throw Error(err);
  }).finally(() => {
    db.$disconnect();
  });
  return res;
};

export async function action({ request, params }) {
  const res = await request.formData();
  const denominacion = res.get("denominacion");
  const alias = res.get("alias");
  const curso = Number(res.get("curso"));
  const horas = Number(res.get("horas"));

  const asigOrig = await getAsignaturaById(params.id);

  const asigUpdated = await db.asignatura.update({
    where: {
      id: asigOrig.id
    },
    data: {
      denominacion: denominacion || asigOrig.denominacion,
      alias: alias || asigOrig.alias,
      curso: curso || asigOrig.curso,
      horas: horas || asigOrig.horas
    }
  });
  return redirect("/administrador/list");
}

export async function loader({ params }) {
  const asignatura = await getAsignaturaById(params.id)
  return asignatura;
}

export default function EditAsignatura() {
  const data = useLoaderData(); // Asignatura a editar
  return (
    <>
      <h1>Editar la asignatura <span style={{ color: 'yellow' }}>{data.denominacion}</span></h1>
      <FormularioEditAsignatura
        denominacion={data.denominacion}
        alias={data.alias}
        curso={data.curso}
        horas={data.horas}
      />
    </>
  );
};
