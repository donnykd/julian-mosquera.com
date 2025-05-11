import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import { getDriveService } from '$lib/server/service';

export async function GET() {
	try {
		const drive = getDriveService();
		const folderID = env.PERSONAL_FOLDER;

		const { data } = await drive.files.list({
			q: `'${folderID}' in parents and mimeType contains 'image/'`,
			fields: 'files(id, name)',
		});

		const files = (data.files ?? []).map((file) => ({
			id: file.id,
			name: file.name,
			url: `https://drive.google.com/uc?id=${file.id}`,
		}));

		return json({ status: 'success', files });
	} catch (error) {
		console.error(error);
		return json({ status: 'error', message: 'Failed to load images' }, { status: 500 });
	}
}