import cloudinary from '$lib/server/cloudinary';
import { json } from '@sveltejs/kit';

export async function GET() {
	try {
		const result = await cloudinary.search
			.expression('resource_type:image AND asset_folder:Projects/*') //Add cosplays to this later using OR
			.with_field('context')
			.max_results(100)
			.execute();

		const seenFolders = new Set();
		const thumbnails = [];

		for (const image of result.resources) {
			const folder = image.asset_folder;
			const isHorizontal = image.width / image.height > 1.45;
			const [, projectName] = image.asset_folder.split('/');
			const date = image.context.Date;

			if (!seenFolders.has(folder) && isHorizontal) {
				thumbnails.push({
					url: image.secure_url,
					id: image.public_id,
					folder,
					project: projectName,
					date
				});
				seenFolders.add(folder);
			}
		}

		return json({ images: thumbnails });
	} catch (error) {
		return json({ error: 'Failed to fetch images' }, { status: 500 });
	}
}
