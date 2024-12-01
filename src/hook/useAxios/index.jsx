import axios from "axios";
import { useEffect, useState } from "react";
import { request } from "../../server";

const UseAxios = ({ url, method = "GET", body, params}) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    request({
      url,
      method,
      data: body,
      headers: { "Content-type": "application/json", ...params },
    })
      .then((data) => {
        setdata(data.data);
        setloading(false);
      })
      .catch((error) => {
        seterror(error.message);
        setloading(false);
      });
  }, []);
  return { data, loading};
};

export default UseAxios;
