import express from 'express';

import DummyController from '@app/controllers/dummy';

const router = express.Router();

router.get('/', DummyController.get);

export default router;
