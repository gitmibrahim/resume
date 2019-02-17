import React, { useState } from 'react'
import { render } from 'react-dom';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import '../assets/public/fonts.css'
import './index.css'
import './print.css'
import '../assets/styles/railscasts.css'
import Tech from './mainComponents/tech/tech.jsx'
import NonTech from './mainComponents/nonTech/nonTech.jsx'



const App = () => {
    const [hash, setHash] = useState(location.hash)
    const history = createBrowserHistory();

    history.listen(() => {
        setHash(history.location.hash)
    })

    return (
        <Router>
            <div id="app">
                <nav id="techNav" className="hiddenOnPrint">
                    <h1>{hash === '#/' ? 'you don\'t understand this?' : 'are you a techie?'}</h1>
                    <div id="switch">
                        <p>{hash === '#/' ? 'don\'t worry, you could ' : 'you have another view, '}switch between: </p>
                        <Link className={hash === '#/' ? 'active' : null} to="/">tech</Link><span> and </span>
                        <Link className={hash === '#/' ? null : 'active'} to="/for-the-non-technicals">non-tech</Link><span> views.</span>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Tech} />
                    <Route exact path="/for-the-non-technicals" component={NonTech} />
                </Switch>
            </div>
        </Router>

    )
}

render((
        <App />
    ),
    document.getElementById('root')
);