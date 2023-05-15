import Image from "next/image";
// import client1 from "../Resources/Images/clients1.jpeg"
const SlideItem = ({reviews}) => {
    const {name,photo,review} = reviews || {};
  return (
    <div
      className="bg-white w-full lg:w-80 p-5 rounded-sm shadow-md"
      style={{ margin: "10px" }}
    >
      <div className="flex space-x-3">
        <Image
          className="h-12 w-12 rounded-full border-2 border-white shadow-md"
          src={"http://myaddmin.virtualxpose.com.au/driving/drivierImages/"+photo}
          width="80"
          height={80}
          alt="Image"
        />
        <div>
          <h3>{name}</h3>
          <div className="text-yellow-400 flex space-x-1">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <p className="text-gray-500">
          {review}
        </p>
      </div>
      <br></br>

      <p className="itelic">{name}</p>
    </div>
  );
};

export default SlideItem;
