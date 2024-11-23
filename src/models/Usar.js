const { Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required : true},
    run: {type: String, required: true},
    direccion: {type: String, required: true},
    comuna: {type: String, required: true},
    provincia: {type: String, required: true},
    region: {type: String, required: true},
    fecha_nacimiento: {type: String, required: true},
    sexo: {type: String, required: true},
    Numero_Telefono: {type: init, required: true},
}, {
    timestamps: true
})

module.exports = model('User', UserSchema);