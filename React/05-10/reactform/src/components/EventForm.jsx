import React from "react";
import "./EventForm.css";
import { useState } from "react";

export default function EventForm({ addData }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [food, setFood] = useState("짜장면");

  function resetForm() {
    setTitle("");
    setDate("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      id: parseInt(Math.random() * 10000),
      title: title,
      date: date,
      food: food,
    };
    console.log(typeof formData.id);

    addData(formData);
    resetForm();
  };

  return (
    // onSubmit은 form태그에 쓸 수 있다.
    // submit가 일어났을 때 작동
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        <strong>Event Title : </strong>
        {/* onChange는 event객체를 가지고 있고, 따로 function을 만들어도 되지만, 콜백함수로 바로 만들어 인자를 받음. */}
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        <strong>Event date : </strong>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>

      <label>
        <select onChange={(event) => setFood(event.target.value)}>
          <option value="짜장면">짜장면</option>
          <option value="짬뽕">짬뽕</option>
          <option value="뽀끔밥">보끔밥</option>
        </select>
      </label>

      <button type="submit">제출하기</button>
      <button type="reset" onClick={resetForm}>
        초기화
      </button>
    </form>
  );
}
