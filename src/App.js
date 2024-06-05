import Promotion from './components/Promotion';
import DisplayAllPromotion from './components/DisplayAllPromotion';
import Employee from './components/Employee';
import EmployeeDetails from './components/EmployeeDetails';
import Issue from './components/Issue';
import Book2 from './components/Book2';
import DisplayAllBook2 from './components/DisplayAllBook2';
import BookDetail from './components/BookDetail';
import { Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import DisplayAllBookDetail from './components/DisplayAllBookdetail';
import AdminLogin from './components/AdminLogin';
import Supplier from './components/Supplier';
import DisplayAllSupplier from './components/DisplayAllSupplier';
import DisplayAllIssue from './components/DisplayAllIssue';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<BookDetail/>} path="/bookdetail"/>
          <Route element={<Book2/>} path="/book2"/>
          <Route element={<DisplayAllBook2/>} path="/displayallbook2"/>
          <Route element={<DisplayAllBookDetail/>} path="/displayallbookdetail"/>
          <Route element={<AdminLogin/>} path="/adminlogin"/>
          <Route element={<Supplier/>} path="/supplier"/>
          <Route element={<DisplayAllSupplier/>} path="/displayallsupplier"/>
          <Route element={<DisplayAllIssue/>} path="/displayallissue"/>
          <Route element={<Issue/>} path="/issue" />

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
