import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://app.zipcodebase.com/api/v1/search?codes=152123,10006&apikey=21e42700-f479-11ed-aaed-5d81ef52ae4c"
      );
      // facing some issue with your AIP it works fine with other APIs.
      const data = await response.json();
      setData(data);
    };
    fetchdata();
  },[]);
  return (
    <div className="App">
      {data?.results?.["10006"]?.map((el) => (
        <h1>{el.city}</h1>
      ))}
    </div>
  );
}

export default App;
