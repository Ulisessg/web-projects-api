# 🧩 Api of UD, website that will be focused on sharing knowledge, mainly about technology and a design system.

## Start with 👩‍🚀

Clone the repository

    git clone git@github.com:Ulisessg/web-projects-api.git

## Install dependencies 🔧

    npm install

## Technologies used 👨‍💻

- ### [MongoDB](https://university.mongodb.com/)
- ### [Express](https://expressjs.com/es/)
- ### [Vercel](https://vercel.com/)

## Deploy 🚀

Work in preogress

## Scripts

### _Start develop server_

    npm run dev

### _Start production server_

    npm run start

# Schemas:

## CreateBlog: Object

    CreateBlog = {
        _id: ObjectId(),
        name: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    }

# Endpoints

## Route

    Get a blog

    /api/blog?name=nameOfBlog



## Route

    Get all blogs
    
    /api/blog/all-blogs

## Route

    Get all blogs info
    
    /api/blog/all-info