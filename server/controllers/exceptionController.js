import { getByAppId } from "../services/exceptionService.js";

export const _getByAppId = async (req, res) => {
    const { appId } = req.params;

    await getByAppId(appId)
        .then((output) => {
            output ? res.status(200).json(output) : res.status(404).json({ message: "Exceptions Not Found."})
        })
        .catch((error) => {
            res.status(500).json({ name: error.name, message: error.message, errors: error.errors });
        });
}