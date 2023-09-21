import Card from "../card/Card";

function Home() {
  return (
    <div className="mt-20">
      <div className="container mt-40">
        <div className="grid grid-cols-1 m-10 gap-3 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  items-center justify-center">
       
          <Card className="col-span-2"/>
                 
          <div className=" bg-green-300">
                columna2
          </div>
          <div className=" bg-yellow-300">
                columna3
          </div>
          <div className=" bg-red-500">
                columna3
          </div>
          <div className=" bg-gray-500">
                columna3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
