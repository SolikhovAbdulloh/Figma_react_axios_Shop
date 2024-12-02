import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { root } from './root'
import { Shopcontext} from './context'

createRoot(document.getElementById('root')).render(
  <Shopcontext>
    <RouterProvider router={root}/>
  </Shopcontext>,
)
