/* eslint-disable import/no-unresolved */
import BlogSchema from '../../schemas/BlogSchema';

export default (injectedStore: any) => {
  let store = injectedStore;
  if (!store) {
    store = import('../../../store/blogsStore');
  }
  async function getBlog(query: any) {
    try {
      const result = await store.findOne(BlogSchema, query, { _id: 0 });

      return result;
    } catch (error) {
      return error;
    }
  }

  async function getAllBlogs(query: any) {
    try {
      const blogs = await store.findMany(BlogSchema, query, { _id: 0 });
      return blogs;
    } catch (err) {
      return err;
    }
  }

  async function getAllBlogsInfo(query: any) {
    try {
      const infos = await store.findMany(BlogSchema, query, {
        content: 0,
        name: 0,
        visits: 0,
        id: 0,
      });
      return infos;
    } catch (error) {
      return error;
    }
  }

  async function getBlogInfo(query: any) {
    try {
      const result = await store.findOne(BlogSchema, query);

      return result;
    } catch (error) {
      return error;
    }
  }

  async function createBlog(data: any) {
    try {
      // Get how many blog are, and set the id adding 1
      const totalBlogs = await BlogSchema.countDocuments();

      const blog = {
        name: data.name,
        content: data.content,
        title: data.title,
        metaDescription: data.metaDescription,
        metaSubjects: data.metaSubjects,
        seoCardUrl: data.seoCardUrl,
        // Visits setted to 0 by default
        visits: 0,
        id: totalBlogs + 1,
      };

      const blogDocument = new BlogSchema(blog);

      const blogResponse = await store.insertOne(blogDocument);

      if (blogResponse !== 'Document created') {
        return 'Error creating blog';
      }
      return 'Blog created';
    } catch (error) {
      return error;
    }
  }

  async function findLastBlogs(query: any, skip: any, limit: any) {
    const limitParsed = parseInt(limit, 10);
    const skipParsed = parseInt(skip, 10);

    try {
      const result = await store.findLimitedDocuments(
        BlogSchema,
        query,
        { content: 0, visits: 0 },
        limitParsed,
        skipParsed,
      );

      return result;
    } catch (error) {
      return error;
    }
  }

  // eslint-disable-next-line camelcase
  async function add_visit(blog_name: string) {
    try {
      const response = await store.updateOne(
        BlogSchema,
        { name: blog_name },
        { $inc: { visits: 1 } },
      );
      if (Object.values(response)[1] === 'MongoError' || response.nModified === 0) {
        return { error: true };
      }
      return 'Visit added';
    } catch {
      return new Error('Error adding visit');
    }
  }

  async function addLike(blogName: string) {
    try {
      const response = await store.updateOne(
        BlogSchema,
        { name: blogName },
        { $inc: { likes: 1 } },
      );

      if (Object.values(response)[1] === 'MongoError' || response.nModified === 0) {
        return { error: true };
      }
      return 'Like added';
    } catch (error) {
      return new Error('Error adding like');
    }
  }

  return {
    createBlog,
    getBlog,
    getBlogInfo,
    getAllBlogs,
    getAllBlogsInfo,
    findLastBlogs,
    add_visit,
    addLike,
  };
};
