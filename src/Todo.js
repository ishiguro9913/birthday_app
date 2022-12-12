import React from "react";
import Button from 'react-bootstrap/Button';

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (

    <div class="answer">
      <p>{todo.name}生まれの方が<br/>この先の10年間で誕生日が土日になるのは　</p>
      <h2>{todo.day}回</h2><span>です</span><br/>

      {/* <p>20xx年と20xx年が土曜日<br/>20xx年と20xx年が日曜日</p> */}

      <Button onClick={() => window.location.reload()}　variant="secondary" size="lg">
          もう１度最初から！
      </Button>
    </div>

  );
};

export default Todo;
