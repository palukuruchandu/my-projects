import React, { useState } from 'react'

const Tracker = () => {
    const [track,setTrack] = useState([])
    const [totalamount,setTotalamount] = useState(0)
    const [inputvalue,setInputvalue] = useState(0)
    const total = parseInt(totalamount)
    const value = parseInt(inputvalue)
    const date = new Date().toLocaleString()

    const updateHandler = (event)=>{
        setInputvalue(event.target.value)
    }
    const incHandler = ()=>{
        setTotalamount(total+value)
        setInputvalue("")
        setTrack([...track,
        {
            tDate:date,
            tTotal:total,
            tAddedamount:value,
            tRemovedamount:"-",
            tBalanceamount:total+value
        }
        ])
    }
    const decHandler = ()=>{
        setTotalamount(total-value)
        setInputvalue("")
        setTrack([...track,
        {
            tDate:date,
            tTotal:total,
            tAddedamount:"-",
            tRemovedamount:value,
            tBalanceamount:total-value
        }
        ])
    }
    const submitHandler = (event)=>{
        event.preventDefault()
    }
  return (
    <>
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <a href="/home" className='navbar-brand'>OLA TRACKER</a>
        </nav>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <h1 className="text-center bg-dark text-white">EXPENSE TRACKER</h1>
                        <form className='border' onSubmit={submitHandler}>
                            <h3 className='text-center'>BALANCE :</h3>
                            <div>   
                                <input type="number" placeholder='ENTER AMOUNT' className='form-control w-50 m-auto' onChange={updateHandler} value={inputvalue}/>
                            </div>
                            <div className="mb-3 text-center mt-3">
                                <input type="submit" value="ADD" className='btn-success mr-5' onClick={incHandler}/>
                                <input type="submit" value="REMOVE" className='btn-warning' onClick={decHandler}/>
                            </div>
                        </form>
                        {
                        (Object.keys(track).length > 0) ?
                            <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <table className='table table-hover'>
                                        <thead className='bg-dark text-white'>
                                            <tr>
                                                <th>ID</th>
                                                <th>DATE</th>
                                                <th>TOTAL AMOUNT</th>
                                                <th>ADDED AMOUNT</th>
                                                <th>REMOVED AMOUNT</th>
                                                <th>BALANCE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                track.map((event,index)=>{
                                                    return<tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{event.tDate}</td>
                                                        <td>{event.tTotal}</td>
                                                        <td>{event.tAddedamount}</td>
                                                        <td>{event.tRemovedamount}</td>
                                                        <td>{event.tBalanceamount}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        : <center>
                            "CHANDU"
                        </center>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tracker