const mongoose = require("mongoose"); // importando el componente mogoose
const ReservasSchema = mongoose.Schema({
    NumeroReserva: {
        type: Number,
        required: true,
    },
    FechaReserva : {
        type: String,
        required: true,
    },
    HoraInicio: {
        type: String,
        required: true,
    },
    HoraFinal: {
        type: String,
        required: true,
    }
    //empleado: [{type: mongoose.Schema.Types.ObjectId, ref: 'Empleado'}]
});
module.exports = mongoose.model("Reservas", ReservasSchema);
