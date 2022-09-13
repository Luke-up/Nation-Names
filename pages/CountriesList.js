import Alpha2Codes from "../alpha2Code.json";

//page containing a list of all possible countries
export default function Home() {
  const Allcountries = Object.values(Alpha2Codes);
  return (
    <div className="container border p-2 border-secondary rounded bg-white mt-2">
      <div className="row">
        {Allcountries.map((country) => {
          return (
            <div key={country.key} className="col-6">
              {country}
            </div>
          );
        })}
      </div>
    </div>
  );
}
