import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import Modal from "../../components/ModalFind";
import Modal1 from "../../components/ModalFind2";
import ReactDOM from 'react-dom';
import Modal2 from "../../components/ModalFind3";
import Modal3 from "../../components/ModalFind4";

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

const userIdCheckF = (userId) => {
  return function (dispatch, getState) {
    console.log(userId);
    axios({
      method: "post",
      url: "/checkUserId",
      data: {
        id: userId,
      }
    })
      .then((res) => {
        console.log(res.data);
        if (res.data === "") {
          openModal("사용 가능한 아이디입니다!");
          
        } else {
          openModal("이미 사용 중인 아이디입니다!");
          return;
        }
        return res.data;
      })
      .catch((err) => {
        console.log("아이디 중복", err);
        openModal("아이디 중복확인에 문제가 생겼습니다!");
      });
  };
};

const emailCheckF = (email) => {
  return function (dispatch, getState) {
    console.log(email);
    axios({
      method: "post",
      url: "/checkEmail",
      data: {
        email: email,
      },
    })
      .then((res) => {
        if (!res.data) {
          openModal("사용 가능한 이메일입니다!");
        } else {
          openModal("이미 사용 중인 이메일입니다!");
        }
      })
      .catch((err) => {
        console.log("이메일 중복", err);
        openModal("이메일 중복확인에 문제가 생겼습니다!");
      });
  };
};

