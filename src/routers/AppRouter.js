import React from 'react';
import {BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensepage from '../components/AddExpensepage';
import EditExpensepage from '../components/EditExpensepage';
import HelpExpensepage from '../components/HelpExpensepage';
import Notfoundpage from '../components/Notfoundpage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensepage}/>
                <Route path="/edit/:id" component={EditExpensepage}/>
                <Route path="/help" component={HelpExpensepage}/>
                <Route component={Notfoundpage} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;
