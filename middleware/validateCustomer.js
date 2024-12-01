import  { check, validationResult } from "express-validator"

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
    const { _id, firstname, lastname, phone, company } = req.body;

    if (!_id || !firstname || !lastname || !phone || !company) {
        return res.status(400).json({
            error: "request must include all customer info!"
        });
    }

    console.log(req.body)

    next();
}

const validateCustomerDelete = (req, res, next) => {
    if (!req?.body?.id) return res.status(400).json({ "error": "request must include customer's id!" });
    next();
}

const validatePhoneNumberFormat = [
    check('phone')
        .isMobilePhone('fi-FI').withMessage('Invalid phone number format!'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export { validateCustomerPost, validateCustomerPut, validatePhoneNumberFormat, validateCustomerDelete }