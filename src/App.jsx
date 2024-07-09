
import './App.css'
import BlogCard from './components/BlogCard'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className='max-w-7xl mx-auto h-screen items-center' >
      <Navbar />
      <div className=' mt-10 p-6 lg:p-0'>
        <div className='text-start lg:text-center text-6xl lg:text-7xl font-black'>Tech Blog for you</div>
      </div>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 justify-center gap-10 '>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

export default App
