import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Team from './Team'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100'>
      <nav className='bg-blue-600 p-4'>
        <ul className='flex justify-center space-x-6'>
          <li><Link to="/" className='text-white hover:text-yellow-300 font-medium transition duration-200'>Home</Link></li>
          <li><Link to="/about" className='text-white hover:text-yellow-300 font-medium transition duration-200'>About</Link></li>
          <li><Link to="/contact" className='text-white hover:text-yellow-300 font-medium transition duration-200'>Contact</Link></li>
        </ul>
      </nav>
      <div className='container mx-auto py-8'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
        <Route path='team' element={<Team />} />
        </Route>

        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      </div> 
    </Router>
  );
}

export default App;
