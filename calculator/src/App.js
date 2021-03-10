import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(expression);

  function display(symbol) {
    setExpression((prevValue) => {
      if (
        /[+*-/]/.test(symbol) &&
        /[+*-/]/.test(prevValue[prevValue.length - 1])
      ) {
        let newValue;
        if (/[-]/.test(symbol)) {
          newValue = prevValue.slice(0, prevValue.length) + symbol;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(+prevValue[i])) {
              count++;
            } else {
              count = 0;
            }
          }
          newValue = prevValue.slice(0, prevValue.length - count) + symbol;
        }

        setExpression(newValue);
      } else {
        if (prevValue) {
          prevValue = prevValue + "";
          let valArr = prevValue.split(/[+/*-]/g);
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === ".") {
            symbol = "";
          }
        }

        setExpression(
          (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
        );
      }
    });
    setAnswer((prevValue) =>
      (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
    );
  }

  function calculate() {
    setAnswer(eval(expression));
    setExpression(eval(expression));
  }

  function allClear() {
    setExpression("");
    setAnswer(0);
  }

  function clear() {
    setExpression((prev) => {
      setAnswer(0);
      prev = prev + "";
      return prev
        .split("")
        .slice(0, prev.length - 1)
        .join("");
    });
  }

  useEffect(() => {
    document.addEventListener("keydown", handlekeyDown);
    // window.addEventListener('keydown', handleEquals);
    return () => {
      document.addEventListener("keydown", handlekeyDown);
      // window.addEventListener('keydown', handleEquals);
    };
  }, []);

  function handlekeyDown(e) {
    e.preventDefault();
    const current = e.key;
    const values = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "+",
      "-",
      "*",
      "/",
      ".",
      "c",
      "Delete",
      "=",
    ];
    if (values.includes(current)) {
      let value = current;
      if (value === "c") {
        clear();
      } else if (value === "Delete") {
        allClear();
      } else {
        display(value);
      }
    }
  }

  return (
    <div>
      <h1>React Calculator</h1>
      <div className="container">
        <div className="grid">
          <div className="display">
            <input id="display" className="answer" value={answer}></input>
          </div>
          <div onClick={allClear} className="padButton ac" id="clear">
            AC
          </div>
          <div onClick={clear} className="padButton c" id="c">
            C
          </div>
          <div
            onClick={() => display("/")}
            className="padButton divide"
            id="divide"
          >
            /
          </div>
          <div
            onClick={() => display("*")}
            className="padButton multiply"
            id="multiply"
          >
            *
          </div>
          <div
            onClick={() => display("7")}
            className="padButton seven"
            id="seven"
          >
            7
          </div>
          <div
            onClick={() => display("8")}
            className="padButton eight"
            id="eight"
          >
            8
          </div>
          <div
            onClick={() => display("9")}
            className="padButton nine"
            id="nine"
          >
            9
          </div>
          <div
            onClick={() => display("-")}
            className="padButton subtract"
            id="subtract"
          >
            -
          </div>
          <div
            onClick={() => display("4")}
            className="padButton four"
            id="four"
          >
            4
          </div>
          <div
            onClick={() => display("5")}
            className="padButton five"
            id="five"
          >
            5
          </div>
          <div onClick={() => display("6")} className="padButton six" id="six">
            6
          </div>
          <div onClick={() => display("+")} className="padButton add" id="add">
            +
          </div>
          <div onClick={() => display("1")} className="padButton one" id="one">
            1
          </div>
          <div onClick={() => display("2")} className="padButton two" id="two">
            2
          </div>
          <div
            onClick={() => display("3")}
            className="padButton three"
            id="three"
          >
            3
          </div>
          <div onClick={calculate} className="padButton equals" id="equals">
            =
          </div>
          <div
            onClick={() => display("0")}
            className="padButton zero"
            id="zero"
          >
            0
          </div>
          <div
            onClick={() => display(".")}
            className="padButton decimal"
            id="decimal"
          >
            .
          </div>
        </div>
      </div>
      <h3 class="footer">
        Keyboard usage has been implemented, except for equals sign. Use c for
        Clear Function and Delete for All Clear Function.
      </h3>
    </div>
  );
}

export default App;
