import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
       <h1 id="heading">AVS Engineering College</h1>
       <ul>
                <li><a href="about.js">About</a></li>
                <li><a href=" ">Courses</a></li>
                <li><a href=" ">Skill Development Courses</a></li>
                <li><a href=" ">Placements</a></li>
      </ul>
            <div class="logo">
             <img src="images/avslogo2.jpg"></img>
           </div>
           <div class="mission">
           <h1>About College</h1> 
           <p >AVS Engineering College is a prominent educational institution established in the year 2008. It is located in the heart of Salem city. With more than two decades of experience, AVSEC aims to impart quality education in the fields of Engineering, Technology and Business Administration. Apart from education, the college focuses on creating Responsible Engineers in order to serve the society. It offers 8 UG courses & 8 PG courses.
                   Well-experienced Faculty Team, State- of- Art- Laboratories, Hi-Tech Infrastructure, Parental Guidance, Advanced Teaching- Learning Process led by Internal Quality Assurance Cell, Well- equipped Gym, Digitalized Library, Spacious classrooms and Seminar halls, Separate blocks for Boys Hostel and Girls Hostel and recognition of Sports talent pave way to AVSEC attaining good reputation in Salem District. Placement records, MOU's,Centre of Excellence, Clubs and Cells add more feathers to the cap of the college.
           </p>
           <h1>Institute Vision</h1>
           <p>
            To be a premier institution committed to fostering excellence in education, research, and innovation, producing globally competent engineers who contribute to societal development..</p>
            <h1>Mission</h1>
            <ol id="mission_list">
              <li>To provide outcome and value based technical education </li>
              <li>To enable students to get industry ready and fulfil their career aspirations</li>
              <li>To facilitate innovations and nurture ethical leadership in students to gain global competencies.</li>
              <li>To empower students to become responsible citizens so as to create positive impact on society.</li>
            </ol>
           </div>
           <div class="courses">
            <h1>Courses</h1>
            <table border={1} align='center'>
              <tr><th>Course</th><th>Branches</th></tr>
              <tr><td>B.E</td><td>1.computer science<br></br>2.Mechanical<br></br>3.Civil<br></br>4.Electrical and Electronics<br></br>5.Electronic and Communication</td></tr>
              <tr><td>M.E</td><td>1.Computer science<br></br>2.Structural Engineering</td></tr>
              <tr><td>B.Tech</td><td>1.AI & DS<br></br>2.Information Technology</td></tr>
            </table>
           </div>
           <div class="skill">
             <h1>Skill development courses</h1>
             <div class="skill_img">
              <img src="images/skill1.jpg"></img>
              <img src="images/skill2.jpg"></img>
              <img src="images/skill3.jpg"></img>
              <img src="images/skill4.jpg"></img>
             </div>
             <div class="skilldesc">
              <h3>Special Labs</h3>
              <p>Wing which converts the Engineering student into an Entrepreneur by developing the innovative thoughts by converting projects into real time products.</p>
              <h3>Skill Training</h3>
              <p>To make our students become Industry ready, we start skills training right from First Year of study onwards for all our students. Centre for Competency Development (CCD) has begun the training schedule for First Year Students with a 6-Day Skills Training Programme starting from 24.09.24 to 01.10.24. Today (24/09/24) was the first day of this training on skills in Advanced Robotics, Basic Electronics, PLC, Python Programming and Networking. 150+ First Years Students are undergoing this training.</p>
             </div>
             <div class="placements">
              <h1>Placements</h1>
              <div class="place_img">
              <img src="images/place1.jpg"></img>
              <img src="images/place2.jpg"></img>
              <img src="images/place3.jpg"></img>
              <img src="images/place4.jpg"></img>
              </div>
              <p>Training and Placement Cell is an integral part of the institute and the institute has a fully equipped infrastructure. The placement team is functioning all through the year in organizing the training activities towards preparing students for campus Interview. The placement team maintains a very cordial relationship with all the recruiting industries and invites various industries from across the country for campus Interview. The placement team coordinates quite well with the corporate sector and provides well-developed infrastructure to facilitate the campus Interview.</p>
              <p>Training and Placement cell invites companies for on-campus and ensures aspirant students of a bright career on his/her choice. Seminar halls and training halls have been made available to the students for conducting the training and recruitment programmes.</p><p>
                Training and Placement cell acts as an interface between institute of companies and maintain symbiotic and purposeful relationship with industries across the states. It has built up an impressive placement record both in terms of number of students placed as well as number of companies visiting the campus.</p>
             </div>
           </div>
      </body>
    </div>

  );
}

export default App;
