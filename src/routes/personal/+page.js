export async function load({ fetch, params }) {
	const res = await fetch(`/api/images/Personal`);
	const images = await res.json();
	return { images };
}
