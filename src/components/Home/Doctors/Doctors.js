import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctors, setDoctors]=useState([])
    useEffect(()=>{
        fetch('https://arcane-fjord-93576.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(result=>{
            setDoctors(result)
        })
    },[])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(doctor=> <Doctor doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;