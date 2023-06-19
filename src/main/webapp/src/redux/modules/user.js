import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션
const SET_USER = "SET_USER";
const OUT_USER = "OUT_USER";

// 액션 함수
const setUser = createAction(SET_USER, (user) => ({ user }));
const outUser = createAction(OUT_USER, () => ({}));

const initialState = {
  user: null,
  is_login: false,
};

const usernameCheckF = (username) => {
  return function (dispatch, getState) {
    console.log(username);
    axios({
      method: "post",
      url: "http://3.38.153.67/api/user/signup/username",
      data: {
        username: username,
      },
    })
      .then((res) => {
        console.log(res.data);
        if (!res.data) {
          window.alert("사용 가능한 아이디입니다!");
        } else {
          window.alert("이미 사용 중인 아이디입니다!");
        }
      })
      .catch((err) => {
        console.log("아이디 중복", err);
        window.alert("아이디 중복확인에 문제가 생겼습니다!");
      });
  };
};

const emailCheckF = (email) => {
  return function (dispatch, getState) {
    console.log(email);
    axios({
      method: "post",
      url: "http://3.38.153.67/api/user/signup/email",
      data: {
        email: email,
      },
    })
      .then((res) => {
        if (!res.data) {
          window.alert("사용 가능한 이메일입니다!");
        } else {
          window.alert("이미 사용 중인 이메일입니다!");
        }
      })
      .catch((err) => {
        console.log("이메일 중복", err);
        window.alert("이메일 중복확인에 문제가 생겼습니다!");
      });
  };
};

const signupDB = (username, password, passwordCheck, email, nickname) => {
  return async function (dispatch, getState, { history }) {
    console.log(
      "id : " + username,
      "pwd : " + password,
      "nickname : " + nickname,
      "email : " + email
    );
    try {
      const signup = await axios.post("http://3.38.153.67/api/user/signup", {
        username: username,
        password: password,
        passwordCheck: passwordCheck,
        nickname: nickname,
        email: email,
        //회원가입 시 서버로 해당 값들 보냄
      });
      console.log(signup);

      if (signup.data.result === true) {
        window.alert("성공적으로 회원가입하셨습니다!");
        window.location.replace("/login");
        //회원가입 완료 시 login 페이지로 이동
      } else if (signup.data.result === false) {
        window.alert(signup.data.errorMessage);
        window.location.replace("/signup");

        //회원가입 실패 시 다시 signup 페이지로 이동
      }
    } catch (err) {
      alert("회원가입에 실패했습니다.");
      console.log(err);
    }
  };
};

const loginDB = (username, password) => {
  console.log(username, password);
  return async function (dispatch, getState, { history }) {
    try {
      const login = await axios.post('/login', {
        id: username,
        pwd: password
      });

      dispatch(setUser({ id: login.data.id, pwd: login.data.pwd, name: login.data.name }));
      localStorage.setItem("token", login.data.seq);
      window.alert("로그인 되었습니다!");
      window.location.replace("/");

      // 로그인 성공 시 메인으로 이동

      // 회원가입 시 설정한 값을 localStorage에 저장
    } catch (err) {
      window.alert("아이디와 비밀번호를 다시 확인해주세요.");
      console.log(err);
    }
  };
};

const loginCheckDB = (token_key) => {
  return async function (dispatch, getState, { history }) {
    try {
      const check = await axios.post('/check_login', {
        seq: token_key
      });
      // if (check.data.ok === true) {
      dispatch(
        setUser({
          seq: check.data.seq,
          id: check.data.id,
          pwd: check.data.pwd,
          name: check.data.name
          //nickname: check.data.nickname,
        })
      );
      //   dispatch(
      //     setUser({
      //       username: check.data.username,
      //     })
      //   );
      // } else {
      //   dispatch(outUser());
      // }
    } catch (err) {
      console.log("에러발생", err);
    }
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
        console.log("성공함" + draft.user);
      }),
    [OUT_USER]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem("token");
        //로그아웃 시 토큰 털어내기
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  setUser,
  outUser,
  signupDB,
  loginDB,
  loginCheckDB,
  usernameCheckF,
  emailCheckF,
};

export { actionCreators };
