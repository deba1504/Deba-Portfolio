import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pr-to-do.png";
import projImg2 from "../assets/img/pr-remibotnn.png";
import projImg3 from "../assets/img/Schemon.jpg";
import projImg4 from "../assets/img/musicp.jpg";
import projImg5 from "../assets/img/quote-gen.png";
import projImg6 from "../assets/img/snakewg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Projects = () => {

  

  const [openDialog, setOpenDialog] = useState(null);
  const toggleDialog = (dialog) => {
    setOpenDialog(openDialog === dialog ? null : dialog);
  };

  const projectswd = [
    {
      title: "To-do list",
      description: 
      <div>Web Development- HTML, CSS, JS
      <button style={{marginLeft:"25%"}} onClick={() => toggleDialog('dialog1')}>
                        More Details <ArrowRightCircle size={25} />
                    </button></div>,
      imgUrl: projImg1,
    },
    
    {
      title: "Schemo",
      description: <div>Figma, HTML, CSS, JavaScript, Handlebars, Express JS, MongoDB
      <button style={{marginLeft:"25%"}} onClick={() => toggleDialog('dialog3')}>
                        More Details <ArrowRightCircle size={25} />
                    </button></div>,
      imgUrl: projImg3,
    },
    
    {
      title: "Quote Generator",
      description: 
      <div>Web Development- HTML, CSS, JS
      <button style={{marginLeft:"25%"}} onClick={() => toggleDialog('dialog5')}>
                        More Details <ArrowRightCircle size={25} />
                    </button></div>,
      imgUrl: projImg5,
    },
    {
      title: "Snake Water Gun",
      description: 
      <div>Web Development- HTML, CSS, JS
      <button style={{marginLeft:"25%"}} onClick={() => toggleDialog('dialog6')}>
                        More Details <ArrowRightCircle size={25} />
                    </button></div>,
      imgUrl: projImg6,
    },
  ];
  const projectsml =[
    {
      title: "Remibot",
      description:<div>Machine Learning- Natural Language processing(NLP) using Python; Libraries - speech_recognition, tkinter, pyttsx3, nltk, numpy, pandas, sklearn etc.
      <button style={{marginLeft:"25%"}} onClick={() => toggleDialog('dialog2')}>
                        More Details <ArrowRightCircle size={25} />
                    </button></div>,
      imgUrl: projImg2,
    },
  ];
  const projectdsa =[
    {
      title: "Music Player",
      description: 
      <div>Data Structures and Algorithms using c++
      <button style={{marginLeft:"25%"}} onClick={() => toggleDialog('dialog4')}>
                        More Details <ArrowRightCircle size={25} />
                    </button></div>,
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <Container>
        <Row>
          <Col size={12}>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Machine learning</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">DSA</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectswd.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsml.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectdsa.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
      
      {openDialog === 'dialog1' && (
        <div className="dialog-box">
          <div className="dialog-content">
            <span className="close-btn" onClick={() => toggleDialog('dialog1')}>&times;</span>
            <h3>To-do List</h3>
            <ul>
              <li>Developed a user-friendly To-Do List application to help users manage tasks efficiently.</li>
              <li>Features included adding, editing, and deleting tasks with real-time updates.</li>
              <li>Implemented local storage to ensure tasks are not lost even after a page refresh.</li>
              <li>Utilized HTML for structuring the web page and CSS for styling the user interface.</li>
              <li>Implemented JavaScript for dynamic functionality and interactivity.</li>
              <li><b><u>Techstack used</u>: </b>HTML, CSS, JavaScript</li>
            </ul>
            <button onClick={() => console.log('connect')}>
              <a href="https://github.com/deba1504/to-do-list" target="_blank" rel="noopener noreferrer">
                Website Link <ArrowRightCircle size={25} />
              </a>
            </button>
          </div>
        </div>
      )}

      {openDialog === 'dialog2' && (
        <div className="dialog-box">
          <div className="dialog-content">
            <span className="close-btn" onClick={() => toggleDialog('dialog2')}>&times;</span>
            <h3>Remibot</h3>
            <ul>
              <li>Created an intelligent chatbot that suggests home remedies based on user-provided symptoms.</li>
              <li>Trained the chatbot using a dataset of over 100 records, ensuring a wide range of symptom and remedy pairs.</li>
              <li>Utilized Natural Language Processing (NLP) techniques to accurately interpret and respond to user inputs.</li>
              <li>Implemented speech recognition and text-to-speech capabilities for a more interactive user experience.</li>
              <li>Provided users with immediate, accessible, and reliable home remedy advice, reducing the need for initial medical consultations.</li>
              <li><b><u>Techstack used</u>: </b>Machine Learning - Natural Language Processing (NLP) using Python</li>
              <li><b><u>Libraries used</u>: </b>speech_recognition, tkinter, pyttsx3, nltk, numpy, pandas, sklearn etc.</li>
            </ul>
            <button onClick={() => console.log('connect')}>
              <a href="https://github.com/deba1504/Remibot" target="_blank" rel="noopener noreferrer">
                Github <ArrowRightCircle size={25} />
              </a>
            </button>
          </div>
        </div>
      )}

      {openDialog === 'dialog3' && (
        <div className="dialog-box">
          <div className="dialog-content">
            <span className="close-btn" onClick={() => toggleDialog('dialog3')}>&times;</span>
            <h3>Schemo</h3>
            <ul>
              <li>Developed a comprehensive web application that aggregates all government schemes, job opportunities, and funding opportunities in one centralized platform.</li>
              <li>Categorized and organized information for easy navigation, enabling users to filter and sort by type(student/ farmer/ businessman), eligibility, location, and more.</li>
              <li> Regularly updated the database to include the latest government schemes and opportunities, ensuring users have access to current information.</li>
              <li><b><u>Techstack used</u>: </b>Figma for design, HTML, CSS, and JavaScript for development.</li>
            </ul>
            <button onClick={() => console.log('connect')}>
              <a href="https://github.com/deba1504/Schemo" target="_blank" rel="noopener noreferrer">
                Github <ArrowRightCircle size={25} />
              </a>
            </button>
          </div>
        </div>
      )}

      {openDialog === 'dialog4' && (
        <div className="dialog-box">
          <div className="dialog-content">
            <span className="close-btn" onClick={() => toggleDialog('dialog4')}>&times;</span>
            <h3>Music Player</h3>
            <ul>
              <li>Developed a robust and user-friendly music playlist management system.</li>
              <li>Integrated features for adding 1000s of songs, deleting, searching and playing songs from the playlist.</li>
              <li> Regularly updated the database to include the latest government schemes and opportunities, ensuring users have access to current information.</li>
              <li><b><u>Techstack used</u>: </b> Data structures and Algorithm (doubly linked list, stack) using C++</li>
            </ul>
            <button onClick={() => console.log('connect')}>
              <a href="https://github.com/deba1504/Music-Playlist" target="_blank" rel="noopener noreferrer">
                Github <ArrowRightCircle size={25} />
              </a>
            </button>
          </div>
        </div>
      )}
      {openDialog === 'dialog5' && (
        <div className="dialog-box">
          <div className="dialog-content">
            <span className="close-btn" onClick={() => toggleDialog('dialog5')}>&times;</span>
            <h3>Quote Generator</h3>
            <ul>
              <li>The quote generator features a clean and minimalistic UI built with HTML and styled with CSS, including a display area for the quote and a button to generate a new quote.</li>
              <li>Implemented in JavaScript, the generator fetches quotes from an array or an API and displays a random quote each time the user clicks the button.</li>
              <li> The project demonstrates efficient use of JavaScript for handling asynchronous operations, such as fetching data from APIs, ensuring a smooth and responsive user experience.</li>
              <li><b><u>Techstack used</u>: </b> HTML, CSS, Java</li>
            </ul>
            <button onClick={() => console.log('connect')}>
              <a href="https://github.com/deba1504/Music-Playlist" target="_blank" rel="noopener noreferrer">
                Github <ArrowRightCircle size={25} />
              </a>
            </button>
          </div>
        </div>
      )}
      {openDialog === 'dialog6' && (
        <div className="dialog-box">
          <div className="dialog-content">
            <span className="close-btn" onClick={() => toggleDialog('dialog6')}>&times;</span>
            <h3>Snake water Gun</h3>
            <ul>
              <li>The game features a simple and responsive UI built with HTML and styled with CSS, including buttons for selecting snake, water, or gun, and an area to display results.</li>
              <li>Implemented in JavaScript, the game logic determines the winner based on predefined rules (snake drinks water, water douses gun, gun shoots snake) and provides immediate feedback to the player.</li>
              <li><b><u>Techstack used</u>: </b> HTML, CSS, Java</li>
            </ul>
            <button onClick={() => console.log('connect')}>
              <a href="https://deba1504.github.io/Snake-water-gun/" target="_blank" rel="noopener noreferrer">
                Website Link <ArrowRightCircle size={25} />
              </a>
            </button>
          </div>
        </div>
      )}

      


    </section>
  );
}
