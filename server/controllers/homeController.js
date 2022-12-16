import { getUserByUserName } from "../services/userService.js";

export const _getUserByUserName = async (req, res) => {
    const { username } = req.params;

    await getUserByUserName(username)
        .then((output) => {
            output ? res.status(200).json(output) : res.status(404).json({ message: "User Not Found."})
        })
        .catch((error) => {
            res.status(500).json({ name: error.name, message: error.message, errors: error.errors });
        });
    }