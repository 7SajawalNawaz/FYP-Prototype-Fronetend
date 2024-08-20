import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home">
        

        {/* <div className="imgh1">
          <img src="Quality.png" alt="qec" />
        </div>

        <div className="paragraph1">
          <p>
            Establishment of quality assurance system in higher education is a
            global concern now. There is a growing demand for Quality Assurance
            (QA) mechanisms at national, regional and global levels. Over the
            years, it is observed that there is an increase in the number of HE
            institutions and increased involvement of external stakeholders
            through changes in governance structures. The higher education
            institutions around the world have been introduced to quality
            assurance system internally with formal institutional approach and
            documentation. This has been done with the establishment of quality
            assurance agencies like accreditation bodies at the national level.
            The integration of Quality Assurance principles into higher
            education is also a matter of concern in Pakistan.
          </p>
        </div> */}

<div className="alumni-welcome-container">
      <img src='qec.jpg' alt="qec" className="alumni-image"/>
      <div className="text-overlay">
        <h1>Welcome to AUST Quality Enhancment Cell !!</h1>
        <p>
        Establishment of quality assurance system in higher education is a
            global concern now. There is a growing demand for Quality Assurance
            (QA) mechanisms at national, regional and global levels.
        </p>
      </div>
    </div>

        <div className="headings1">
          <div className="h-p1">
            <h2>VISION</h2>
            <p>
              To be recognized as the leading educational institution,
              instilling and pursuing the highest quality assurance practices,
              both nationally and internationally.
            </p>
          </div>

          <div className="h-p2">
            <h2>MISSION</h2>
            <p>
              Incorporating continuous quilty improvement in teaching, student
              learning, and administrative support mechanism.
            </p>
          </div>

          <div className="h-p3">
            <h2>AIM</h2>
            <tr className="t1">
              <td>Teacher Empowerment</td>
              <td>Student Centricty</td>
              <td>Programmatic Improvements</td>
            </tr>

            <tr className="t1">
              <td>Faculty Development & Capacity Building</td>
              <td>Student Counseling</td>
              <td>PEOs defination by involving stake holder</td>
            </tr>
          </div>

          <div className="h-p4">
            <h2>STRATEGY</h2>
            <tr className="t1">
              <td>Faculty Course Review Reports</td>
              <td>Student Course Feedback</td>
              <td>PLO’s Assessment</td>
            </tr>

            <tr className="t1">
              <td>Faculty Satisfaction Survey</td>
              <td>Research, Design & Innovation</td>
              <td>CLO’s Assessment</td>
            </tr>
            <tr className="t1">
              <td>Teaching and research Incentive</td>
              <td>Employer’s Survey & Alumni Survey</td>
              <td>CQI Process</td>
            </tr>

            <tr className="t1">
              <td>Faculty Exit Survey</td>
              <td>Student Exit Survey</td>
              <td>New Program Approvals/Assessment</td>
            </tr>
            
          </div>

          <div className="h-p5">
            <h2>VALUES</h2>
            <div className="items">
              <ul>
                <li>Teacher Efficency</li>
                <li>Student learning & Support</li>
                <li>Professional & Caring administration</li>
                <li>Transparency in operations</li>
                <li>Individual, departmental, and organizational accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
