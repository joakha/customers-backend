const validateCustomerInfo = (req, res, next) => {
    const { _id, firstname, lastname, phone } = req.body;

    if (!_id || !firstname || !lastname || !phone) {
        return res.status(400).json({
            error: "request must include all customer info!"
        });
    }

    next();
}

export default validateCustomerInfo