
// 주문 내역 리덕스
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

// actions 
const ORDER_LIST = "ORDER_LIST";

// actions creators
const orderList = createAction(ORDER_LIST, (order_data) => ({ order_data }));

// initial state
const initialState = {
    list: [],
}

// middlewaress (주문 내역 가져오기 (cartlist 서버에서,,?) )
const orderListDB = () => {
    return function (dispatch, getState, { history }) {
        const token_key = `${localStorage.getItem("token")}`;
        axios
            .get("http://3.38.153.67/api/carts",{
                headers: {
                    Authorization: `Bearer ${token_key},`
                },
            })
            .then((res) => {
                console.log("orderLIST 서버 데이터 가져옴", res.data);
                dispatch(orderList(res.data));
            })
            .catch((err) => {
                console.log("orderlist 조회 에러!!!", err);
        });
    };
};

// reducer
export default handleActions(
    {
        [ORDER_LIST]: (state, action) =>
            produce(state, (draft) => {
                draft.list.push(...action.payload.order_data);

                //중복검사 (뭐에 대한?)
                draft.list = draft.list.reduce((acc, cur) => {
                    if(acc.findIndex((a) => a.pid === cur.pid === -1)){
                        return [...acc, cur];
                    } else{
                        acc[acc.findIndex((a) => a.pid === cur.pid )] = cur;
                        return acc;
                    }                   
                }, []);
            }),
    },
    initialState
);

const actionCreators = {
    orderListDB,
  };

export { actionCreators };