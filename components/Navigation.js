import Link from "next/link";

function Navigation() {
  return (
    <div className="container rounded bg-secondary text-light py-4 text-center">
      <div className="row">
        <div className="col">
          <h2>Nationalize.io</h2>
        </div>
        <div className="col btn text-white">
          <Link href="/">
            <a>Search</a>
          </Link>
        </div>
        <div className="col btn text-white">
          <Link href="/CountriesList">
            <a>Countries</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
