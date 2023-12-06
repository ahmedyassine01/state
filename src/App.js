// src/App.js
import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';






class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: 'Ahmed Yassine Chaabene',
        education: "Bachelore degree and Student in GoMyCode",
        experience: ["Experience",
          "Online Portfolio (Personal project)",

          ["Developed a personal portfolio website showcasing projects, skills, and achievements using React.js.",
            "Implemented responsive design for optimal viewing on various devices.",]
          ,

          "E-commerce Website (Course Project)",
          [
            "Collaborated with a team to create a fully functional e-commerce website using HTML, CSS, and JavaScript.",
            "Implemented features such as product listing, cart management, and user authentication."
          ]

        ],
        Skills: ["Skills", ["React.js",
          "JavaScript",
          "HTML/CSS"]
        ],
        contact: ["Contact",
          "Email:ahmedyassinechaabene87@gmail.com",
          "GitHub:https://github.com/ahmedyassine01",
          'Number:23495950'],
        bio: 'Student In GoMyCode',
        imgSrc: '/images/test.jpg', // Update with your image file name and extension
        profession: 'Web Developer',
      },
      show: false,
      count:
        0
    }
  }
  sections = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
  icons = styled.div`
  font-size: 2rem;
  color: #e67e22;
  margin-bottom: 10px;
`;
  icon = styled.div`
  font-size: 2rem;
  color: #3498db;
`;
  section = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
`;
  content = styled.div`
  h2 {
    margin-bottom: 10px;
    color: #2c3e50;
  }
  p {
    color: #34495e;
  }
`;
  contents = styled.div`
  h2 {
    margin-bottom: 10px;
    color: #2c3e50;
  }
  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  }
  strong {
    color: #3498db;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      color: #34495e;
      margin-bottom: 8px;
      &:before {
        content: '•';
        color: #e67e22;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }
`;
  sectionss = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
`;
  iconss = styled.div`
  font-size: 2rem;
  color: #27ae60;
`;
  contentss = styled.div`
h2 {
  margin-bottom: 10px;
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 8px;
    background-color: #ecf0f1;
    border-radius:  4px;
    color: #34495e;
  }
}
`;



  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };
  handlePlus = () => this.setState({ count: this.state.count + 1 })
  handleMinus = () => this.state.count > 0 && this.setState({ count: this.state.count - 1 })
  componentDidMount() {
    setInterval(this.handlePlus, 1000);
  }

 
  render() {
    const { person, show, count, mountTime } = this.state;

    return (
      <div className="app-container">
        <h1>hello </h1>
        <button className="toggle-button" onClick={this.toggleShow}>
          Profile
        </button>
        <div className='App'>
          <h1>{count}</h1>
        </div>
        {show && (
          <div className="profile-container">
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} className="profile-image" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

        