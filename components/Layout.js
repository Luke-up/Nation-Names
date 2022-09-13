import Navigation from "./Navigation";

//render every page with a navbar components at the top
function Layout({ children }) {
  return (
    <div className="border w-50 mx-auto p-2 mt-3 rounded border-secondary bg-dark">
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
