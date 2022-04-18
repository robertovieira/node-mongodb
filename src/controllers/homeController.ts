import { Request, Response } from 'express';
import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
    // ------------------------------------------------------------------------------------------------
    // DELETE
    // ------------------------------------------------------------------------------------------------
    // ## Segunda forma de remover ## Obs: se for deletar direto do objeto, usar remove(). Se for do modelo, usar Delete();
    let user = await User.findOne({ email: 'fulano@hotmail.com'});
    if (user) {
        await user.remove();
    }

    // ## Primeira forma de remover ##
    // await User.findOneAndDelete({ email: 'monaliza@bol.com.br' });


    // ------------------------------------------------------------------------------------------------
    // UPDATE
    // ------------------------------------------------------------------------------------------------
    // ## Atualizando apenas o objeto em memoria ##
    // let user = await User.findOne({ email: 'monaliza@bol.com.br' });

    // if (user) {
    //     user.name.lastName = 'Silva';
    //     await user.save();
    // }

    // ## Atualizando apenas 1 registro ##
    // await User.updateOne(
    //     { email: 'monaliza@bol.com.br' },
    //     { age: 52 }
    // );

    // ## Atualizando mais de um registro ##
    // await User.updateMany(
    //     { age: { $lt: 18}},
    //     { age: 18 }
    // );

    // Metodo nao muito usado
    // let user = await User.findOneAndUpdate();

    // ------------------------------------------------------------------------------------------------
    // INSERT
    // ------------------------------------------------------------------------------------------------
    // let newUser = new User();
    // newUser.name = { firstName: 'John', lastName: 'Brazilian' };
    // newUser.email = 'john.bra@teste.com.br';
    // newUser.age = 32;
    // newUser.interests = ['Futebol', 'Cerveja'];

    // let resultado = await newUser.save();

    // console.log("Novo usuário: ", resultado);

    // let newUser = await User.create({
    //     name: { firstName: 'Monaliza', lastName: 'Fernandes'},
    //     email: 'monaliza@bol.com.br',
    //     age: 200,
    //     interests: ['arte', 'pizza']
    // });

    // console.log("Novo usuário: ", newUser);


    // ------------------------------------------------------------------------------------------------
    // SELECT
    // ------------------------------------------------------------------------------------------------
    // let users = await User.find({
    //     age: { $gt: 18 }
    // }).skip(1).limit(1);

    // let users = await User.find({
    //     age: { $gt: 18 }
    // }).sort({ age: -1 });

    // let users = await User.find({});

    // let users = await User.findOne({
    //     email: 'fulano@hotmail.com'
    // });

    // let users = await User.findById('625b1a5bdc27a54cba9ed6c4');
    // console.log(users);

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};