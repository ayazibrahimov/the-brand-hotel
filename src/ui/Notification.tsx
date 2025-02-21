import React from 'react'
import  { Toaster } from 'react-hot-toast';

const Notification = () => {
  return <Toaster position='top-right' gutter={12} containerStyle={{margin:'8px'}}
  toastOptions={{
   success:{
     duration:1000
   },
   error:{
     duration:1000
   },
   style:{
     fontSize:"16px",
     maxWidth:"500px",
     padding:'16px, 24px',
     backgroundColor:"var(--color-grey-0)",
     color:"var(--color-grey-700)"
   }
  }}
 />
}

export default Notification