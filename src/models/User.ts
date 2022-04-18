import { Schema, Model, model, connection } from 'mongoose';

// criar o type (Typescript)
type UserType = {
    name: {
        firstName: string,
        lastName: string
    },
    age: number,
    email: string,
    interests: string[]
}

// criando o Schema (Serve para o Mongoose). Por isso a letra maiuscula dos tipos
const schema = new Schema<UserType>({
    name: {
        firstName: { type: String, required: true },
        lastName: String
    },
    age: Number,
    email: { type: String, required: true},
    interests: [String]
});

// criando a model
const modelName: string = 'User';

// isso foi feito para essa model nao ser criada toda vez
export default (connection && connection.models[modelName]) ? connection.models[modelName] as Model<UserType> : model<UserType>(modelName, schema);