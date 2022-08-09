import React from 'react'
import { Form } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';




const AddDistrict = () => {

    const { id } = useParams()

    const [district, setDistrict] = useState("")
    // console.log(district);

    const handleChange = (e) => {
        setDistrict(e.target.value)
    }

    const LoadData = useSelector((state) => state.stateReducer.states)

    const FilterData = LoadData.filter((element) => element.id == id)
    const FilterData1 = LoadData.find((element) => element.id == id)
 
    const [eData, setEData] = useState(FilterData1)
    console.log(eData, "-->edat");

    const [data, setData] = useState(FilterData)
    // console.log(FilterData, "--->FilterData");

    const sendDistrict = (e) => {
        e.preventDefault()

        const checkdistrict = eData.district.find(
            (element) => element.toLowerCase() === district.toLowerCase()
          )
          if (checkdistrict) { 
            return toast.error("Please Choose Differant district !", {
              position: toast.POSITION.TOP_LEFT
            });
          }

          if (!district) {
            return toast.warning("Please fill this field !", {
              position: toast.POSITION.TOP_LEFT
            });
          }

        data.map((element, index) =>
            data[index].district.push(
                ...data.district || [],
                district
            )
        )
        // console.log(data)
        setDistrict("")
    }
    return (
        <div className='d-flex justify-content-center'>
            <Form className='mt-5'>
                <div className="input-area">
                    <input type="text" name="state" id="state" value={district} placeholder="Enter Your State" autoComplete="off" onChange={(e) => handleChange(e)} />
                </div>
                <div className='mt-3'>
                    <input type="submit" value="Submit" className='btn btn-dark' onClick={(e) => sendDistrict(e)} />
                    <Link to={"/"} className="btn btn-success ms-3">Home</Link>
                </div>

                <div className='mt-3'>
                    <ul>
                        {
                            data.map((element) =>
                                element.district.map((data, index) =>
                                    <div key={index}>
                                        <li>{data}</li>
                                    </div>
                                ))
                        }
                    </ul>
                </div>
            </Form>

      <ToastContainer/>

        </div>
    )
}

export default AddDistrict
