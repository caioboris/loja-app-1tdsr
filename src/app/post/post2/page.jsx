import Image from "next/image";
import Link from "next/link";

export default function Post2() {
  return (
    <div>
        <h1>POST 2</h1>
      <Image
        src="/img/avocado.png"
        alt="Image Post 2"
        width={200}
        height={200}>
      </Image>
      <figcaption><Link href="/">Go Back to Home Page</Link></figcaption>

    </div>
  )
}
