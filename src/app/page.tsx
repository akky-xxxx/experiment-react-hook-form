import Image from "next/image"

import type { FC } from "react"

const TopPage: FC = () => (
  <main>
    <div>
      <p>
        Get started by editing&nbsp;
        <code>src/app/page.tsx</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          By{" "}
          <Image
            priority
            alt="Vercel Logo"
            height={24}
            src="/vercel.svg"
            width={100}
          />
        </a>
      </div>
    </div>

    <div>
      <Image
        priority
        alt="Next.js Logo"
        height={37}
        src="/next.svg"
        width={180}
      />
    </div>

    <div>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>
          Learn <span>-&gt;</span>
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>
          Templates <span>-&gt;</span>
        </h2>
        <p>Explore the Next.js 13 playground.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>
          Deploy <span>-&gt;</span>
        </h2>
        <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </a>
    </div>
  </main>
)

export default TopPage
