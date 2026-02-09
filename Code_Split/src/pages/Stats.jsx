import { useEffect, useState, useMemo } from "react";

const expensiveCalculation = () => {
  let total = 0;
  for (let i = 0; i < 50_000_0; i++) {
    total += Math.sqrt(i) * Math.random();
  }

  console.timeEnd("Heavy computation");
  return total.toFixed(2);
};

export default function Stats({className}) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

const expensiveResult = useMemo(()=>{
    const result = expensiveCalculation();
    return result
},[])
  useEffect(() => {
    // simulate API + computation delay
    const timer = setTimeout(() => {
     
      setResult(expensiveResult);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${className} py-16 px-8 bg-gray-100`}>
      <h3 className="text-3xl font-bold text-center mb-6">
        Platform Statistics
      </h3>

      {loading ? (
        <p className="text-center text-lg animate-pulse">
          Crunching data... ⏳
        </p>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-2">Computed Value</p>
          <p className="text-4xl font-bold text-indigo-600">
            {result}
          </p>
        </div>
      )}
    </section>
  );
}

