import sendPeriodData from '../../front/src/components/screens/Generic/Calendar';
const mongoose = require('mongoose');

// on rajoute au niveau du model des phases le fait de pouvoir récupérer des dates et les injecter dans la BDD. Soit un document en base uniquement pour les dates, soient on les rattache à l'utilisateur directement.
let sendPeriodDataString = sendPeriodData.toString()
const phaseSchema = mongoose.Schema(
    {
        description: {
            type: String
        },
        category: {
            type: String
        },

        datePeriod: {
             type: Schema.Types.ObjectId, ref: {sendPeriodDataString}
        },
    },
    {
        timestamps: true
    }
)

const Phase = mongoose.model('Phase', phaseSchema)

module.exports = Phase;