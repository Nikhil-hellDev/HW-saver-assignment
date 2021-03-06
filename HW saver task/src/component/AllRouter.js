import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import OnePage from './user/OnePage'
import Homepage from './user/Homepage'
import UserData from './user/UserData'

export default function AllRouter(props){
    return(
        <Router>

            <div>
                <Route path='/' exact strict component={OnePage} history={props.history}/>
<Route path='/Homepage' exact strict component={Homepage} history={props.history}/> 
<Route path='/Home/UserData' exact strict component={UserData} history={props.history}/>         
            </div>
        </Router>
    )
}