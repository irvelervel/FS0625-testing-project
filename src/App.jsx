import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import HiddenSection from './components/HiddenSection'
import PostList from './components/PostList'

function App() {
  return (
    <div className="min-vh-100 bg-body-secondary">
      {/* <HiddenSection /> */}
      <PostList />
    </div>
  )
}

export default App
