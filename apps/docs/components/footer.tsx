import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <h1 className="text-sm tracking-wide">
        Built by{" "}
        <Link
          href="https://x.com/ankitmukhya"
          target="_blank"
          className="underline underline-offset-2"
        >
          Ankit
        </Link>
        . The source code is available on{" "}
        <Link
          href="https://github.com/ankitmukhia/pxui"
          target="_blank"
          className="underline underline-offset-2"
        >
          Github
        </Link>
      </h1>
    </div>
  );
};
