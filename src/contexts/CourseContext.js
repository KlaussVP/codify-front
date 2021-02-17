import React, { createContext, useState } from 'react';

const CourseContext = createContext();
export default CourseContext;

export function CourseProvider({ children }) {
  const [course, setCourse] = useState(null);

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
}
