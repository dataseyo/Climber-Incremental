import React from 'react'
import {BsPlusSquare} from 'react-icons/bs'

import './styles.css'
import Avatar from '../Avatar/Avatar'
import { useAppSelector } from '../../state/storeHooks'

type Props = {}

const Nav = (props: Props) => {
    const { name } = useAppSelector(state => state.user)
    
    return (
        <header className="nav__container">
            {name ?
                <>
                <div className="nav-climber">
                    <div className="nav-avatar">
                        <Avatar/>
                        <p className="nav-name">Zach</p>
                    </div>
                    <div className="nav-stats">
                        <p>Level: 10</p>
                        <p>Climbs: 201</p>
                        <p>XP: 10/200</p>
                    </div>    
                </div>
                <div className="nav-menu">
                    <BsPlusSquare className="nav-menu-add"/>
                    <p>add <br/> climb</p>
                </div> 
                </>
                : 
                <>
                <h1>Logo</h1>
                </>
            }
        </header>
    )
}

export default Nav