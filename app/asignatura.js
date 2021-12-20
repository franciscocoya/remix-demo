import path from 'path';
import fs from 'fs/promises';
import fm from 'front-matter';
import invariant from 'tiny-invariant';
import { marked } from 'marked';

// Obtener el directorio de los archivos de las asignaturas -> ../asignaturas/
// Si el servidor es distinto de REMIX, añadir .. más a la ruta
// const asigPath = path.join(__dirname, '../asignaturas');

const asigPath = '.output/static';
function isValidAsigAttributes(attributes) {
  return attributes?.title;
}

export const getAsignaturas = async () => {
  const dir = await fs.readdir(asigPath);

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(asigPath, filename), 'utf8');

      const { attributes, body } = fm(file.toString());

      invariant(
        isValidAsigAttributes(attributes),
        `${filename} has bad meta data!`
      );

      return {
        html: marked(body),
        slug: filename.replace('.md', ''),
        denominacion: attributes.title,
      };
    })
  );
};

export const getAsignatura = async (slug) => {
  const file = await fs.readFile(path.join(asigPath, `${slug}.md`), 'utf8');
  const { attributes, body } = fm(file.toString());

  return {
    html: marked(body),
    slug,
    denominacion: attributes.title,
  };
};
