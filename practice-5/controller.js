const Contact = require('./Contact');

exports.getAllContact = (req, res) => {
    Contact.find()
        .then(contacts => {
            res.render('index', { contacts, error: {} });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getSingleContact = (req, res) => {
    let { id } = req.params;
    Contact.findById(id)
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            console.log(err);
        })
}

exports.createContact = (req, res) => {
    let {
        name,
        email,
        phone,
        id
    } = req.body;

    let error = {}

    if (!name) {
        error.name = 'Please Provide a Name'
    }

    if (!phone) {
        error.phone = 'Please Provide a Phone Number'
    }

    if (!email) {
        error.email = 'Please Provide an Email'
    }

    let isError = Object.keys(error).length > 0
    if (isError) {
        Contact.find()
            .then(contacts => {
                return res.render('index', { contacts, error })
            })
            .catch(err => {
                console.log(err);
                return res.json({
                    message: 'error occurred'
                })
            })
    }

    if (id) {
        Contact.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                name,
                email,
                phone
            }
        })
            .then(() => {
                Contact.find()
                .then(contacts => {
                    res.render('index', {contacts, error: {}})
                })
            })
            .catch(err => {
                console.log(err);
                return res.json({
                    message: 'error occurred'
                })
            })
    } else {
        let contact = new Contact({
            name,
            email,
            phone
        })

        contact.save()
            .then(c => {
                Contact.find()
                    .then(contacts => {
                        return res.render('index', { contacts, error: {} })
                    })
            })
            .catch(err => {
                console.log(err);
                return res.json({
                    message: 'error occurred'
                })
            })
    }
}

exports.updateContact = (req, res) => {
    let { name, email, phone } = req.body;
    let { id } = req.params;

    Contact.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            name,
            email,
            phone
        }
    }, { new: true })
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            console.log(err);
        })
}

exports.deleteContact = (req, res) => {
    let { id } = req.params;
    Contact.findOneAndDelete({
        _id: id
    })
        .then(() => {
            Contact.find()
                .then(contacts => {
                    res.render('index', { contacts, error: {} })
                })
        })
        .catch(err => {
            console.log(err);
            return res.json({
                message: 'error occurred'
            })
        })
}