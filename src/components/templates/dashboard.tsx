import * as React from "react";

const Dashboard = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [templateReady, setTemplateReady] = React.useState<boolean>(false);
  const [mockData, setMockData] = React.useState<
    { [key: string]: string } | {}
  >({});

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const load = () => {
    setLoading(true);
  };

  React.useEffect(() => {
    setMockData({
      "Size of AI database: ": "10 Bytes",
      "Total amount of moves stored: ": "100",
      "Amount of moves with win chance >= 90%: ": "0",
      "Amount of moves with win chance <= 10%: ": "0",
      "Percentage of moves with win chance >= 90%: ": "0%",
      "Percentage of moves with win chance <= 10%: ": "0%",
    });
    setTemplateReady(true);
  }, []);

  return (
    <>
      {templateReady && (
        <>
          <div className="headlineOne">
            <h1>Chess AI Dashboard</h1>
          </div>

          <div className="content">
            <div className="contentBox">
              <div className="headlineTwo">
                <h2>Run the AI with your configuration</h2>
              </div>
              <form onSubmit={submitHandler}>
                <div className="labelInput">
                  <label>How many runs? (between 1 and 20):</label>
                  <input type="number" min="1" max="20" name="runs" value="1" />
                </div>
                <div className="labelInput">
                  <label>
                    What is the max turn limit? (between 1 and 500):
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    name="turnLimit"
                    value="250"
                  />
                </div>
                <div className="submit">
                  <button type="submit" name="runAI" onClick={load}>
                    Run the AI
                  </button>
                  <div
                    className={loading ? "loaderVisible" : "loaderInvisible"}
                  ></div>
                </div>
              </form>
            </div>

            <div className="contentBox">
              <div className="headlineTwo">
                <h2>Current Learning Progress</h2>
              </div>
              {Object.keys(mockData).length > 0 ? (
                <div>
                  {Object.entries(mockData).map((item) => {
                    return (
                      <div className="labelValue">
                        <div className="bodyText">{item[0]}</div>
                        <div className="bodyText">{item[1]}</div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
