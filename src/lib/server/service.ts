import { google } from 'googleapis'
import { env } from '$env/dynamic/private'

export const getDriveService = () => {
     const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: env.GOOGLE_CLIENT_EMAIL,
            private_key: env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        },
        scopes: ['https://www.googleapis.com/auth/drive']
     })

     return google.drive({ version: 'v3', auth})

}

export const getPublicUrl = (fileId: string): string => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}