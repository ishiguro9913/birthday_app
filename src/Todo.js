import React from "react";
import Button from 'react-bootstrap/Button';

import Table from './components/Table';

var currentTime = new Date();
var year = currentTime.getFullYear() + 1

const COLUMNS = ['西暦', '曜日'];
const ROWS = [
  [year, '日曜日'],
  [year+1, '月曜日'],
  [year+2, '火曜日'],
];

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (

    <div class="answer">
      <p>{todo.name}生まれの方が<br/>この先の10年間で誕生日が土日になるのは　</p>
      <h2>{todo.day}回</h2><span>です</span><br/>

      {/* <p>20xx年と20xx年が土曜日<br/>20xx年と20xx年が日曜日</p> */}


      <div className="p-5">
          <Table
            bordered
            hover
            striped
            variant="dark"
            columns={COLUMNS}
            rows={ROWS}
          />
        </div>

        <Button onClick={() => window.location.reload()}　variant="secondary" size="lg">
          もう１度最初から！
        </Button>


    </div>

  );
};

export default Todo;
