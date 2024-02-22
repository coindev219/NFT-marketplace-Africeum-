import React, { useState } from "react";
import AnimatedPage from "../AnimatedPage";
import Profile from "../../components/Profile";
import useArtists from "../../hooks/useArtists";


function Creators() {
  const [layout, setLayout] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [group1, setGroup1] = useState(false);
  const [group2, setGroup2] = useState(false);
  const [group3, setGroup3] = useState(false);

  const [fetchParams, setFetchParams] = useState({
    sortBy: "created_at",
    sortDir: "desc",
    page: 0,
    perPage: 24,
    verified:false
  });

  const { items, hasMore } = useArtists(fetchParams);

  const handleSortBy = (value) => {
    if (value == "0") {
      setFetchParams((prev) => ({
        ...prev,
        sortBy: "created_at",
        sortDir: "desc",
        page: 0,
      }));
    } else if (value == "1") {
      setFetchParams((prev) => ({
        ...prev,
        sortBy: "created_at",
        sortDir: "asc",
        page: 0,
      }));
    } else if (value == "2") {
      setFetchParams((prev) => ({
        ...prev,
        sortBy: "follower",
        sortDir: "desc",
        page: 0,
      }));
    }
  };

  const handleLoadMore = () => {
    setFetchParams((prev) => ({
      ...prev,
      page: (prev?.page || 0) + 1,
    }));
  };

  console.log("creators", items);


  const [filterVerify,setFilterVerify] = useState(false)

  const handleFilter = () => {
    setFilterVerify(!filterVerify)
    setFetchParams((prev) => ({
        ...prev,
        verified:!filterVerify
      }));
  }

  return (
    <AnimatedPage>
      <div className="pb-20 creators-page mt-[70px]">
        <div className="px-4 lg:px-10">
          <div className="creators-page-inner">
            <div className="sticky left-0 z-20 flex items-center self-start justify-between w-full py-6 filter-header top-11">
              <div className="left">
                <button
                  className={`flex items-center shadow-md text-[13px] py-2 px-4 rounded-3xl bg-white ${
                    filterActive ? "hidden" : "inline-block"
                  }`}
                  onClick={() => {
                    setFilterActive(!filterActive);
                  }}
                >
                  <svg
                    className="mr-1"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V3.085C0.999928 3.29147 1.04248 3.49573 1.125 3.685V3.715C1.19564 3.87549 1.2957 4.02133 1.42 4.145L4.5 7.205V10.5C4.49983 10.585 4.52132 10.6686 4.56244 10.7429C4.60355 10.8173 4.66294 10.88 4.735 10.925C4.81457 10.9743 4.90639 11.0003 5 11C5.07827 10.9995 5.15534 10.9807 5.225 10.945L7.225 9.945C7.30746 9.90345 7.3768 9.83988 7.42534 9.76133C7.47388 9.68279 7.49972 9.59233 7.5 9.5V7.205L10.56 4.145C10.6843 4.02133 10.7844 3.87549 10.855 3.715V3.685C10.9444 3.49722 10.9938 3.29289 11 3.085V2.5C11 2.10218 10.842 1.72064 10.5607 1.43934C10.2794 1.15804 9.89782 1 9.5 1ZM6.645 6.645C6.59866 6.69172 6.562 6.74713 6.53711 6.80805C6.51223 6.86897 6.49962 6.9342 6.5 7V9.19L5.5 9.69V7C5.50038 6.9342 5.48777 6.86897 5.46289 6.80805C5.438 6.74713 5.40134 6.69172 5.355 6.645L2.705 4H9.295L6.645 6.645ZM10 3H2V2.5C2 2.36739 2.05268 2.24021 2.14645 2.14645C2.24022 2.05268 2.36739 2 2.5 2H9.5C9.63261 2 9.75979 2.05268 9.85355 2.14645C9.94732 2.24021 10 2.36739 10 2.5V3Z"
                      fill="#11110F"
                    ></path>
                  </svg>{" "}
                  Filter
                </button>
              </div>
              <div className="flex items-center right">
                <div className="layout">
                  <button
                    className={`flex items-center shadow-md text-[13px] py-2 px-4 rounded-3xl bg-white ${
                      layout ? "layout-active" : ""
                    }`}
                    onClick={() => {
                      setLayout(!layout);
                    }}
                  >
                    <span className="transition ease-in opacity-30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"></path>
                      </svg>
                    </span>
                    <span className="transition ease-in opacity-30">
                      <svg viewBox="0 0 24 24" width="24" height="20">
                        <path d="M3,9H7V5H3V9M3,14H7V10H3V14M8,14H12V10H8V14M13,14H17V10H13V14M8,9H12V5H8V9M13,5V9H17V5H13M18,14H22V10H18V14M3,19H7V15H3V19M8,19H12V15H8V19M13,19H17V15H13V19M18,19H22V15H18V19M18,5V9H22V5H18Z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="relative ml-5 sort-dropdown">
                  <label htmlFor="sort-dropdown-select">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M7.50047 2.44727H17.2498C17.4488 2.44727 17.6396 2.36825 17.7802 2.2276C17.9209 2.08694 17.9999 1.89618 17.9999 1.69727C17.9999 1.49835 17.9209 1.30759 17.7802 1.16694C17.6396 1.02628 17.4488 0.947266 17.2498 0.947266H7.50047C7.30153 0.947266 7.11074 1.02628 6.97007 1.16694C6.82939 1.30759 6.75037 1.49835 6.75037 1.69727C6.75037 1.89618 6.82939 2.08694 6.97007 2.2276C7.11074 2.36825 7.30153 2.44727 7.50047 2.44727Z"
                        fill="#292C36"
                      ></path>
                      <path
                        d="M17.2498 5.13184H7.50047C7.40196 5.13184 7.30442 5.15124 7.21342 5.18893C7.12241 5.22662 7.03972 5.28186 6.97007 5.35151C6.90041 5.42115 6.84516 5.50383 6.80746 5.59482C6.76977 5.68582 6.75037 5.78334 6.75037 5.88184C6.75037 5.98033 6.76977 6.07785 6.80746 6.16885C6.84516 6.25984 6.90041 6.34252 6.97007 6.41217C7.03972 6.48181 7.12241 6.53705 7.21342 6.57475C7.30442 6.61244 7.40196 6.63184 7.50047 6.63184H17.2498C17.4488 6.63184 17.6396 6.55282 17.7802 6.41217C17.9209 6.27151 17.9999 6.08075 17.9999 5.88184C17.9999 5.68292 17.9209 5.49216 17.7802 5.35151C17.6396 5.21085 17.4488 5.13184 17.2498 5.13184Z"
                        fill="#292C36"
                      ></path>
                      <path
                        d="M17.2498 9.31641H7.50047C7.30153 9.31641 7.11074 9.39542 6.97007 9.53608C6.82939 9.67673 6.75037 9.86749 6.75037 10.0664C6.75037 10.2653 6.82939 10.4561 6.97007 10.5967C7.11074 10.7374 7.30153 10.8164 7.50047 10.8164H17.2498C17.4488 10.8164 17.6396 10.7374 17.7802 10.5967C17.9209 10.4561 17.9999 10.2653 17.9999 10.0664C17.9999 9.86749 17.9209 9.67673 17.7802 9.53608C17.6396 9.39542 17.4488 9.31641 17.2498 9.31641Z"
                        fill="#292C36"
                      ></path>
                      <path
                        d="M4.5663 2.14323C4.64052 2.14331 4.71309 2.12582 4.77481 2.09297C4.83653 2.06012 4.88462 2.01339 4.91297 1.95872C4.94132 1.90405 4.94866 1.8439 4.93406 1.7859C4.91945 1.72789 4.88355 1.67466 4.83093 1.63295L3.00092 0.174987C2.86026 0.0629409 2.66955 0 2.47069 0C2.27184 0 2.08112 0.0629409 1.94047 0.174987L0.111428 1.63295C0.058803 1.67466 0.0229094 1.72789 0.00830231 1.7859C-0.00630477 1.8439 0.00103317 1.90405 0.029385 1.95872C0.0577368 2.01339 0.105824 2.06012 0.167546 2.09297C0.229267 2.12582 0.30184 2.14331 0.376055 2.14323H1.72157V9.3167H0.376055C0.301757 9.31647 0.229049 9.33385 0.167178 9.36664C0.105307 9.39943 0.0570681 9.44615 0.0285954 9.50085C0.00012265 9.55556 -0.00729719 9.61577 0.00727941 9.67385C0.021856 9.73192 0.0577704 9.78523 0.110456 9.82699L1.94047 11.2849C2.08112 11.397 2.27184 11.4599 2.47069 11.4599C2.66955 11.4599 2.86026 11.397 3.00092 11.2849L4.83093 9.82699C4.88355 9.78527 4.91945 9.73204 4.93406 9.67404C4.94866 9.61604 4.94132 9.55588 4.91297 9.50121C4.88462 9.44654 4.83653 9.39982 4.77481 9.36697C4.71309 9.33412 4.64052 9.31662 4.5663 9.3167H3.22177V2.14323H4.5663Z"
                        fill="#292C36"
                      ></path>
                    </svg>{" "}
                    Sort by
                  </label>
                  <select
                    onChange={(e) => handleSortBy(e.target.value)}
                    className="h-[36px] pr-5 shadow-md rounded-3xl pl-24 bg-white outline-none text-sm border-none text-black/60"
                    name="sort-dropdown-select"
                    id="sort-dropdown-select"
                  >
                    <option value="0">Date Listed: Newest</option>
                    <option value="1">Date Listed: Oldest</option>
                    <option value="2">Date Listed: Flowers</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className={`with-left-filter flex ${
                filterActive ? "filter-active-wrap" : ""
              }`}
            >
              <div
                className={`left-filter overflow-hidden bg-white rounded-3xl lg:sticky fixed z-50 top-16 lg:block lg:left-0 lg:self-start transition ease-in ${
                  filterActive
                    ? "filter-active w-[300px] py-5 px-6 left-0"
                    : "lg:w-0 w-[300px] -left-full"
                }`}
              >
                <div
                  className={`left-filter-inner ${
                    filterActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="pb-2 title">
                    <h2 className="flex items-center justify-between text-[22px] font-bold leading-[1] text-black">
                      Filter{" "}
                      <button
                        onClick={() => {
                          setFilterActive(!filterActive);
                        }}
                      >
                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 6.00019H3.41002L6.71002 2.71019C6.89832 2.52188 7.00411 2.26649 7.00411 2.00019C7.00411 1.73388 6.89832 1.47849 6.71002 1.29019C6.52172 1.10188 6.26632 0.996094 6.00002 0.996094C5.73372 0.996094 5.47832 1.10188 5.29002 1.29019L0.290018 6.29019C0.198978 6.38529 0.127613 6.49743 0.0800184 6.62019C-0.0199996 6.86365 -0.0199996 7.13672 0.0800184 7.38019C0.127613 7.50294 0.198978 7.61508 0.290018 7.71019L5.29002 12.7102C5.38298 12.8039 5.49358 12.8783 5.61544 12.9291C5.7373 12.9798 5.86801 13.006 6.00002 13.006C6.13203 13.006 6.26274 12.9798 6.3846 12.9291C6.50645 12.8783 6.61706 12.8039 6.71002 12.7102C6.80375 12.6172 6.87814 12.5066 6.92891 12.3848C6.97968 12.2629 7.00582 12.1322 7.00582 12.0002C7.00582 11.8682 6.97968 11.7375 6.92891 11.6156C6.87814 11.4937 6.80375 11.3831 6.71002 11.2902L3.41002 8.00019H11C11.2652 8.00019 11.5196 7.89483 11.7071 7.70729C11.8947 7.51976 12 7.2654 12 7.00019C12 6.73497 11.8947 6.48062 11.7071 6.29308C11.5196 6.10554 11.2652 6.00019 11 6.00019Z"
                            fill="#11110F"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <p className="text-sm text-black opacity-80">
                      Found ( {items.length} results)
                    </p>
                  </div>
                  <form className="filter-form-wrap h-[calc(100vh-80px)] overflow-scroll">
                    <div className="group">
                      <h3
                        className="flex items-center justify-between my-3 text-base text-black cursor-pointer"
                        onClick={() => {
                          setGroup1(!group1);
                        }}
                      >
                        Verification{" "}
                        <svg
                          className={`transition ease-in ${
                            group1 ? "rotate-90" : ""
                          }`}
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                        </svg>
                      </h3>
                      <ul
                        className={`transition pt-1 ease-in relative ${
                          group1 ? "block" : "hidden"
                        }`}
                      >
                        <li className="flex items-center mb-2">
                          <input
                            className="w-5 h-5 mr-2 rounded-md"
                            onChange={() => handleFilter()}
                            checked={filterVerify}
                            type="checkbox"
                            name="verificationOnly"
                            id="verificationOnly"
                          />{" "}
                          <label className="text-sm" htmlFor="verificationOnly">
                            Verified Only
                          </label>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className={`all-nfts-wrapper grid transition ease-in gap-7 min-h-[450px] ${
                  filterActive
                    ? "filter-active w-full lg:w-[calc(100%-300px)] lg:pl-8"
                    : "w-full"
                } ${
                  layout
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 layout-active"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6"
                }`}
              >
                {items.map((CreatorsPost, index) => {
                  return <Profile key={index} postDetails={CreatorsPost} />;
                })}
              </div>
            </div>

            {hasMore && <button className="px-6 py-2 mt-6 mb-24 font-bold bg-gray-300 border border-gray-800 rounded-3xl" 
                onClick={() => {handleLoadMore()}}>Load More</button>}
                
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Creators;
