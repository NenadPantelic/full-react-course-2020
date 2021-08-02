import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  return <h2>{loading ? "Loading..." : "Multiple returns"}</h2>;
};

export default MultipleReturns;
