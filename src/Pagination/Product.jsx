import { useEffect, useState } from "react";

export const Page = () => {
  const [products, setproducts] = useState([]);
  const [page, setPage] = useState(1);
  const getAllProduct = async () => {
    const d = await fetch("https://dummyjson.com/products?limit=17");
    const data = await d.json();
    setproducts(data.products);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "1200px",
          maxWidth: "100%",
          flexWrap: "wrap",
          margin: "0 auto"
        }}
      >
        {/* {console.log(products)} */}
        {products.slice(page * 10 - 10, page * 10).map((item) => {
          return (
            <div
              class="product"
              style={{
                margin: "20px",
                padding: "10px",
                background: "#D3D3D3",
                color: "white",
                width: "220px",
                height: "220px"
              }}
            >
              <div className="img">
                <img
                  src={item.thumbnail}
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    OObjectFit: "cover"
                  }}
                />
              </div>
              <div className="title">{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className="paginationMenu" style={{ margin: "30px 0" }}>
        <span
          style={{
            cursor: "pointer",
            padding: "10px",
            margin: "5px",
            // background: "grey",
            border: "1px solid grey",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={() => {
            setPage(page > 1 ? page - 1 : page);
          }}
        >
          prev
        </span>
        {[...Array(Math.ceil(products.length / 10))].map((item, i) => {
          return (
            <span
              style={{
                padding: "10px",
                margin: "5px",
                // background: "grey",
                border: "1px solid grey",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={(e) => {
                setPage(Number(e.target.innerText));
              }}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          className="nextPage"
          style={{
            cursor: "pointer",
            padding: "10px",
            margin: "5px",
            // background: "grey",
            border: "1px solid grey",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={() => {
            setPage(
              page < Array(Math.ceil(products.length / 10)).length
                ? page + 1
                : page
            );
          }}
        >
          next
        </span>
      </div>
    </>
  );
};
