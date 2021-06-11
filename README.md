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
- ### [Typescript](https://www.typescriptlang.org/)

## Deploy 🚀

Work in preogress

## Scripts

### _Start develop server_

    npm run dev

### _Start production server_

    npm run start

## API documentation

### Version: 2.0.0

### /api/blog/last-entries

#### GET
##### Summary

Return my blogpost entries

##### Parameters

| Name  | Located in | Description                                                                | Required | Schema |
| ----- | ---------- | -------------------------------------------------------------------------- | -------- | ------ |
| name  | query      | Return an specific document                                                | No       | string |
| limit | query      | Limit the number of documents to get.                                      | No       | string |
| skip  | query      | All documents are ordered by id, you can put from where beginning to count | No       | string |

##### Responses

| Code | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| 200  | (OK) You get a JSON with last blogs ordered by publication date. |
| 500  | (Error) Documents not founded or Internal server error           |

### /api/add-visit

#### POST
##### Summary

Add an visit to the blog entry

##### Parameters

| Name      | Located in | Description      | Required | Schema |
| --------- | ---------- | ---------------- | -------- | ------ |
| blog_name | query      | Is the blog name | Yes      | string |

##### Responses

| Code | Description                                            |
| ---- | ------------------------------------------------------ |
| 200  | (OK) Visit registered                                  |
| 500  | (Error) Documents not founded or Internal server error |

### /api/gist

#### GET
##### Summary

Return my gists

##### Parameters

| Name  | Located in | Description                                                                | Required | Schema |
| ----- | ---------- | -------------------------------------------------------------------------- | -------- | ------ |
| name  | query      | Return an specific document                                                | No       | string |
| limit | query      | Limit the number of documents to get.                                      | No       | string |
| skip  | query      | All documents are ordered by id, you can put from where beginning to count | No       | string |

##### Responses

| Code | Description                                                     |
| ---- | --------------------------------------------------------------- |
| 200  | (OK) You get a JSON with last gists ordered by publication date |
| 500  | (Error) Documents not founded or Internal server error          |

### Models

#### blogResponseSchema

| Name               | Type  | Description | Required |
| ------------------ | ----- | ----------- | -------- |
| blogResponseSchema | array |             |          |

#### gistsResponseSchema

| Name                | Type  | Description | Required |
| ------------------- | ----- | ----------- | -------- |
| gistsResponseSchema | array |             |          |

## DB Schemas:

### Gist Schema

    {
        title: {
            type: String,
            required: true,
        },
        subjects: {
          type: Array,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        description: {
            type: String,
            required: true,
        },
        githubLink: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        }
    }

### Blog Schema: JSON

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
        required: true,
      },
      id: {
        type: Number,
        required: true,
      },
      language: {
        type: String,
        required: true,
      }
    }
