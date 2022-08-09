import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../redux/action/action';
import { Form } from 'react-bootstrap'
import './style.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const State = () => {
  const dispatch = useDispatch()

  const Stated = {
    id: "",
    state: "",
    district: []
  }

  const getData = useSelector((state) => state.stateReducer.states)
  // console.log({getData});

  const [data, setData] = useState(Stated)
  // console.log(data);

  const { state } = data

  const handleChange = (e) => {

    setData({ ...data, [e.target.name]: e.target.value })

  }

  const RandomID = Math.random() * (100 - 1) + 1;
  const IntID = parseInt(RandomID)

  const sendData = (e) => {
    e.preventDefault()

    const checkstate = getData.find(
      (element) => element.state.toLowerCase() === state.toLowerCase()
    )

    if (checkstate) {
      return toast.error("Please Choose Differant State !", {
        position: toast.POSITION.TOP_LEFT
      });
    }

    if (!state) {
      return toast.warning("Please fill this field !", {
        position: toast.POSITION.TOP_LEFT
      });
    }
    

    dispatch(ADD({ ...data, id: IntID }));
  }


  return (
    <div>
      <Form className='mt-5'>
        <div className="input-area">
          <input type="text" name="state" id="state" value={state} placeholder="Enter Your State" autoComplete="off" onChange={(e) => handleChange(e)} />
        </div>
        <div className='mt-3'>
          <input className="btn btn-dark" type="submit" value="Submit" onClick={(e) => sendData(e)} />
        </div>
      </Form>

      <ToastContainer/>

    </div>
  )
}

export default State
