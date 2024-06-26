import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppInnerContainer, AppOuterContainer } from './styled';
import { AppHeader } from './Components/Header';
import { EntryScreen } from './Components/EntryScreen';
import { MainScreenBottomBar } from './Components/MainScreenBottomBar';
import { DesktopLayout } from './Components/Layouts/DesktopLayout';
import BoxesLoader from './Components/CustomLoader';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500); // Adjust the delay time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppOuterContainer className="app">
      {/* <div className='animation'>
        <Suspense fallback={<ScatterBoxLoaderComponent />}>
          <DesktopLayout />
        </Suspense>
      </div> */}

      <div className='animation'>
        {!showContent ? (
          <BoxesLoader />
        ) : (
          <DesktopLayout />
        )}
      </div>
    </AppOuterContainer>
  );
}

export default App;
