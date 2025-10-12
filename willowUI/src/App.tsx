import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext.tsx"
import { ToastProvider } from "./components/ui/Toast"
import LandingPage from "./pages/LandingPage"
import DocsPage from "./pages/Docs"
import ComponentsPage from "./pages/ComponentsPage"
import ThemePage from "./pages/ThemePage"
import ColorsPage from "./pages/ColorsPage"
import ButtonPage from "./pages/ButtonPage"
import ChartsPage from "./pages/ChartsPage"
import TablePage from "./pages/TablePage"
import ToastPage from "./pages/ToastPage"

function App() {
  return (
    <ThemeProvider>
      <ToastProvider position="top-right" maxToasts={5}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/components/button" element={<ButtonPage />} />
            <Route path="/components/charts" element={<ChartsPage />} />
            <Route path="/components/table" element={<TablePage />} />
            <Route path="/components/toast" element={<ToastPage />} />
            <Route path="/theme" element={<ThemePage />} />
            <Route path="/colors" element={<ColorsPage />} />
          </Routes>
        </div>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
