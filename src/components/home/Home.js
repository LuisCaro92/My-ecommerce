import Card from "../card/Card";

function Home() {
  return (
    <div className="">s
      <div className="container">
        <div className="grid grid-cols-1 m-10 gap-3 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  items-center justify-center">
       
          <Card className="col-span-2"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
