// import express from 'express';
// import mongoose from 'mongoose';

import LivingExpenseTabInput from '../models/mongodb/livingExpenseTabInput.js';
import { getOneByAppId, createOrUpdate, remove } from '../services/sharedTabInputService.js';

/*
* GET singlerecord  by appId
* /api/tabInputName/:appId
*/
export const _getOneByAppId = async(req, res) => {
    const { appId } = req.params;
    
    await getOneByAppId(appId, LivingExpenseTabInput)
        .then((output) => {
            output ? res.status(200).json(output) : res.status(404).json({ message: `Record not found for deal ${appId}.`})
        })
        .catch((error) => {
            res.status(500).json({ name: error.name, message: error.message, errors: error.errors });
        });
}

/*
* POST insert or update single record
* /api/tabInputName/
*/
export const _createOrUpdate = async (req, res) => {
    const data = req.body;

    try {
        const output = await createOrUpdate(data, LivingExpenseTabInput);
        res.status(200).json(output);
    } catch (error) {
        res.status(409).json({ name: error.name, message: error.message, errors: error.errors });
    }

}

/*
* DELETE delete single record by appId
* /api/tabInputName/:appId
*/
export const _remove = async (req, res) => {
    const { appId } = req.params;   

    await remove(appId, LivingExpenseTabInput)
        .then((output) => {            
            output ? res.json({ message: `${appId} deleted successfully.` }) : res.status(404).json({ message: `Record not found for deal ${appId}.`})
        })
        .catch((error) => res.status(500).json({ name: error.name, message: error.message, errors: error.errors }));
    
}