// import logo from "../logo.svg";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actionCreators as userActions } from "../redux/modules/user";
import axios from 'axios';

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

  Order,
  Address,
} from "../pages/page";

function App() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const token_key = `${localStorage.getItem("token")}`;
  const islogin = useSelector((state) => state.user.is_login);
  console.log("islogin: ", islogin);

  useEffect(() => {
    // axios.get('/main/mainList')
    //   .then(response => setData(response.data));
    if (!token_key) {
      return;
    }
    if (token_key) {
      dispatch(userActions.loginCheckDB(token_key));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      {/* {data.map(item => (
        <div key={item.age}>{item.name}</div>
      ))} */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/comment/write/:id" element={<CommentWrite />} />
        <Route path="/*" element={<NotFound />} />

        <Route path="/order" element={<Order />} />
        <Route path="/address" element={<Address />} />
        
      </Routes>
    </div>
  );
}

export default App;
