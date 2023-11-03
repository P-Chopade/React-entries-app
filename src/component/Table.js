import React, { useState } from 'react'
import './table.css'

export default function Table () {
  let [array, setArray] = useState([])
  let [ipdata, setIpdata] = useState({ name: '', number: '' })
  let [index, setIndex] = useState()
  let [reflect, setreflect] = useState(false)
  let { name, number } = ipdata

  function data (e) {
    setIpdata({ ...ipdata, [e.target.name]: e.target.value })
  }

  function addinputdata () {
    if (name === '' && number === '') {
      alert('Enter Name and Contact no ')
    } else {
      setArray([...array, { name, number }])
      setIpdata({ name: '', number: '' })
    }
  }

  function deletedata (i) {
    console.log(i, 'this index row want to be delete')
    let total = [...array]
    total.splice(i, 1)
    setArray(total)
  }

  function updatedata (i) {
    let { name, number } = array[i]
    setIpdata({ name, number })
    setreflect(true)
    setIndex(i)
  }

  function updateinfo () {
    let total = [...array]
    total.splice(index, 1, { name, number })
    setArray(total)
    setreflect(false)
    setIpdata({ name: '', number: '' })
  }
  return (
    <div>
       
        <div className='inputbox'>
        <h3>Entry Details</h3>
      <input
        type='text'
        value={ipdata.name || ''}
        name='name'
        autoComplete='off'
        placeholder='Enter Name'
        onChange={data}
      />
      <br/>
      <input
        type='Contact no'
        value={ipdata.number || ''}
        name='number'
        placeholder='Contact Number'
        onChange={data}
      />
        <br/>
      <button onClick={!reflect ? addinputdata : updateinfo}>
        {!reflect ? `Add Entry` : `Update data`}
      </button>
      </div>
      <br />

      <table border='1'>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {array &&
            array.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.number}</td>
                  <td>
                    <button onClick={() => updatedata(i)}>update</button>
                  </td>
                  <td>
                    <button onClick={() => deletedata(i)}>Delete</button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}