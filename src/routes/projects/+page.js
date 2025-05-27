export async function load({ fetch, params }) {
	const res = await fetch('/api/images/Projects');
	const images = await res.json();
	return { images };
}
