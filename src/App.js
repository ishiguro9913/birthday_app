import "./App.css";
import TodoList from "./TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const monthRef = useRef();
  const dayRef = useRef();

  const [disable, setDisable] = React.useState(false);

  const handleAddTodo = (e) => {
    const name = `${monthRef.current.value}月${dayRef.current.value}日`
    if (monthRef.current.value === "" || dayRef.current.value === "") return;
    setTodos((prevTodos) => {
    // 曜日を表す文字列の配列を作っておく
    var WeekChars = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ];
    // 日付オブジェクトから曜日を得る


    // 来年の西暦を取得
    var currentTime = new Date();
    var year = currentTime.getFullYear() +1

    // 来年から10年後の曜日を配列に格納する
    var days = new Array(); 
    for(var count = 1; count < 11; count++) {
      var dObj = new Date(year, monthRef.current.value -1, dayRef.current.value);
      var wDay = dObj.getDay();
      days.push(wDay);
      year += 1
    }

    // 10年間のうち誕生日が土日に当たる回数を計算
    let count_days = days.filter(n => n === 0 || n === 6).length;

    var dObj = new Date(year, monthRef.current.value -1, dayRef.current.value);
    var wDay = dObj.getDay();
      return [...prevTodos, { id: uuidv4(), name: name, completed: false, day: count_days}];
    });
    monthRef.current.value = null;
    dayRef.current.value = null;
  };

  return (
    <>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
  />

<h1>Is my birthday a holiday?</h1>

<Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>誕生日を入力してください</Form.Label>
      <Form.Control as="select"　aria-label="" name="month" ref={monthRef} class="form-select" size="lg">
        <option value="">-</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>ss
        </Form.Control>　月　
      <Form.Control as="select"　aria-label="" name="day" ref={dayRef} class="form-select" size="lg">
        <option value="">-</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        </Form.Control>　日　

      <div id="check" className="d-grid gap-2" variant="contained" color="primary"　onClick={handleAddTodo}>
        <Button variant="primary" size="lg" disabled={disable} onClick={setDisable}>
          調べる
        </Button>
      </div>

        </Form.Group> 
      </Form>
      <TodoList todos={todos} toggleTodo={toggleTodo} />

    </>
  );
};

export default App;
