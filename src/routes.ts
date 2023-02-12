import { Router } from "express";

const router = Router();

router.post('/users', (request, response) => {
  return response.status(201).send();
})

router.get('/', (request, response) => {
  return response.write('Ok')
})

export { router }