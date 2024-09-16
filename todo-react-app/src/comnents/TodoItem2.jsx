import React from "react";

export default function TodoItem2() {
  return (
    <div className="container text-center">
      <div className="row hk-row">
        <div className="col-5">Vegitables</div>
        <div className="col-5">04/10/24</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
