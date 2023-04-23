import React, { useEffect, useState } from "react";
import { SlidersMainStyled } from "./Category.styles";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineArrowBack } from "react-icons/md";
import { useWindowWidth } from "@react-hook/window-size";
import { ToastContainer, toast } from "react-toastify";

const SlidersMain = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const windowWidth = useWindowWidth();
  const [isEditPageShow, setIsEditPageShow] = useState(false);
  const [isCreatePageShow, setIsCreatePageShow] = useState(false);
  const [activeSliderItem, setActiveSliderItem] = useState(null);

  return (
    <SlidersMainStyled
      forWidth={`${isSidebarOpen ? "250px" : "0px"}`}
      onClick={() => {
        windowWidth <= 978 && setIsSidebarOpen(false);
      }}
    >
      <div className="content-header">
        <h3 className="title">./Sliders</h3>
        {isCreatePageShow ? (
          <button
            className="prev-btn"
            onClick={() => setIsCreatePageShow(!isCreatePageShow)}
          >
            <MdOutlineArrowBack size={20} style={{ marginRight: "5px" }} />
            Go to back
          </button>
        ) : isEditPageShow ? (
          <button
            className="prev-btn"
            onClick={() => setIsEditPageShow(!isEditPageShow)}
          >
            <MdOutlineArrowBack size={20} style={{ marginRight: "5px" }} />
            Go to back
          </button>
        ) : (
          <button
            className="create-btn"
            onClick={() => setIsCreatePageShow(!isCreatePageShow)}
          >
            Create <BiAddToQueue />
          </button>
        )}
      </div>

      <div className="content-body row justify-content-center w-100">
        {isCreatePageShow ? (
          <div className="col-md-8">
            {
              // <SlidersCreate setIsCreatePageShow={setIsCreatePageShow} />
            }
            <div>create</div>
          </div>
        ) : isEditPageShow ? (
          // <SlidersEdit
          //   activeSliderItem={activeSliderItem}
          //   setIsEditPageShow={setIsEditPageShow}
          // />
          <div>edit</div>
        ) : (
          // <SlidersDisplay
          //   isEditPageShow={isEditPageShow}
          //   setIsEditPageShow={setIsEditPageShow}
          //   setActiveSliderItem={setActiveSliderItem}
          // />
          <div>Display</div>
        )}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </SlidersMainStyled>
  );
};

export default SlidersMain;
