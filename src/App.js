import React, { useEffect, useState } from 'react'
import { Landing } from './views/Landing/Landing'
import { Intro } from './components/Intro/Intro'
import { Categories } from './views/Categories/Categories'

const App = () => {
  const [showComponent, setShowComponent] = useState(true)
  useEffect(() => {
    const toRef = setTimeout(() => {
      setShowComponent(false);
      clearTimeout(toRef);
    }, 2500);
  }, []);

  return (
    <>
      {showComponent ? <Intro /> : (
        <>
          <Landing />
          <Categories />
        </>
      )}
    </>
  );
}

export default App