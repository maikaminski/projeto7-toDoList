import React, { useState } from 'react';
import TaskInput from './components/TaskInput/TaskInput'
import Title from './components/Title/Title'
import './App.css'
import Footer from './components/Footer/Footer'


function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
    <Title>ToDo List DEVersidade</Title>
    <TaskInput />
    <Footer />
    </>
  );
}

export default App