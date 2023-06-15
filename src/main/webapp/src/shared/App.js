// import logo from "../logo.svg";
import { Route, Routes, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actionCreators as userActions } from "../redux/modules/user";

import "../App.css";

//components
import { Header } from "../components/component";

//pages
import {
  Main,
  Login,
  Signup,
  CartList,
  NotFound,
  CommentWrite,
  Detail,
  FindPwd,
  FindId,
  Category,
} from "../pages/page";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token_key = `${localStorage.getItem("token")}`;
  const islogin = useSelector((state) => state.user.is_login);
  const user = useSelector((state) => state.user.user);
  console.log("islogin: ", islogin + " user: " + JSON.stringify(user));
  const [searchValue, setSearchValue] = useState(""); // 검색어 상태
  const [selectedTag, setSelectedTag] = useState('');

  const handleSearchSubmit = (value) => {
    console.log("검색어 : " + value);
    setSearchValue(value); // 검색어 업데이트
    navigate("/category");
  };

  useEffect(() => {
    if (token_key === null && token_key === "null") {
      return;
    }
    if (token_key !== null && token_key !== "null") {
      console.log("토큰 있음:" + token_key);
      dispatch(userActions.loginCheckDB(token_key));
    }    
  }, []);

  return (
    <div className="App">
      <Header onSearchSubmit={handleSearchSubmit} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail/:seq" element={<Detail />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/comment/write/:id" element={<CommentWrite />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/category/:tag" element={<Category searchValue={searchValue} />} />
        <Route path="/FindPwd" element={<FindPwd />} />
        <Route path="/FindId" element={<FindId />} />
      </Routes>
    </div>
  );
}

export default App;