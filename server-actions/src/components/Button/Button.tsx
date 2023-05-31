"use client";

import { sampleActions } from "@/actions/sampleAction";
import React, { useState, useTransition } from "react";

export default function Button() {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<any>({});

  async function handleClick() {
    console.log("Click on Button and will be on Clinet");
    startTransition(async () => {
      const response = await sampleActions("Message for server ");
      console.log(response);
      setResponse(response);
    });
  }
  return (
    <div>
      {isPending && <h1>Loading....</h1>}
      <button onClick={handleClick}>Button</button>

      <pre>{JSON.stringify(response, null, 4)}</pre>
    </div>
  );
}
