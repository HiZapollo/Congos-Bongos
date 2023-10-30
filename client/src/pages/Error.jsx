//Construct a Not Found page

import {useLocation} from 'react-router-dom'

function NotFound() {
    const location = useLocation()
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for doesn't exist.</p>
            <p>
                <a href={location.pathname}>Go to Home</a>
            </p>
        </div>
    )
}

export default NotFound;