import React from 'react'
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../state/storeHooks'

type Props = {
    children: JSX.Element
}

const ProtectedRoute = ({children}: Props): JSX.Element => {
    const { name } = useAppSelector(state => state.user)

    if (!name) {
        return (
            <Navigate to="/auth" replace></Navigate>
        )
    }
    
    return children
}

export default ProtectedRoute