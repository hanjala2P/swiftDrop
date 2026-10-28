
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx'

const queryClient=new QueryClient()

createRoot(document.getElementById('root')).render(
 
<QueryClientProvider client={queryClient}>
     <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
</QueryClientProvider>

)
