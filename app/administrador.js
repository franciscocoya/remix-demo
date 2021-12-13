import path from 'path';
import fs from 'fs/promises';
import fm from 'front-matter';
//import invariant from 'tiny-invariant';
import { marked } from 'marked';

// Obtener el directorio de los archivos de las asignaturas -> ../asignaturas/
// Si el servidor es distinto de REMIX, añadir .. más a la ruta
const adminPath = path.join(__dirname, '../..', 'administrador');

function isValidAsigAttributes(attributes) {
  return attributes?.title;
}

export const getAdministrador = async () => {
  const file = await fs.readFile(
    path.join(adminPath, `administrador.md`),
    'utf8'
  );
  const { attributes, body } = fm(file.toString());

  return {
    html: marked(body),
    slug: 'administrador',
    title: attributes.title,
  };
};
