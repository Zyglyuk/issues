import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBarHeader = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Изучение React</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/trello">Проекты на курсе</Nav.Link>
                        <Nav.Link href="/course">Материалы курса</Nav.Link>
                        <Nav.Link href="/issues">Git Hub Issues</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBarHeader;
