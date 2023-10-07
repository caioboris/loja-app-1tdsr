import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Post1() {
  return (
    <div>
      <h1>POST 1</h1>
      <Image
        src="/img/man.png"
        alt="Image Post 1"
        width={200}
        height={200}>
      </Image>
      <figcaption><Link href="/">Go Back to Home Page</Link></figcaption>
    </div>
  );
}
