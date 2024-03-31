import React, {useState} from 'react'
import CartCard from './components/CartCard'
import UserContextComponent from './utils/UserContexComponent'

export const UserContext = React.createContext()

function App() {

  return <>
    <UserContextComponent>
      <div className="container my-5">
        <CartCard/>
      </div>
    </UserContextComponent>
  </>
}

export default App