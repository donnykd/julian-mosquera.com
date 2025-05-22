export async function load({ fetch }) {
	const res = await fetch('/api/images');
	const images = await res.json();
	return { images };
}
