export async function load({ fetch }) {
	const res = await fetch('/api/images/project-thumbnails');
	const data = await res.json();
	return { images: data.images };
}
