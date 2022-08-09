import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DELETE } from '../redux/action/action'

const Showtable = () => {
    const getData = useSelector((state) => state.stateReducer.states)

    const dispatch = useDispatch()

    const [data, setData] = useState([])

    useEffect(() => {
        setData(getData)
    }, [])

    const Delete = (id) => {
        dispatch(DELETE(id))
    }

    return (
        <div>
            <table className="table w-100 mt-4">
                <thead>
                    <tr className='bg-dark text-light'>
                        <th>ID</th>
                        <th>State</th>
                        <th>Add District</th>
                        <th>Districts</th>
                        <th>Delete Data</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {
                        getData.map((element, index) =>
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{element.state}</td>
                                <td><Link to={`/district/${element.id}`} className="AddDistrict btn btn-secondary" >Add District</Link></td>
                                <td>{element.district.map((element, index) => <ul key={index} className="ShowList">
                                    <li>{element}</li>
                                </ul>)}
                                </td>
                                <td><button type="delete" className='btn btn-danger' onClick={() => Delete(element.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Showtable
