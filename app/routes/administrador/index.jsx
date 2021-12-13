import { useLoaderData } from "remix";
import { getAdministrador } from "~/administrador";

export const loader = () => {
  return getAdministrador();
};

export default function Administrador() {
  const admin = useLoaderData();
  return (
    <>
      <h1>{admin.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: admin.html }} />
    </>
  );
};