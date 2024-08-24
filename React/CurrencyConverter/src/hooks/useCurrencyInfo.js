import { useEffect, useState } from "react";

function useCurrencyInfo(date,currency) {
  //when one component is unmounted and it's  life cycle get triggered then we use the useEffect
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
      
    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
