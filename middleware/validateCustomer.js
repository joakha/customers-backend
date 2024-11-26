const validateCustomerPost = (req, res, next) => {
    const { firstname, lastname, phone, company } = req.body;

    if (!firstname || !lastname || !phone || !company) {
        return res.status(400).json({
            error: "request must include all customer info!"
        });
    }

    next();
}

const validateCustomerPut = (req, res, next) => {
    const { _id, firstname, lastname, phone } = req.body;

    if (!_id || !firstname || !lastname || !phone) {
        return res.status(400).json({
            error: "request must include all customer info!"
        });
    }

    next();
}

export { validateCustomerPost, validateCustomerPut }