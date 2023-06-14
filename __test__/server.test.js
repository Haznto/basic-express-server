const supertest = require('supertest');
const { app } = require('../server');
const req = supertest(app);
// console.log(req)
describe('Server test', () => {
    it('handle not found pages', async () => {
        const res = await req.get('/anyPageNotExist');
        console.log(res)
        expect(res.status).toEqual(404);
    });
    it('handle bad method', async () => {
        const res = await req.post('/');
        expect(res.status).toEqual(404);
    });
    it('handle home', async () => {
        const res = await req.get('/');
        expect(res.status).toEqual(200);
    });
    it('handle 500 error on empty query', async () => {
        const res = await req.get('/person');
        expect(res.status).toEqual(500);
    });
    it('handle 200 on correct query', async () => {
        const res = await req.get('/person?name=anything');
        expect(res.status).toEqual(200);
    });
    it('handle 200 on correct query', async () => {
        const res = await req.get('/person?name=anything');
        console.log(res.body)
        expect(res.body).toEqual({
            name: "anything"
        });
    });


})