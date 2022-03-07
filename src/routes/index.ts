import express from 'express';
import dummyRouter from './dummy';

const URL_PREFIX = '/api';

const router = express.Router();

router.use(`${URL_PREFIX}/dummy`, dummyRouter);

export default router;
