import React from "react";
import { redirect } from "remix";
import FormularioAddasignatura from "~/components/formAdd";
import { db } from "~/utils/db.server";

export async function action({ request }) {
  const res = await request.formData();
  const denominacion = res.get("denominacion");
  const alias = res.get("alias");
  const curso = Number(res.get("curso"));
  const horas = Number(res.get("horas"));

  console.log(typeof (curso));


  // Introducir los datos de la asignatura en la tabla Asignatura
  await db.asignatura.create({
    data: {
      denominacion,
      alias,
      curso,
      horas
    }
  }).catch(err => {
    throw err;
  }).finally(async () => {
    await db.$disconnect();
  });

  return redirect("/administrador/list");
}

export default function AddAsignatura() {
  return (
    <>
      <h1>Añadir una nueva asignatura</h1>
      <FormularioAddasignatura />
    </>
  );
};