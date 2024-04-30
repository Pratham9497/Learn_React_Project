import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import NewPost from './NewPost'
import PostDesc from './PostDesc'
import EditPost from './EditPost'
import Missing from './Missing'

import { DataProvider } from '../context/DataContext'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App mx-auto flex flex-col h-[100vh] max-w-[40vw] border-zinc-400 border-[1px]">
      <Header />
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/post' element={<NewPost />} />
          <Route path='/post/:id' element={<PostDesc />} />
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='*' element={<Missing />} />

        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
