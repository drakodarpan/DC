// Conexión a la BD y que se mostrara

import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
