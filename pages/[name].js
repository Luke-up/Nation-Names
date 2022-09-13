import Alpha2Codes from "../alpha2Code.json";

//fetch function receiving the search term from the address bar (query)
export const getServerSideProps = async ({ query }) => {
  const res = await fetch(`https://api.nationalize.io?name=${query.name}`);
  const data = await res.json();

  //function passes the searchterm and results as props
  return {
    props: {
      results: data,
      name: query,
    },
  };
};

//function destructures props and renders a list of results
function Name({ results, name }) {
  let countries = results.country;
  return (
    <div className="container border p-2 border-secondary rounded bg-white mt-2">
      <h1 className="text-center">Name: {name.name}</h1>
      {countries.map((country) => {
        const code = country.country_id;
        return (
          <p className="fs-2" key={country.country_id}>
            {Alpha2Codes[code]}{" "}
            <span className="fs-6 border rounded bg-secondary text-white border-dark border-2 ">
              {" "}
              {Math.round(country.probability * 100)}%
            </span>
          </p>
        );
      })}
    </div>
  );
}

export default Name;
