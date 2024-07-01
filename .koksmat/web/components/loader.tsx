import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function Loader(props: { loading: boolean }) {
  const { loading } = props;

  if (loading) {
    return (
      <div className="min-h-[90vh] min-w-[97vw] flex flex-col items-center justify-center">
        <ThreeCircles
          height="100"
          width="100"
          color="#2D32AA"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  } else return null;
}

export default Loader;
