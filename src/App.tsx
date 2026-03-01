import { useEffect, useState, useCallback } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const selectors = '.reveal, .slide-in-left, .slide-in-right'
    const els = document.querySelectorAll(selectors)
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useCursorGlow() {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const glow = document.getElementById('cursor-glow')
    if (glow) {
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
      glow.style.opacity = '1'
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    const glow = document.getElementById('cursor-glow')
    if (glow) {
      glow.style.opacity = '0'
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useScrollReveal()
  useCursorGlow()

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <>
      <div id="cursor-glow" className="cursor-glow" />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
