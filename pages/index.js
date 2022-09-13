import React from "react";
import Link from "next/link";

//Main search entry page
export default function Home() {
  const [name, setName] = React.useState("");

  return (
    <div className="container border p-2 border-secondary rounded bg-white mt-2">
      <p className="text-center fs-5">
        This app searches the globe to find the countries that are most likely
        to have people with a particular name. <br />
        Type in any name you can think of and hit submit!
      </p>
      <input
        className="w-75 m-2 rounded"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <Link href={"/" + name}>
        <a className="btn-success p-1 ms-4">Submit</a>
      </Link>
    </div>
  );
}
