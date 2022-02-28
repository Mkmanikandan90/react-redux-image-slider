import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, login, logout } from "../../action";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer);
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const imageArr = [
    {
      id: 1011,
      imgUrl:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      id: 2020,
      imgUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
      id: 3030,
      imgUrl:
        "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBmcnVpdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      id: 4040,
      imgUrl:
        "https://images.unsplash.com/photo-1538099130811-745e64318258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3V0ZSUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      id: 5050,
      imgUrl:
        "https://images.unsplash.com/photo-1494137269338-d36b0f687715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6060,
      imgUrl:
        "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmV8ZW58MHx8MHx8&w=1000&q=80",
    },
  ];

  let flag = true;
  return (
    <>
      {imageArr.length === counter.index
        ? console.log("both are equal")
        : console.log("Both are not equal")}
      <button
        onClick={() =>
          imageArr.length - 1 === counter.index
            ? (flag = false)
            : dispatch(increment())
        }
      >
        Next
      </button>{" "}
      &nbsp; &nbsp;
      <button
        onClick={() =>
          counter.index === 0 ? (flag = false) : dispatch(decrement())
        }
      >
        Prev
      </button>
      &nbsp; &nbsp;
      <button onClick={() => dispatch(reset())}>Reset</button> <br /> <br />
      <h3>Id : {imageArr[counter.index].id}</h3>
      <div>
        <img src={`${imageArr[counter.index].imgUrl}`} alt="img" />
      </div>
    </>
  );
};

export default Counter;
