import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StudentProvider } from './Pages/Pages/Students/StudentContext.jsx'
import { TeacherProvider } from './Pages/Pages/Teachers/TeacherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentProvider>
      <TeacherProvider>
        <App />
      </TeacherProvider>

    </StudentProvider>
  </StrictMode>

)
