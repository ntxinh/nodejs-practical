import mongoose from 'mongoose'
import { ContactSchema } from '../models/crmModel'

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb', {
    useMongoClient: true
})

const Contact = mongoose.model('Contact', ContactSchema)

let contacts = [
    new Contact({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: 0
    }),
    new Contact({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: 0
    })
]

let done = 0;
for (let i = 0; i < contacts.length; i++) {
    contacts[i].save(function (err, result) {
        done++;
        if (done === contacts.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
