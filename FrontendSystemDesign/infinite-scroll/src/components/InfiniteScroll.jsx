import React, { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroll = (props) => {
  const { renderListItem, getData, listData, query } = props;

  const page = useRef(1);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    getData(query, page.current).finally(() => {
      setLoading(false);
    });
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const observer = useRef(null);
  const lastElementObserver = useCallback((node) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          page.current += 1;
          fetchData();
        }
      },
      { threshold: 1.0 }
    );

    if (node) observer.current.observe(node);
  });

  const renderList = useCallback(() => {
    return listData.map((item, index) => {
      if (index === listData.length - 1)
        return renderListItem(item, index, lastElementObserver);
      return renderListItem(item, index, null);
    });
  });

  return (
    <div>
      {renderList()}
      {loading ? "Loading Data.............." : null}
    </div>
  );
};

export default InfiniteScroll;
