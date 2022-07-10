import { useEffect, useState } from "react";
import "./Stylesheets/App.css";
import PullToRefresh from "react-simple-pull-to-refresh";
import Header from "./components/header";
import HC3CardView from "./components/HC3/HC3CardView";
import HC9CardView from "./components/HC9/HC9CardView";
import HC1CardView from "./components/HC1/HC1CardView";
import HC5CardView from "./components/HC5/HC5CardView";
import HC6CardView from "./components/HC6/HC6CardView";
import data from "./data";
import loading from "./assets/loading.gif";
const App = () => {
  const [Refresh, setRefresh] = useState(false);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    //setting data in state
    data().then((data) => {
      setData1(data);
    });
  }, [Refresh]);
  //refresh
  const refresh = () => {
    const current = Refresh;
    setRefresh(!current);
  };
  return (
    <>
      <Header />
      {data1.HC3Cards === undefined ? (
        <div
          style={{ alignSelf: "center", textAlign: "center", marginTop: "50%" }}
        >
          <img
            src={loading}
            style={{
              alignSelf: "center",
              width: "10%",
              height: "10%",
            }}
          />
        </div>
      ) : (
        <div className="cards-container">
          <PullToRefresh onRefresh={refresh}>
            {/* rendering all components */}
            <HC3CardView cardsData={data1.HC3Cards} />
            <HC6CardView cardsData={data1.HC6Cards} />
            <HC5CardView cardsData={data1.HC5Cards} />
            <HC9CardView cardsData={data1.HC9Cards} />
            <HC1CardView cardsData={data1.HC1Cards} />
          </PullToRefresh>
        </div>
      )}
    </>
  );
};
export default App;
