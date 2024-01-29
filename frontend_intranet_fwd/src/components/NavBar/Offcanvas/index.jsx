import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from  "react-router-dom";
function MoreActions() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                ||||
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h2>FWD</h2>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ol className="content d-flex flex-wrap justify-content-center">
                        <li>
                            <Link to="/admonitions" className="links mt-5 ms-5">
                                <h2>Admontions</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/justifications" className="links mt-5 ms-5">
                                <h2>Justifications</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/announcements" className="links mt-5 ms-5">
                                <h2>Announcements</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/DocumentsStorage" className="links mt-5 ms-5 mr-5">
                                <h2>Documents</h2>
                            </Link>
                        </li>
                    </ol>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MoreActions;



