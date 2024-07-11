"use client"
import { testSanity } from "./libs/sanity"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    testSanity()
  })

  return (
    <main>
      Hello World!
    </main>
  );
}
