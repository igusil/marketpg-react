import React, {Component, Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch, redirect} from 'react-router-dom'
import { CircularProgress } from '@mui/material'

const PrivateRoutes = ({ component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={props => (
            (localStorage.getItem('acces_token')) ?
                <Component {...props}/>
            :
                <redirect to="/login"/>
        )}
    />
)

const Routes = () => (
    <Router>
        <Suspense fallback={<div className='d-flex justify-content-center mt-5 pt-5'><CircularProgress /></div>}>
            <Switch>
                <PrivateRoutes path='/transactions/:id' component={ () => (<h1>Transações id</h1>)} />
                <PrivateRoutes path='/transactions' component={ () => (<h1>Transações</h1>)} />
                <Route path='/login' component={ () => (<h1>Pagina Login</h1>)} />
                <Route exact path='/' component={ () => (<h1>Pagina de pagamento</h1>)} />
            </Switch>
        </Suspense>
    </Router>
)