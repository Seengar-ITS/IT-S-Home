import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import MyBookings from './pages/My-bookings'
import Providers from './pages/Providers'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/providers" element={<Providers />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}