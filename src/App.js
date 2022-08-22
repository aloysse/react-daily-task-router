import "./App.css";
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/login")}>logout</button>;
};

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p> <LogOut />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Post = () => {
  return (
    <div>
      <h1>post 頁面</h1>
      <Outlet />
    </div>
  );
};
const PostID = () => {
  let params = useParams();
  return <p>Post ID: {params.postID}</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post/post1234">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postID" element={<PostID />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
