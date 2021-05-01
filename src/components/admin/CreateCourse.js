import React from "react";
import "./CreateCourse.css";

function CreateCourse(props) {
  return props.stateCustomer.map((d) => (
    <tr key={d.id}>
      <td>
        <input
          type="checkbox"
          checked={d.select}
          onChange={(e) => {
            let value = e.target.checked;
            props.setCustomerState(
              props.stateCustomer.map((sd) => {
                if (sd.id === d.id) {
                  sd.select = value;
                }
                return sd;
              })
            );
          }}
        />
      </td>

      <td>{d.author}</td>
      <td>{d.title}</td>
    </tr>
  ));
}

export default CreateCourse;
