const Nav = () => {
  return (
    <nav className="w-screen bg-teal-800 border-gray-200 px-2 sm:px-4">
      <div className="p-4 flex items-center align-center">
        <div className="w-2/10 inline-block">
          <img
            className="w-8 h-8 lg:w-16 lg:h-16"
            src="/assets/computer-science.png"
            alt="Computer science"
          />
        </div>
        <h1 className="text-center w-10/12 text-2xl text-white inline-block">
        Mind Check
        </h1>
      </div>
    </nav>
  );
};

export default Nav;
