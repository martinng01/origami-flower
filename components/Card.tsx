import React, { ReactElement } from "react";
import { ImageProps } from "next/image";
import Link from "next/link";

export const Card = ({
  title,
  link,
  image,
  description,
}: {
  title: string;
  link: string;
  image: ReactElement<ImageProps>;
  description: string;
}) => {
  return (
    <div className="card w-72 h-full bg-base-100 shadow-xl hover:scale-[1.02] transition-all duration-300">
      <Link href={link}>
        <figure>{image}</figure>
        <div className="card-body border-t-2">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
    </div>
  );
};
