import React from "react";
import Empty from "./Empty";
import Record from "./Record";

const RecordGroup = ({ records,removeRecord }) => {
  return (
    <>
      {/* <Empty /> */}
      {records.length === 0 && <Empty />}
      {records.map((record, index) => (
        <Record key={record.id} removeRecord={removeRecord} index={index} record={record} />
      ))}
    </>
  );
};

export default RecordGroup;
