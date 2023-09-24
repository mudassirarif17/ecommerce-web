import React from 'react'
import MyContext from './myContext'

const myState = (props) => {
    const state = {
        name : "Mudassir",
        rollno : 15,
    }

    const color = "red";
  return (
    <MyContext.Provider value={{state , color}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default myState
