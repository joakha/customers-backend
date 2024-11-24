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

    return res.send("post route works!");
}

const editCustomer = async (req, res) => {
    return res.send("edit route works!");
}

const deleteCustomer = async (req, res) => {
    try {
        if (!req.body.id) return res.status(400).json({"error": "request must include customers id!"});
        const toBeDeletedCustomerId = req.body.id;
        await customerModel.deleteOne({_id: toBeDeletedCustomerId});
        res.status(200).json({"info": "Deletion successful!"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting customer from mongoDB' });
    }
}

export { getCustomers, postCustomer, editCustomer, deleteCustomer }