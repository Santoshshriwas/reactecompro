import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slise1 from "./img/slide-1.png";
import slise2 from "./img/slide-2.png";
import slide5 from "./img/slide-5.jpg";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import pro1 from "./img/pro1.jpg";

import Product from "./database/product";
import Product1 from "./database/product1";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./productslice";

const Home = () => {
  const mycart = useSelector((state) => state.addtocart.cart);
  const dispatch = useDispatch();
  const mydataAdd = (id, name, detail, image, price, quantity) => {
    let productObj = {
      id: id,
      name: name,
      image: image,
      detail: detail,
      price: price,
      quantity: quantity,
    };
    dispatch(addData(productObj));
  };

  console.log(mycart);
  const myAns = Product.map((key) => {
    return (
      <>
        <div className="cart-1">
          <img  width="250" src={"image/" + key.image} />
          <h4>{key.name}</h4>
          <h5>{key.detail}</h5>
          <h1>{key.price}</h1>
          <button
            className="btn-2"
            onClick={() =>
              mydataAdd(
                key.id,
                key.name,
                key.detail,
                key.price,
                key.image,
                key.quantity
              )
            }
          >
            {key.button}
          </button>
        </div>
      </>
    );
  });
  const myAns1 = Product1.map((key) => {
    return (
      <>
        <div className="Cart">
          <img  width="230" height="170px" src={"image/" + key.price} />
          <h4>{key.name}</h4>
          <h2>{key.detail}</h2>
          <h1>{key.image}</h1>
          <button
            className="btn-2"
            onClick={() =>
              mydataAdd(
                key.id,
                key.name,
                key.detail,
                key.image,
                key.price,
                key.quantity
              )
            }
          >
            {key.button}
          </button>
        </div>
      </>
    );
  });

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          number: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="avv">
            <img height="350px" width="100%" src={slise1} />
            <div className="av">
              <h1>Shoping Now Any Item</h1>
              <h4>
                Shopping as an idea and practice has seen major transitions over
                <br /> the years. Commerce businesses brought various inventions
                to make <br /> shopping more exciting, engaging, and seamless
                for the consumers.{" "}
              </h4>
              <button className="btn-4">Click me</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img height="auto" width="100%" src={slise2} /> */}
          <div className="avv">
            <img height="350px" width="100%" src={slise2} />
            <div className="av">
              <h1>Shoping Now Any HeadPhones</h1>
              <h4>
                Shopping as an idea and practice has seen major transitions over
                <br /> the years. Commerce businesses brought various inventions
                to make <br /> shopping more exciting, engaging, and seamless
                for the consumers.{" "}
              </h4>
              <button className="btn-4">Click me</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <h2
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
          marginBottom: "40px",
        }}
      >
        Explore Popular Categories
      </h2>
      <div className="main-product">
        <div className="box">
          <img src={img1} /> <br />
          <br />
        </div>
        <div className="box">
          <img src={img2} />
        </div>
        <div className="box">
          <img src={img3} /> <br />
          <br />
        </div>
        <div className="box">
          <img src={img4} /> <br />
          <br />
        </div>
        <div className="box">
          <img src={img5} /> <br />
          <br />
        </div>
        <div className="box">
          <img src={img6} /> <br />
          <br />
        </div>
      </div>
      <div className="main-product1">
        <div>
          <b>Computer & Laptop</b>
        </div>
        <div>
          <b>Digital Cameras</b>
        </div>
        <div>
          <b>Smart Phones</b>
        </div>
        <div>
          <b>Televisions</b>
        </div>
        <div>
          <b>Audio</b>
        </div>
        <div>
          <b>Smart Watches</b>
        </div>
      </div>

      <div className="baner">
        <div className="imk">
          <p style={{ marginLeft: "25px" }}>Smart Offer</p>
          <h4 style={{ marginLeft: "25px" }}>
            <b>Save $150</b> on Samsung
            <br /> Galaxy Note9
          </h4>
          <button className="btn-6" style={{ marginLeft: "25px" }}>Shop Now</button>
        </div>
        <div className="imk-1">
          <p style={{ marginLeft: "25px" }}>Time Deals</p>
          <h4 style={{ marginLeft: "25px" }}>
            <b>Bose SoundSport</b> <br /> Time Deal -30%
          </h4>
          <button className="btn-6" style={{ marginLeft: "25px" }}>Shop Now</button>
        </div>
        <div className="imk-2">
          <p style={{ marginLeft: "25px" }}>Clearance</p>
          <h4 style={{ marginLeft: "25px" }}>
            <b>GoPro</b> -Fusion 360
            <br /> Save $70
          </h4>
          <button className="btn-6" style={{ marginLeft: "25px" }}>Shop Now</button>
        </div>
      </div>

      <h1 style={{ marginLeft: "45px" }}>Recommendation For You</h1>

      <div className="main-cart">
        <div>
          <img width="250px" height="400px" src={pro1} />
        </div>
        {myAns1}
      </div>

      <h1
        style={{
          display: "grid",
          justifyItems: "center",
          marginBottom: "40px",
        }}
      >
        Trending Products
      </h1>

      <div className="main-product-1">{myAns}</div>
    </>
  );
};

export default Home;
