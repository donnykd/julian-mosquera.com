export async function load({ fetch, params }) {
  const folderName = params.slug;
  console.log(folderName)
  const res = await fetch(`/api/images/${folderName}`);
  const images = await res.json();
  return { images };
}