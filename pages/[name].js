import Alpha2Codes from "../alpha2Code.json";

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(`https://api.nationalize.io?name=${query.name}`);
  const data = await res.json();

  return {
    props: {
      results: data,
      name: query,
    },
  };
};

function Name({ results, name }) {
  let countries = results.country;
  return (
    <div className="container border p-2 border-secondary rounded bg-white mt-2">
      <h1 className="text-center">Name: {name.name}</h1>
      {countries.map((country) => {
        const code = country.country_id;
        console.log(code);
        console.log(Alpha2Codes[code]);
        return (
          <p key={country.country_id}>
            {Alpha2Codes[code]}
            {", "}
            <span> probability: {Math.round(country.probability * 100)}%</span>
          </p>
        );
      })}
    </div>
  );
}

export default Name;
