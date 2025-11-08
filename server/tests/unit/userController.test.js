// Unit test for controller input validation (mocking response)
const ctrl = require('../../src/controllers/userController');

describe('userController unit', () => {
  it('returns 400 when no name', async () => {
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await ctrl.createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Name required' });
  });
});
