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

## Blog Schema: JSON

    {
        name: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        metaDescription: {
            type: String,
        },
        metaSubjects: {
            type: Array,
            required: true,
        },
        seoCardUrl: {
            type: String,
            required: true,
        },
        visits: {
            type: Number,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    }

# Endpoints

## Route

    Get a blog: Return a specific blog

    Method: GET

    /api/blog?name=nameOfBlog



## Route

    Get all blogs: Return all blogs

    Method: GET
    
    /api/blog/all-blogs

## Route

    Get all blogs info: Return info about blogs

    Method: GET
    
    /api/blog/all-info

## Route

    Get info about one blog

    Method: GET

    /api/blog/info?name=NameOfBlog

## Route

    Get last 10 entries

    Method: GET

    /api/blog/last-entries

    If you want to get less blogs:

    /api/blog/last-entries?limit=Number

## Route

    // Create a blog, use Blog Schema

    Method: POST

    /api/blog

    // Schema

    {
        name: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        metaDescription: {
            type: String,
        },
        metaSubjects: {
            type: Array,
            required: true,
        },
        seoCardUrl: {
            type: String,
            required: true,
        },
        visits: {
            type: Number,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    }