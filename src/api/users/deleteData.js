export default async (id) => {
  const response = await fetch(import.meta.env.VITE_API_URL + '?id=' + id, {
    method: 'DELETE',
    'Content-Type': 'application/json'
  });
  const data = await response.json();
  if (data.mensaje === 'Registro eliminado con éxito') {
    return true;
  } else {
    return false;
  }
};
