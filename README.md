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

## Blog: Object

    Blog = {
      name: String,
      id: Number,
      metaDescription: String,
      metaSubjects: Array,
      seoCardUrl: String,
      content: String,
      likes: Number,
    }

## getBlogs: Array[10]

    getBlogs = [
      {
        blogUrl: String,
        title: String,
        subTitle: String,
        cardUrl: String,
        subjects: Array,
        id: Number,
      }
    ]

## CreateBlog: Object

    createBlog = {
      _id: ObjectId(),
      name: String,
      metaDescription: String,
      metaSubjects: Array,
      seoCardUrl: String,
      content: File.md,
    }

## updateBlog: Object

    updateBlog = {
      _id: ObjectId(),
      content: File.md
    }

## deleteBlog: Object

    deleteBlog = {
      _id: ObjectId()
    }

# Endpoints

## Route

    /api/getBlog => Blog: Object

### Params: Subject, title, id

## Route

    /api/getBlogs => getBlogs: Array

### Params: initNumber, limit

## Route

    /api/getBlogsBySubject => getBlogs: Array

### Params: Subject, initNumber, limitNumber

## Route

    /api/createBlog => createBlog: Object

## Route

    /api/updateBlog => updateBlog; Object

## Route

    /api/deleteBlog => deleteBlog: Object
