import { useEffect, useState } from "react";

const useRefresh = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      console.log(refresh);
      window.location.reload();
      setRefresh(!refresh);
    }
  }, [refresh]);

  return setRefresh;
};

export default useRefresh;
