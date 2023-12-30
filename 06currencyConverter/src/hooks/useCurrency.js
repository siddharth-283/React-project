import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
        .then((res) => res.json())//object ko json me convert krne k liye use hota hai
          .then((res) => setData(res[currency]))// currency ki value ko set krne k liye use hota hai aur [] isliye use krte hai kyuki currency ki value change ho rhi hai
      console.log(data)
  }, [currency]);
    console.log(data)
    return data;
}

export default useCurrencyInfo;
