import Sequelize, { Model} from 'sequelize';
import { password } from '../config/database';
import bycryptjs from 'bcryptjs';

export default class User extends Model {

static init(sequelize){
    super.init({
        nome: {
            type: Sequelize.STRING,
            defaultValue: '',
            validate: {
                len: {
                    args: [3,255],
                    msg: 'Campo nome não pode ficar vazio',
                },
            },
        },
        email: {
            type: Sequelize.STRING,
            defaultValue: '',
            validate: {
                isEmail: {
                    args: [3,255],
                    msg: 'Email invalido',
                },
            },
        },
        password_hash: {
            type: Sequelize.STRING,
            defaultValue: '',
        },
        password: {
            type: Sequelize.VIRTUAL,
            defaultValue: '',
            validate: {
                len: {
                    args: [6,50],
                    msg: 'A senha precisa ter entre 6 e 50 caracteres',
                },
            },
        },


    },{
        sequelize,
    });

    this.addHook('beforeSave', async user => {
        if (user.password){
        user.password_hash = await bycryptjs.hash(user.password, 8);
        }
    })

    return this;
}




}
