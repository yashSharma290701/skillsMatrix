const certificateData = require('../model/certificates');

exports.userCertificate = async(req,res)=>{
try{
const {  EmployeeID,CertificateID,CourseName,StartingDate,EndingDate,OrganizationName} = req.body.data
console.log({EmployeeID,
    CertificateID,
    CourseName,StartingDate
    ,EndingDate,
    OrganizationName})

const newCertificate = new certificateData({
    userId:EmployeeID,
    certificateId:CertificateID,
    courseName:CourseName,
    IssuingDate:StartingDate,
    EndingDate:EndingDate,
    OrganizationName:OrganizationName
});

await newCertificate.save()
res.status(200).
send('Certificate Added')
}
catch(err){
    console.error('Error in sending Certifiate', error);
    res.status(500).send('Internal Server Error');
}
};