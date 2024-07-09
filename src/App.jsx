
import './App.css'
import BlogCard from './components/card/BlogCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import useBlog from './hooks/useBlog'
function App() {
  const { blogs } = useBlog();

  return (
    <>
      <div className='max-w-7xl mx-auto' >
        <Navbar />
        <div className=' mt-10 p-10 lg:p-0'>
          <div className='text-start lg:text-center text-6xl lg:text-7xl font-black'>Tech Blog for you.</div>
        </div>
        <div className='mt-10 mx-10 grid grid-cols-1 lg:grid-cols-3 place-content-center gap-10'>
          {blogs.map((blog, index) => ( 
            <BlogCard key={index} image={blog.image} title={blog.title} description={blog.description} date={blog.date} />
          ))}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default App
