import customerModel from "../mongoDB/models/Customer.js";

const getCustomers = async (req, res) => {
    try {
        const customers = await customerModel.find();
        if (!customers) return res.status(204);
        res.status(200).json(customers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching customers from mongoDB' });
    }
}

const postCustomer = async (req, res) => {
    if (!req?.body?.firstname || !req?.body?.lastname || !req?.body?.phone) return res.status(400).json({ "error": "request must include all customer info!" });
    try {
        const toBeAddedCustomer = new customerModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone
        })
        await toBeAddedCustomer.save();
        res.status(200).json({ "info": "Customer added successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error adding customer to mongoDB!' });
    }
}

const editCustomer = async (req, res) => {
    try {
        await customerModel.findByIdAndUpdate(req.body._id, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone
        })
        res.status(200).json({ "info": "Customer edited successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error editing customer info in mongoDB!' });
    }
}

const deleteCustomer = async (req, res) => {
    try {
        if (!req?.body?.id) return res.status(400).json({ "error": "request must include customer's id!" });
        const toBeDeletedCustomerId = req.body.id;
        await customerModel.deleteOne({ _id: toBeDeletedCustomerId });
        res.status(200).json({ "info": "Deletion successful!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting customer from mongoDB!' });
    }
}

export { getCustomers, postCustomer, editCustomer, deleteCustomer }