import Sequelize, { Model} from 'sequelize';

export default class Aluno extends Model {

static init(sequelize){
    super.init({
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
    },{
        sequelize,
    });
    return this;
}




}
