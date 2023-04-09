import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmpList } from "../../redux/feature/empListSlice";

const Emp_list = () => {
  const [isloading, setloading] = useState(false);
  const list = useSelector((state) => state.emp_list.list);
  const dispatch = useDispatch();
  useEffect(() => {
    const getEmpList = async () => {
      await axios
        .get("https://641b1f8e1f5d999a445bf904.mockapi.io/Employee")

        .then((res) => {
          dispatch(setEmpList(res.data));
          setloading(true);
        })
        .catch((err) => {
          throw err;
        });
    };
    getEmpList();
  }, [dispatch]);

  return (
    <>
      {!isloading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table table-striped ">
          <thead>
            <tr className="table-dark rounded">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            {list.map((items, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{items.id}</th>
                  <td>{items.name}</td>
                  <td>{items.salary}</td>
                  <td>{items.department}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Emp_list;
