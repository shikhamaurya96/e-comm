import React from 'react'

const Signin = () => {
  return (
    <div>
        <form>
            <div>
            <label htmlFor='fname'>First Name</label>
            <input id='fname' type='text' placeholder='First Name'/>
            </div>
            <div>
            <label htmlFor='lname'>Last Name</label>
            <input id='lname' type='text' placeholder='Last Name'/> 
            </div>
        </form>
    </div>
  )
}

export default Signin