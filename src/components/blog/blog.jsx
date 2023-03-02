import React, { useState, useRef, useEffect } from "react";
import { MdSearch, MdExpandMore, MdExpandLess } from "react-icons/md";
import { data } from "../../data";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

export const Blog = () => {
  const [isShow, setIsShow] = useState(false);
  const [loadBlog, setLoadBlog] = useState(6);


  // const [filterBlog, setFilterBlog] = useState(new Array(data.blogData.length).fill(false));
  const [filterBlog, setFilterBlog] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState([]);
  const [list, setList] = useState([]);
  console.log(filterBlog)

  const showData = () => {
    setLoadBlog(loadBlog + 2);
  };

  const showDropdown = () => {
    if (isShow === false || isShow === "") {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  const checkbox = useRef();
  const filterHandler = (e, health) => {
    // console.log(health.target.value);
    // console.log(checkbox.target.value)
    // var updatedList = [...checked];
    // if (checkbox.current.checked) {
    //   console.log(event.target.value);
    // }
    // if (e.target.checked) {
    //   setFilterBlog(prev => [...prev, health]);
    //   const newInitialList = data?.blogData.filter((list, index) => list.index !== health.heading);
    //   console.log(newInitialList);
    //   setList(newInitialList);
    // }


    const updatedCheckState = filterBlog.map((item, index) => index === e ? !item : item);

    // setChecked(updatedList);
    // console.log(updatedList);
    // } else {
    //   setFilterBlog("");
    // }
    // alert("hi")
    // // if (checkbox.current.checked) {
    //   // setFilterBlog(health.target.value);
    //   const otherHealth = checkbox.current.filter((name) => {
    //     return name !== health.heading;
    //   })
    //   setFilterBlog([...otherHealth])
    // } else {
    //   setFilterBlog("");
    // }
    setChecked(updatedCheckState);
  };

  // const inputHandler = (value) => {
  //   return value;
  // };

  return (
    <main>
      <section className="blog-container">
        <div className="blog-container__blog-header">
          <h1 className="blog-container__blog-header__title">Baseline Blog</h1>
          <h2 className="blog-container__blog-header__subtitle">
            Read the latest collection of Baseline stories and news. From
            clinical trails to COVID-19 efforts and beyond, we're accelerating
            scientific discovery.
          </h2>

          <div className="blog-container__blog-header__controls">
            <form className="blog-container__blog-header__controls__search">
              <div className="search-wrapper">
                <input placeholder="Search Posts" />
                <button>
                  <MdSearch />
                </button>
              </div>
            </form>

            <div className="blog-filter-ui">
              <button onClick={showDropdown} className="blog-filter-btn">
                <span>Filter posts by</span>
                <span>{isShow ? <MdExpandMore /> : <MdExpandLess />}</span>
              </button>

              {isShow && (
                <>
                  <form className="blog-filter-form">
                    <div className="blog-filter-container">
                      <div className="blog-filter-showAll">
                        <div className="label-group">
                          <input name="Show All" type="checkbox" />
                          Show All
                          <span className="checkbox-icon"></span>
                        </div>
                      </div>

                      {data?.blogData.map((health, index) => {
                        return (
                          <>
                            <div className="blog-filter-group" key={index}>
                              <input
                                type="checkbox"
                                onClick={(e) => filterHandler(e, index)}
                                value={health.index}
                                ref={checkbox}
                                active={active}
                                // defaultChecked={false}
                              />
                              {/* <span className="checkbox-icon" onClick={(health) => checkList(health)}> */}
                              <span className="checkbox-icon">
                                {health.heading}
                              </span>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </form>

                  <div className="blog-filter__button-container">
                    <button
                      className="blog-filter__button-container__btn"
                      onClick={filterHandler}
                    >
                      <span>Apply Filters</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          {showBtn && <button>hi</button>}
        </div>

        <div className="blog-tile">
          {data?.blogData.slice(0, loadBlog).map((item, index) => {
            return (
              <>
                {item.blogFilter.map((tile, index) => {
                  return (
                    <>
                      <article className="blog-tile__block">
                        <div className="blog-tile__block__img">
                          <img src={tile.card_img} alt="" />
                        </div>
                        <div className="blog-tile__block__content">
                          <div className="blog-tile__block__content__title">
                            <h3>{tile.title}</h3>

                            {tile.content.length > 90 ? (
                              <p>{tile.content.slice(0, 160) + "..."}</p>
                            ) : (
                              <p>{tile.content}</p>
                            )}
                          </div>

                          <div className="blog-tile__block__content__info">
                            <p>{tile.date}</p>
                            <button>
                              <p>
                                <span>Read more</span>
                                <span>
                                  <AiOutlinePlus />
                                </span>
                              </p>
                            </button>
                          </div>
                        </div>
                      </article>
                    </>
                  );
                })}
              </>
            );
          })}
        </div>

        {/* <div className="study-tile__load-more">
          {loadBlog < data?.studyTiles.length ? (
            <button onClick={showData}>
              <span>
                <FaPlus />
              </span>

              <span>Load more</span>
            </button>
          ) : null}
        </div> */}
      </section>
    </main>
  );
};
