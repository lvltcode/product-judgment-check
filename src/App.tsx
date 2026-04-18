import { Route, Routes } from 'react-router-dom'
import { LocaleToggle } from './components/LocaleToggle'
import { AssessmentPage } from './pages/AssessmentPage'
import { IntroPage } from './pages/IntroPage'
import { LandingPage } from './pages/LandingPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ResultPage } from './pages/ResultPage'

export const App = () => {
  return (
    <>
      <header className="app-toolbar">
        <div className="app-toolbar-inner">
          <LocaleToggle />
        </div>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
