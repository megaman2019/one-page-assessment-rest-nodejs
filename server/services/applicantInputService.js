import ApplicantInput from "../models/mongodb/applicantInput.js";

export const getListByAppId = async ( appId ) => await ApplicantInput.find({ appId });

export const createOrUpdate = async ( applicantInput ) => {
    
    const { applicantId, matrixIdPass, pepSanctionMatch, modifiedBy } = applicantInput;

    const current = await ApplicantInput.findOne({ applicantId });
    
    if (current) {
        return await ApplicantInput.findOneAndUpdate(
            { applicantId }, 
            {
                matrixIdPass,
                pepSanctionMatch,
                modifiedBy,
                modifiedDate: new Date().toISOString()
            }, 
            { new: true }
        );
    } else {
        const newApplicantInput = new ApplicantInput({ 
            ...applicantInput, 
            modifiedDate: new Date().toISOString()
        });
        return await newApplicantInput.save();
    }
    
}
 export const remove = async ( applicantId ) => await ApplicantInput.findOneAndRemove({ applicantId });