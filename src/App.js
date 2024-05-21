import Promotion from './components/Promotion';
import DisplayAllPromotion from './components/DisplayAllPromotion';
import Employee from './components/Employee';
import EmployeeDetails from './components/EmployeeDetails';
import Issue from './components/Issue';
import Book2 from './components/Book2';
import DisplayAllBook2 from './components/DisplayAllBook2';
import BookDetail from './components/BookDetail';
import { Routes,Route,BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<BookDetail/>} path="/bookdetail"/>
          <Route element={<Book2/>} path="/book2"/>
          <Route element={<DisplayAllBook2/>} path="/displayallbook2"/>
      {/* <Issue/>
      <EmployeeDetails/>
      <Employee/>
     <Promotion/> */}
     {/* <BookDetail/>
     <Book2/>
     <DisplayAllBook2/> */}
     {/* <DisplayAllPromotion/> */}
    
     </Routes>
     </Router>
    </div>
  );
}

export default App;