const signupDB = (userId, password, passwordCheck, email, nickname) => {
  return async function (dispatch, getState, { history }) {
    console.log(
      "id : " + userId,
      "pwd : " + password,
      "nickname : " + nickname,
      "email : " + email
    );
    try {
      const signup = await axios.post("/signUp", {
        id: userId,
        pwd: password,
        passwordCheck: passwordCheck,
        name: nickname,
        email: email,
        //회원가입 시 서버로 해당 값들 보냄
      });
      console.log(signup);

      if (signup.data.result === true) {
        openModal2("성공적으로 회원가입하셨습니다!");
        //회원가입 완료 시 login 페이지로 이동
      } else if (signup.data.result === false) {
        openModal(signup.data.errorMessage);
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
      
      if (login.data === null || login.data === '') {
        openModal("아이디와 비밀번호를 다시 확인해주세요.");
        return;
      }

      dispatch(setUser({ id: login.data.id, pwd: login.data.pwd, name: login.data.name })); // 로그인 성공 시 유저 정보 저장
      localStorage.setItem("token", login.data.seq);  // 로그인 성공 시 토큰 저장
      openModal3("로그인 되었습니다!");

      // 로그인 성공 시 메인으로 이동

      // 회원가입 시 설정한 값을 localStorage에 저장
    } catch (err) {
      openModal("아이디와 비밀번호를 다시 확인해주세요.");
      console.log(err);
    }
  };
};

const findIdDB = (name, email) => {
  console.log("이름 : " + name);
  console.log("이메일 : " + email);
  axios({
    method: "post",
    url: "/find_id",
    data: {
      name: name,
      email: email,
      },
  })
  .then((res) => {
    console.log(res.data);
    if (!res.data) {
      openModal("아이디가 존재하지 않습니다!");
    } else {
      openModal2("아이디는 " + res.data.id + " 입니다!");
    }
  })
  .catch((err) => {
    console.log("아이디 찾기", err);
    openModal("아이디 찾기에 문제가 생겼습니다!");
  }
  );
}

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

const findPwdDB = (id, email) => {
  console.log("아이디 : " + id);
  console.log("이메일 : " + email);
  axios({
    method: "post",
    url: "/find_pwd",
    data: {
      id: id,
      email: email,
    },
  })
  .then((res) => {
    console.log(res.data);
    if (!res.data) {
      openModal("가입 시 입력하신 회원정보가 맞는지 다시 한번 확인해 주세요.");
    } else {
      sendMail(id, email);
      resetPwd(id);
      localStorage.setItem("id", id);  // 로그인 성공 시 토큰 저장
      console.log("localStorage에 저장된 id : " + localStorage.getItem("id"));
    }
  })
  .catch((err) => {
    console.log("비밀번호 찾기", err);
    openModal("비밀번호 찾기에 문제가 생겼습니다!");
  });
}

const sendMail = (id, email) => {
  axios({
    method: "post",
    url: "/api/sendMail",
    data: {
      id: id,
      email: email,
    },
  })
  .then((res) => {
    console.log(res.data);
    openModal1("가입하신 이메일로 인증번호가 발송되었습니다. 메일을 받지 못하셨다면 스팸함을 확인해 보세요.");
  })
  .catch((err) => {
    console.log("이메일 발송 실패", err);
    openModal("이메일 발송에 실패했습니다!");
  });
}
const resetPwd = (id) => {
  console.log(id);
  axios({
    method: "post",
    url: '/resetpwd',
    data: {
      id: id
    },
  })
  .then((res) => {
    console.log("데이터가 보내졌습니다.", res.data);
    console.log("데이터전송성공: ",id)
  })
  .catch((err) => {
    console.log("데이터 발송 실패", err);
    console.log("데이터전송실패: ",id)
  });
}

// 모달 창 열기
const openModal = (message) => {
  const modalContainer = document.createElement("div"); // 새로운 div 요소 생성
  document.body.appendChild(modalContainer); // body 요소에 새로운 div 요소 추가

  ReactDOM.render(
    <Modal isOpen={true} closeModal={() => closeModal(modalContainer)} message={message} />,
    modalContainer
  );
};

// 모달 창 닫기
const closeModal = (modalContainer) => {
  ReactDOM.unmountComponentAtNode(modalContainer);
  modalContainer.remove(); // div 요소 삭제
};

const openModal1 = (message) => {
  const modalContainer = document.createElement("div");
  document.body.appendChild(modalContainer);

  const closeModal1 = () => {
    ReactDOM.unmountComponentAtNode(modalContainer);
    modalContainer.remove();
  };

  ReactDOM.render(
    <Modal1 isOpen={true} closeModal={closeModal1} message={message} />,
    modalContainer
  );
};

const openModal2 = (message) => {
  const modalContainer = document.createElement("div");
  document.body.appendChild(modalContainer);

  const closeModal2 = () => {
    ReactDOM.unmountComponentAtNode(modalContainer);
    modalContainer.remove();
  };

  ReactDOM.render(
    <Modal2 isOpen={true} closeModal={closeModal2} message={message} />,
    modalContainer
  );
};

const openModal3 = (message) => {
  const modalContainer = document.createElement("div");
  document.body.appendChild(modalContainer);

  const closeModal3 = () => {
    ReactDOM.unmountComponentAtNode(modalContainer);
    modalContainer.remove();
  };

  ReactDOM.render(
    <Modal3 isOpen={true} closeModal={closeModal3} message={message} />,
    modalContainer
  );
};

const resetPwdDB = (seq, pwd, pwdcheck) => {
  console.log();
  console.log("비밀번호 재설정 : " + pwd);
  // const data = {
  //   newPassword: pwd,
  // }
  axios({
    method: "post",
    url: '/resetpwd',
    data: {
      seq: seq,
      pwd: pwd,
    },
  })
  .then((res) => {
    console.log("데이터가 보내졌습니다.", res.data);
    console.log(pwd);
    openModal2("비밀번호가 변경되었습니다.");
    localStorage.removeItem("id");
  })
  .catch((err) => {
    console.log("데이터 발송 실패", err);
    console.log(pwd);
  });
}

const actionCreators = {
  setUser,
  outUser,
  signupDB,
  loginDB,
  loginCheckDB,
  userIdCheckF,
  emailCheckF,
  findIdDB,
  findPwdDB,
  resetPwdDB
};

export { actionCreators };
