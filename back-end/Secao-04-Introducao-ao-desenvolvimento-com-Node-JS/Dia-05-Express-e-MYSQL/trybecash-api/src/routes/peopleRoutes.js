const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

it('Testando a listagem de todas as pessoas', async function () {
  sinon.stub(connection, 'execute').resolves([peopleList]);
  const response = await chai
    .request(app)
    .get('/people');

  expect(response.status).to.equal(200);
  expect(response.body).to.deep.equal(peopleList);
});

it('Testando a listagem da pessoa com id 1', async function () {
  sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);
  const response = await chai
    .request(app)
    .get('/people/1');

  expect(response.status).to.equal(200);
  expect(response.body).to.deep.equal(peopleList[0]);
});

module.exports = router;