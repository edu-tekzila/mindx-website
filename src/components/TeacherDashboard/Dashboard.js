import './Dashboard.css';
import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Table } from 'react-bootstrap';

function Dashboard() {
    return (
        <div className="container">
            <section className="one">
              <div className="TeacherDashboard__heading_row">
                <div className="TeacherDashboard__title">Shortcuts</div>
                <div className="TeacherDashboard__line" />
              </div>
              <div>
                <Row>
                  {/* <Link to="/assignment" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">My Assignments</div></Link> */}
                  <Col lg={3} md={6} sm={12} xs={12}>
                    <Link to="/teacher/classes">
                      <button>My Classes</button>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <button>Time Table</button>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <button>Notices</button>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <button>My Profile</button>
                  </Col>
                </Row>
              </div>
            </section>
            <section className="two">
              <Row>
                <Col lg={4} md={5} sm={12} ><h3 className="TeacherDashboard__title">My Subjects</h3></Col>
                <Col lg={8} md={7}><div className="hrline"></div></Col>
              </Row>
              <div className="mySubject">
                <Row>
                  <Col lg={3} md={6} sm={12}>
                    <div  className="physics">
                      <img src={require('../../assets/images/physics 1.png').default}  alt="arrow"/>
                      <p>Physics</p>
                      <div className="horizon"></div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <Link to="/test" >
                     <button>Test</button>
                    </Link> 
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <Link to="/teacher/assignments">
                      <button>Assignment</button>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <button>Notes</button>
                  </Col>
                </Row>
              </div>
            </section>
            <section className="three">
              <Row>
                <Col lg={4} md={5} sm={12}><h3 className="TeacherDashboard__title">Tests History</h3></Col>
                <Col lg={8} md={7}><div className="hrline"></div></Col>
              </Row>
              <div className="testsHistory">
            

                 <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Duration</th>
                      <th>Class Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Chapter 1</td>
                      <td>15/01/2021</td>
                      <td>1 hrs</td>
                      <td>12th A</td>
                      <td>View</td>
                      
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Chapter 2</td>
                      <td>14/01/2021</td>
                      <td>1 hrs</td>
                      <td>12th A</td>
                      <td>View</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Chapter 3</td>
                      <td>13/01/2021</td>
                      <td>1 hrs</td>
                      <td>12th A</td>
                      <td>View</td>
                    </tr>
                  </tbody>
                </Table>

                 
              
                <div className="btns">
                  <button>Download</button>
                  <button>View More</button>
                </div>

              </div> 
              
            </section>
        </div>
    )
}

export default Dashboard;