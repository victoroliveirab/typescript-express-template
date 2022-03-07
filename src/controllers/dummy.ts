import { Request, Response } from 'express';

class DummyController {
  async get(_: Request, res: Response) {
    res.json({
      hello: 'world',
    });
  }
}

export default new DummyController();
