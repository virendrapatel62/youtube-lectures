import React from "react";

type TProps = {
  params: any;
};

export default function StudentDetailsPage(props: TProps) {
  return (
    <div>
      Student Detail Page
      <hr />
      <p>
        <pre>{JSON.stringify(props.params, null, 2)}</pre>
      </p>
    </div>
  );
}
