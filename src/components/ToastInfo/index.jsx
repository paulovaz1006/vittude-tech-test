import { useEffect, useState } from 'react'
import './style.scss' 
import { ToastContainer } from 'react-toastify'

const ToastInfo = ({text, showToast}) => {
   return (
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}


export default ToastInfo