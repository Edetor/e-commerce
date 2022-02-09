function Footer () {
    return <footer className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">About project:</h5>
                    <p className="grey-text text-lighten-4">
                        Simple project to practice and improve knowledge of functional React-components
                    </p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Using:</h5>
                    <ul>
                        <li>
                            <a className="blue-text text-lighten-3" href="https://fortniteapi.io/">fortniteapi.io</a>
                        </li>
                        <li>
                            <a className="blue-text text-lighten-3" href="https://materializecss.com/">materializecss.com</a>
                        </li>
                        <li>
                            <a className="blue-text text-lighten-3" href="https://ru.reactjs.org/docs/hooks-reference.html">React Hooks</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                © 2022 Copyright Text
                <a href="https://github.com/Edetor/e-commerce" target='_blank' rel='noreferrer'>Repo</a>
            </div>
        </div>
    </footer>
}

export {Footer}