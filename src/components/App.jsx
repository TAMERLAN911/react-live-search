import React, { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Adidas",
      price: 3500,
      image: "https://a.lmcdn.ru/img600x866/R/T/RTLAAK800701_14483556_1_v1.jpg",
      id: 1,
    },

    {
      name: "Puma",
      price: 2500,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/380810/04/fnd/RUS/w/1000/h/1000/fmt/png",
      id: 2,
    },

    {
      name: "Asics",
      price: 1500,
      image:
        "https://sneakerstudio.ru/rus_pl_ZHENSKIE-KROSSOVKI-Asics-Gel-1130-1202A164-105-1031907_1.jpg",
      id: 3,
    },

    {
      name: "Bona",
      price: 800,
      image:
        "https://2krossovka.ru/image/cache/catalog/product/43/67/3be44392eca207d7a327aadfa574/DSC_0107%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-1000x800.jpg",
      id: 4,
    },

    {
      name: "Nike",
      price: 4000,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c21a971f-eafd-4c8f-b523-a38fa8a8eb1f/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-lv8-x7SbPm.png",
      id: 5,
    },

    {
      name: "Jordans",
      price: 3500,
      image:
        "https://outmaxshop.ru/components/com_jshopping/files/img_products/906/nike-air-jordan-4-retro-906-1.jpg",
      id: 6,
    },
  ]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const newProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <div className="main">
      <form action="">
        <input type="text" onChange={handleChange} value={text} />
      </form>

      <div className="addCard">
        {newProducts.map((item, id) => {
          return (
            <div className="mainCard" key={id}>
              <div className="header">
                <img src={item.image} alt="" width="100%" height="100%" />
              </div>
              <div className="body">
                <div className="bodyText">
                  <h2>{item.name}</h2>
                  <h3>${item.price}</h3>
                </div>
                <div className="bodyBtn">
                  <button>Детали</button>
                </div>
              </div>

              <div className="footer">
                <hr />

                <div className="footerText">
                  {" "}
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                  </p>{" "}
                </div>

                <div className="footerBtn">
                  {" "}
                  <button>Добавить в корзину</button>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
