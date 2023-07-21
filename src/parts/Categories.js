import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

const Categories = ({ data }) => {
  return data?.map(
    (category, index1) =>
      category.itemId.length > 0 && (
        <section className="container" key={`category-${index1}`}>
          <Fade bottom>
            <h4 className="mb-3 font-weight-medium">{category.name}</h4>
            <div className="container-grid">
              {category.itemId.map((item, index2) => (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={
                            item.imageId[0]
                              ? `${process.env.REACT_APP_BACKEND_HOST}/${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href={`/properties/${item._id}`}
                          className="stretched-link d-block text-gray-800"
                        >
                          <h5 className="h4">{item.title}</h5>
                          <span className="text-gray-500">
                            {item.city}, {item.country}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Fade>
                </div>
              ))}
            </div>
          </Fade>
        </section>
      )
  );
};

export default Categories;
