import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOdds } from "./action";

function App() {
  const dispatch = useDispatch();
  const { data, error, status } = useSelector((state) => state.post);

  console.log(data?.map((item) => item));

  //   console.log(data);

  useEffect(() => {
    dispatch(getOdds());
  }, []);

  return (
    <div>
      {data?.map((item) => (
        <>
          <div
            style={{
              width: "100vw",
              height: "15vh",
              backgroundColor: "lightblue",
              display: "flex",
              border: "1px solid gray",
              borderRadius: "5px",
              flexDirection: "column",
            }}
          >
            <h2 style={{ textAlign: "center" }}>{item.sport_title}</h2>
            <div
              style={{
                width: "100vw",
                height: "10vh",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                backgroundColor: "lightcyan",
                marginBottom: "50px",
              }}
            >
              <h2 style={{ marginLeft: "50px" }}>{item.home_team} (Home)</h2>
              <h2 style={{ marginLeft: "50px" }}>{item.away_team} (Away)</h2>
            </div>
          </div>

          <div>
            <div>
              <div
                style={{
                  width: "100vw",
                  backgroundColor: "purple",
                  marginTop: "50px",
                  borderRadius: "5px",
                  border: "1px solid blue",
                }}
              >
                {item?.bookmakers?.map((bookmark) => (
                  <div style={{ width: "100vw" }}>
                    <h2
                      className="headers"
                      style={{
                        marginLeft: "20px",
                        color: "gold",
                      }}
                    >
                      {bookmark.title}
                    </h2>

                    <div
                      style={{
                        width: "100vw",
                        // height: "50vh",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        // backgroundColor: "yellow",
                      }}
                    >
                      {bookmark.markets.map((market) =>
                        market.outcomes.map((outcome) => (
                          <div
                            style={{
                              backgroundColor: "gray",
                              borderRadius: "5px",
                              border: "1px solid blue",
                              // width: "50%",
                              // height: "50%",
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                            }}
                          >
                            <h4 style={{ color: "black", marginLeft: "20px" }}>
                              {outcome.name}
                            </h4>
                            <h4 style={{ color: "pink" }}>{outcome.price}</h4>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
