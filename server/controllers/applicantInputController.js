// import express from 'express';
// import mongoose from 'mongoose';

import { getListByAppId, createOrUpdate, remove } from '../services/applicantInputService.js';

/*
* GET single applicanInput by appId
* /api/applicantInput/:appId
*/
export const _getListByAppId = async(req, res) => {
    const { appId } = req.params;
    
    await getListByAppId(appId)
        .then((output) => {
            output.length > 0 ? res.status(200).json(output) : res.status(404).json({ message: `No Applicant Input for deal ${appId}.`})
        })
        .catch((error) => {
            res.status(500).json({ name: error.name, message: error.message, errors: error.errors });
        });
}

/*
* POST create or update single applicantTabInput
* /api/applicantInput/
*/
export const _createOrUpdate = async (req, res) => {

    const data = req.body;

    try {
        const output = await createOrUpdate(data);
        res.status(200).json(output);
    } catch (error) {
        res.status(500).json({ name: error.name, message: error.message, errors: error.errors });
    }

}

// /*
// * PUT update single applicantTabInput by appId
// * /api/applicantTabInput/:appId
// */
// export const _update = async (req, res) => {
//     const { applicantId } = req.params;
//     const updatedApplicantInput = req.body;

//     await update(applicantId, updatedApplicantInput)
//         .then((output) => {
//             output ? res.status(200).json(output) : res.status(404).json({ message: `No Applicant Tab Input for deal ${appId}.`})
//         })
//         .catch((error) => {
//             res.status(500).json({ name: error.name, message: error.message, errors: error.errors });
//         });

// }

/*
* DELETE delete single applicantTabInput by appId
* /api/applicantTabInput/:appId
*/
export const _remove = async (req, res) => {
    const { applicantId } = req.params;

    await remove(applicantId)
        .then((output) => {            
            output ? res.json({ message: `Applicant Input with id ${applicantId} deleted successfully.` }) : res.status(404).json({ message: `No Applicant Input for applicantId ${applicantId}.`})
        })
        .catch((error) => res.status(500).json({ name: error.name, message: error.message, errors: error.errors }));
    
}