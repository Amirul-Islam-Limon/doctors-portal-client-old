import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo]=useState({})
    const [file, setFile]=useState(null)

    const handleBlur=(e)=>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo);
    }

    const handleChange=(e)=>{
        const newFile=e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit=()=>{

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
      
        fetch('https://arcane-fjord-93576.herokuapp.com/addDoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }
    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5 pr-5">
                <h5 className="text-brand">Add a doctor</h5>
                
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" onBlur={handleBlur} name="email" class="form-control" id="exampleInputEmail1"/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input type="text" onBlur={handleBlur} name="name" class="form-control" id="exampleInputName"/>
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Upload Image</label>
                        <input onChange={handleChange} type="file" class="form-control" id="exampleInputName"/>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        </section>
    );
};

export default AddDoctor;