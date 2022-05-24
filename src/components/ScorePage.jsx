const ScorePage = ({ score, totale }) => {
  let greeting = "Good work !";
  let niveau = "";

  if (score >= totale * 0.7) {
    niveau = "Grade A";
  } else if (score < totale * 0.7 && score >= totale * 0.5) {
    niveau = "Grade B";
  } else {
    niveau = "Grade C";
  }
  return (
    <section>
        <div className="bg-blue-900 py-5 px-6 text-base text-gray-100" role="alert">
          Your score is {" "}
          <span class="text-md inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">
            {score}/{totale}
          </span>
        </div>

        <div class="text-center bg-blue-50 text-gray-800 py-20 px-6">
          <h1 class="text-5xl font-bold mt-0 mb-6">{greeting}</h1>
          <h3 class="text-3xl font-bold mb-8 text-gray-800">
            You have reached <span class="text-green-600">{niveau}{" "}</span>
          </h3>
        </div>

    
    </section>
  );
};

export default ScorePage;
