import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import './ErrorPage.scss'

function ErrorPage() {

    const error = useRouteError()
    const { status, statusText, data } = error
    console.log(error)

    return (
        <div className='errorPage'>
            <div className='backButton'>
                <Link to={'/'}>Go Back to home Page</Link>
            </div>
            <h1>Oops !</h1>
            <i>{status} : {statusText}</i>
            <div>{data}</div>


        </div>
    )
}

export default ErrorPage