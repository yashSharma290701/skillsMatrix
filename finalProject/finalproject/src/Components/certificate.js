import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from '../HomePage/Navbar';
import SideBar from '../HomePage/SideBar';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
function CertificateUser() {
  const [data, setdata] = useState({
    EmployeeID: '',
    CertificateID: '',
    CourseName: '',
    StartingDate: '',
    EndingDate: '',
    OrganizationName:''
  })
const navigate = useNavigate()
  const handleEvent = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log(data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5001/certificateDetails',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data })
      })
    console.log(response)
    if(response.status==203){
    alert('Certificate Added')
    navigate('/Home')
  }
    if (response.status === 500) {
      alert('Something went wrong')
    }
  }

  return (
    <div  >
      <Navbar />
      <div class="container-fluid text-center sidebar">
        <div class="row sidebar">
          <div class="col-2 p-0 ">
            <SideBar />
          </div>
          <div class="col-10 userDetails ">
            <MDBContainer fluid className=''>
              <MDBRow className='justify-content-center align-items-center m-5 '>
                <MDBCard className='p-0'>
                  <MDBCardBody className='px-4 certificateDetails'>
                    <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Certificate</h3>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 certificateInput' label='EmployeeID' size='lg' id='form1' type='text' 
                        name='EmployeeID' onChange={handleEvent}
                        />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 certificateInput' label='CertificateID' size='lg' id='form2' type='text'
                        name='CertificateID' onChange={handleEvent} />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='12'>
                        <MDBInput wrapperClass='mb-4 certificateInput' label='CourseName' size='lg' id='form3' type='text' name ="CourseName"
                        onChange={handleEvent} />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 certificateInput' label='Starting Date' size='lg' id='form4' type='Date'
                        name='StartingDate'
                        onChange={handleEvent}
                        />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 certificateInput' label='Ending Date' size='lg' id='form5' type='Date'
                        name='EndingDate' 
                        onChange={handleEvent}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='12'>
                        <MDBInput wrapperClass='mb-4 certificateInput' label='OrganizationName' size='lg' id='form4' type='text'
                        name='OrganizationName'
                        onChange={handleEvent}
                        />
                      </MDBCol>
                    </MDBRow>
                    <button className='mb-4 btn-primary' size='lg' onClick={handleSubmit} >Add Certificate</button>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateUser;

