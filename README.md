# julian-mosquera.com

This repo is the working source code for the photography portfolio made for a good friend.

# Prerequisites 

The package manager for this project is ```pnpm```. Install this to download all the packages this site uses.

# Environment Setup

Keep in mind this is a project that is created for a friend, so a lot of the images are saved in a cloud service, in my case cloudinary.

This project requires Cloudinary credentials to function properly. Create a `.env` file in the root directory with the following variables:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

# Building + Deployment

The built site can be deployed to any static hosting service:

- Install the project dependencies by running ```pnpm install```
- To create a production build run the command ```pnpm build```
