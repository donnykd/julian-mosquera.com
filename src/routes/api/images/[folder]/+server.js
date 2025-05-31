import cloudinary from '$lib/server/cloudinary'
import { json } from '@sveltejs/kit'

export async function GET({ params }) {
  const folder = params.folder;
  
  // @ts-ignore
  async function fetchImages(path){
    const result = await cloudinary.search
    .expression(`resource_type:image AND folder:${path}`)
    .sort_by('public_id', 'desc')
    .max_results(60)
    .execute()
    
    return result
  }
  
    try{
      
      let result;
      
        if(folder === 'Personal'){
          result = await fetchImages(folder);
        }
        else{
         	result = await fetchImages(`Projects/${folder}`)
    		}

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