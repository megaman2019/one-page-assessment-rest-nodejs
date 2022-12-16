import { getByCustIdIn } from "../services/creditHistoryService.js";

export const _getByCustIdIn = async (req, res) => {
    const { custIdList } = req.params;

    await getByCustIdIn(custIdList)
        .then((output) => {
            output ? res.status(200).json(output) : res.status(404).json({ message: "Credit History Not Found."})
        })
        .catch((error) => {
            res.status(500).json({ name: error.name, message: error.message, errors: error.errors });
        });
}