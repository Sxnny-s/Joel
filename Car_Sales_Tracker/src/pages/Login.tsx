import React from 'react'
import {Link} from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


const Login = () => {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gray-100"'>
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent>
            <p>Click below to return to the landing page.</p>
            <Link to="/">Go to Landing Page</Link>
          </CardContent>
        </Card>
      </div>
    
    </>
  )
}

export default Login