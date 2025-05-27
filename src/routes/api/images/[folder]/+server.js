import cloudinary from '$lib/server/cloudinary'
import { json } from '@sveltejs/kit'

export async function GET({ params }) {
  const folder = params.folder;
    try{
        const result = await cloudinary.search
        .expression(`resource_type:image AND folder:${folder}`)
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute()

       // @ts-ignore
       const images = result.resources.map((img) => ({
            url: img.secure_url,
            id: img.public_id
            
        }))

        return json(images);
    } catch (error){
        return json({error: 'Failed to fetch images'}, {status: 500})
    }
}