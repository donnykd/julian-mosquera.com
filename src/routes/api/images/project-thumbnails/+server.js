import cloudinary from '$lib/server/cloudinary'
import { json } from '@sveltejs/kit'

export async function GET() {
    try{
        const result = await cloudinary.search
        .expression('resource_type:image AND folder:Projects/*')
        .max_results(30)
        .execute()

        
       const seenFolders = new Set();
       const thumbnails = [];
       
       for (const image of result.resources){
         const folder = image.folder;
         const isHorizontal = image.width / image.height > 1.45;
         if(!seenFolders.has(folder) && isHorizontal){
           thumbnails.push({
             url: image.secure_url,
             id: image.public_id, folder
           });
           seenFolders.add(folder);
         }
       }
       
       return json({ images: thumbnails })
    } catch (error){
        return json({error: 'Failed to fetch images'}, {status: 500})
    }
}