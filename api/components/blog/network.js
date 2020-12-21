import { Router } from 'express';
import { success, error } from '../../../network/responses.js';
import controller from './index.js';

const router = Router();

router.get('/', async (req, res) => {
  const result = controller.getBlog(1);
  success(req, res, 200, result);
});

router.post('/', async (req, res) => {
  const response = controller.createBlog('');
  success(req, res, 201, response);
});

export default router;
