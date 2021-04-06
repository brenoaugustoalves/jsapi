import Aluno from '../models/Aluno';


class  HomeController {
     async index(req, res) {
      const novoAluno = await Aluno.create({
          nome: 'Maria',
          sobrenome: 'Alves',
          email: 'mariaalves@gmail.com',
          idade: 25,
          peso: 75,
          altura: 1.70
      });
      res.json(novoAluno)
    }
  }

  export default new HomeController();
