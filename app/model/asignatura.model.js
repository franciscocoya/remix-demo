import { db } from '~/utils/db.server';

const getItem = async (id) => {
  console.log(id);
  const res = await db.asignatura.findUnique({
    where: {
      id,
    },
  });
  // const deleted = await db.asignatura.delete({
  //   where: {
  //     id: Number(myId)
  //   }
  // });
  return res;
};

const deleteItemById = async (id) => {
  console.log(id);
  const deleted = await db.asignatura.delete({
    where: {
      id: Number(id),
    },
  });
  console.log(deleted);
  return deleted;
};

export { getItem, deleteItemById };
