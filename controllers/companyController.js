import companyModel from "../mongoDB/models/Company.js";

const getCompanies = async (req, res) => {
    try {
        const companies = await companyModel.find();
        if (!companies) return res.status(204);
        res.status(200).json(companies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching companies from mongoDB' });
    }
}

export { getCompanies }