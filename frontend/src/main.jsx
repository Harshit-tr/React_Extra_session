import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyFeature from './funct_excer/myfeature'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFeature/>
  </StrictMode>
)