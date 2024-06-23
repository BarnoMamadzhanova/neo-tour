import React from "react";
import classes from "./Recommended.module.css";
import { Recommendations } from "../Recommendations/Recommendations";
import recommendations from "../../recommendations.json";
// import { getRecommendedData } from "./api";

function Recommended() {
  //Functionality for fetching data
  // const [recommendedData, setRecommendedData] = useState([]);

  // useEffect(() => {
  //   const fetchRecommendedData = async () => {
  //     try {
  //      const recommended = await getRecommendedData();
  //      setRecommendedData(recommended);
  //     } catch (error) {
  //       console.error("Error fetching recommended data", error);
  //     }
  //   };

  //   fetchRecommendedData();
  // }, []);

  return (
    <section className={classes.recommended}>
      <div className={classes.container}>
        <h2>Recommended</h2>
        <div className={classes.grid}>
          <Recommendations
            recommendations={recommendations}
            // recommendations={recommendedData}
          />
        </div>
      </div>
    </section>
  );
}

export default Recommended;
