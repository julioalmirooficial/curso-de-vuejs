export default async () => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  return await response.json();
};
