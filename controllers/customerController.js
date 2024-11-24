const getCustomers = async (req, res) => {
    return res.send("get route works!");
}

const postCustomer = async (req, res) => {
    return res.send("post route works!");
}

const editCustomer = async (req, res) => {
    return res.send("edit route works!");
}

const deleteCustomer = async => {
    return res.send("delete route works!");
}

export { getCustomers, postCustomer, editCustomer, deleteCustomer }