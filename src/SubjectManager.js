// src/components/SubjectManager.js

import React, { useState } from 'react';

function SubjectManager() {
  const [subjects, setSubjects] = useState(
    JSON.parse(localStorage.getItem('subjects')) || []
  );

  const addSubject = (subjectName, studyHours) => {
    const newSubjects = [...subjects, { subjectName, studyHours }];
    setSubjects(newSubjects);
    localStorage.setItem('subjects', JSON.stringify(newSubjects));
  };

  const adjustStudyHours = (index, amount) => {
    const newSubjects = [...subjects];
    newSubjects[index].studyHours += amount;
    setSubjects(newSubjects);
    localStorage.setItem('subjects', JSON.stringify(newSubjects));
  };

  return (
    <div>
      <h2>Subject Management</h2>
      <input type="text" placeholder="Subject Name" />
      <input type="number" placeholder="Study Hours" />
      <button onClick={() => addSubject("Math", 3)}>Add Subject</button>
      {subjects.map((subject, index) => (
        <div key={index}>
          <p>{subject.subjectName}</p>
          <p>Study Hours: {subject.studyHours}</p>
          <button onClick={() => adjustStudyHours(index, 1)}>+</button>
          <button onClick={() => adjustStudyHours(index, -1)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default SubjectManager;
