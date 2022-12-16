
export const getOneByAppId = async ( appId, model ) => await model.findOne({ appId });

export const createOrUpdate = async ( data, model ) => {
    
    const { appId } = data;

    const current = await model.findOne({ appId });

    if (current) {
        return await model.findOneAndUpdate(
            { appId }, 
            {
                ...data,
                modifiedDate: new Date().toISOString()
            }, 
            { new: true }
        );
    } else {
        const newData = new model({ 
            ...data,
            modifiedDate: new Date().toISOString()
        });
        return await newData.save();
    }

    // Create LW History if the data note has value and if it is not same as the existing
    if (data.notes && data.notes !== current.notes){
        // Call MSSQL Stored Procedure
    }
}

export const remove = async ( appId, model ) => await model.findOneAndRemove({ appId });