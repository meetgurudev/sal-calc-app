import React from 'react';

const MainTable = (props) => {

  let social = props.marks.social
  let science = props.marks.science
  let maths = props.marks.maths
  let englis = props.marks.englis

  console.log(props.marks)
  let sumTotal =  social + science + maths + englis;

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Total</th>
            <th>Avg</th>
            <th>{props.parent}</th>
          </tr>
        </thead>
        <tbody>
          {props.numbers.map((number) => {
            return (
              <tr key={number}>
                <td>{number}</td>
                <td>{sumTotal}</td>
                <td>{sumTotal/4}</td>
                <td>{number * number * number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;