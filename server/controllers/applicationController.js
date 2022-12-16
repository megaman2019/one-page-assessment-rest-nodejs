import { getByAppId } from '../services/applicationService.js';

export const _getByAppId = async (req, res) => {

    const { id } = req.params;

    await getByAppId(id)
        .then(application => application ? res.status(200).json(application) : res.status(404).json({ message: "Application Not Found."}))
        .catch((error) => {
            res.status(500).json({ name: error.name, message: error.message, errors: error.errors });
        });

}
