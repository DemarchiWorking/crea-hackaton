/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import ContentSection from '../components/ContentSection';
import Header from '../components/Header';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div style={{height:'13vh'}}>
          <Header />
        </div>
        <Container fluid style={{height:'93.5vh'}}>
          <Row>
            <div className="bg-warning sidebar-shadow" style={{width:'20vw' ,backgroundColor: 'rgba(0, 0, 128, 0.8)', color: 'black', height: 'calc(100vh - 60px)' }}>
              <Sidebar handlePageChange={handlePageChange} />
            </div>
            <Col md={7} >
              <ContentSection currentPage={currentPage} />
            </Col>
          </Row>
        </Container>
    </div>
    </>
  );
};

export default Dashboard;
