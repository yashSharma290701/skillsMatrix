import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from '../HomePage/Navbar';
import SideBar from '../HomePage/SideBar';
import { useState } from 'react';
export default function Skills() {
    const [data, setdata] = useState({
        employeeID:"",
        skills:"",
        rating:0
        
    })

    const handleEvent = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log(data)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/Skills',
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data })
          })
        console.log(response)
        if (response.status === 500) {
          alert('Skills not saved')
        }
        if(response.status==204){
            alert("Skills Added")
        }
      }
    return (
        <div className="homepage">
            <Navbar />
            <div className="container-fluid text-center sidebar">
                <div className="row">
                    <div className="col-2 p-0">
                        <SideBar />
                    </div>
                    <div className="col-10 skillsDetails">
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <TextField sx={{ width: '100%', maxWidth: 500 }} label="EmployeeId" name="employeeID" variant="filled" className="mb-3 mt-3  empID" onChange={handleEvent} InputLabelProps={{ style: { color: 'brown' } } } />
                            <Box sx={{ width: '100%', maxWidth: 500 }} className="mb-3 mt-2">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Skills</InputLabel>
                                    <Select
                                        className='skills'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Skills"
                                        name="skills"
                                        onChange={handleEvent}
                                    >
                                        <MenuItem value="HTML" name="skills">HTML</MenuItem>
                                        <MenuItem value="CSS" name="skills">CSS</MenuItem>
                                        <MenuItem value="JavaScript" name="skills">JavaScript</MenuItem>
                                        <MenuItem value="React" name="skills">React</MenuItem>
                                        <MenuItem value="Angular" name="skills">Angular</MenuItem>
                                        <MenuItem value="Node.js" name="skills">Node.js</MenuItem>
                                        <MenuItem value="Express.js" name="skills">Express.js</MenuItem>
                                        <MenuItem value="MongoDB" name="skills">MongoDB</MenuItem>
                                        <MenuItem value="SQL" name="skills">SQL</MenuItem>
                                        <MenuItem value="Python" name="skills">Python</MenuItem>
                                        <MenuItem value="Java" name="skills">Java</MenuItem>
                                        <MenuItem value="C++" name="skills">C++</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box sx={{ width: '100%', maxWidth: 500 }} className="mb-3 mt-2">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Rating</InputLabel>
                                    <Select
                                        className='skills'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Rating"
                                        name="rating"
                                        onChange={handleEvent}
                                    >
                                        <MenuItem value={1} name="rating">1</MenuItem>
                                        <MenuItem value={2} name="rating">2</MenuItem>
                                        <MenuItem value={3} name="rating">3</MenuItem>
                                        <MenuItem value={4} name="rating">4</MenuItem>
                                        <MenuItem value={5} name="rating">5</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>

                            <Button variant="outlined" onClick={handleSubmit} style={{ color: 'brown' }}>Submit</Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
}
