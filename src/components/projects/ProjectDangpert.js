import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Project.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { createTheme } from "@mui/material";

const ProjectDangpert = () => {
  const [current, setCurrent] = useState(0);

  const slideRef = useRef(null);

  const images = [
    {
      id: 1,
      path: "../../assets/projects/메인.png",
    },
    {
      id: 2,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 3,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 4,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 5,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 6,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 7,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 8,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 9,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 10,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 11,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 12,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 13,
      path: "../../assets/projects/메인-반응형.png",
    },
    {
      id: 14,
      path: "../../assets/projects/메인-반응형.png",
    },
  ];

  const theme = createTheme({
    palette: {
      grey: {
        main: "#aba9a9",
      },
    },
  });

  useEffect(() => {
    if (current === -1) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-66.5vw)`;
      setCurrent(images.length - 1);
    } else if (current === images.length) {
      setCurrent(0);

      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(0px)`;
    }
  }, [current]);

  const onClickLeftButton = () => {
    if (current === 0) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev - 1);
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        current * 66.5 - 66.5
      }vw)`;
    }
  };

  const onClickRightButton = () => {
    if (current === images.length) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        66.5 * (current + 1)
      }vw)`;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid2 container columns={12}>
        <Grid2 item xs={8} className="projectWrap">
          <motion.div
            id="imgsWrap"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="pjBox" ref={slideRef}>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/메인.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>메인페이지</p>
                  <hr />
                  <p>
                    Controller에서 Session값을 받아서 JSTL을 이용해 로그인
                    상태를 표현해줍니다. 상단은 Bootstrap의 Carousel을
                    사용하였으며 각 카테고리의 최신글의 일부를 메인페이지에서 볼
                    수 있도록 JSTL로 출력해줍니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/운동시설리스트.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>운동시설 리스트 페이지</p>
                  <hr />
                  <p>
                    등록된 모든 운동시설이 출력되며 Ajax를 이용해 검색기능을
                    구현하였습니다.  Session 값을 이용하여 매니저나
                    시설관리회원만 등록 및 수정이 가능하며, 즐겨찾기 기능으로
                    선택한 시설은 마이페이지에서 확인이 가능합니다. <br />
                    리스트 출력 및 즐겨찾기는 JSTL을 사용하였습니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/운동시설-상세.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>운동시설 상세 페이지</p>
                  <hr />
                  <p>
                    상세페이지에 있는 지도는 카카오API를 사용하였으며 실제
                    주소지의 위치정보가 표시됩니다. 상세페이지에서 요금 결제로
                    넘어가지 않고 쿠폰발급 방식으로 진행하였습니다. <br />
                    랜덤번호를 생성하여 Ajax로 alert를 띄워준 후 DB에 해당정보를
                    저장합니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/운동시설 수정페이지.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>운동시설 수정 페이지</p>
                  <hr />
                  <p>
                    등록, 수정시 사진 미리보기 및 등록이 가능하며 운동시설
                    등록이나 수정 시 주소입력은 다음 주소 API를 사용하였습니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/식품리스트.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>식품프로모션 리스트 페이지</p>
                  <hr />
                  <p>
                    프로모션 테마에 따라 나누어 리스트를 출력해줍니다. 이때
                    테마는 제품명 제목 앞의 글자로 구분합니다.
                    <br />
                    즐겨찾기 기능이 가능하여 마이페이지에서 선택한 제품을 확인할
                    수 있습니다. <br />
                    별도의 상세페이지 없이 클릭하면 해당 제품의 판매처로
                    넘어가도록 구성해놓았으며 Session 값을 이용하여 관리자
                    등급만 등록 및 수정, 삭제가 가능합니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/식품리스트-매니저.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>식품프로모션 관리자 페이지</p>
                  <hr />
                  <p>
                    관리자 상태일 경우에만 확인이 가능한 식품프로모션 등록
                    페이지입니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/식품상세수정-매니저.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>식품프로모션 수정 페이지</p>
                  <hr />
                  <p>
                    식품프로모션 등록 및 수정 시 사진 미리보기와 등록이 가능하며
                    링크 주소에 해당 제품의 링크를 등록하면 리스트페이지에서
                    제품을 선택시 해당링크로 이동합니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/QNA.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>FAQ 리스트 페이지</p>
                  <hr />
                  <p>
                    FAQ 페이지 자주묻는 질문에 대한 공지를 제공하는
                    페이지입니다. 일반적인 테이블 구성으로 진행하지 않고
                    Bootstrap의 Accordion으로 구성해 보았습니다. Session 값을
                    이용하여 관리자 등급만 등록 및 수정 삭제가 가능하도록
                    하였습니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/QNA등록.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>FAQ 등록 페이지</p>
                  <hr />
                  <p>FAQ 등록 페이지입니다.</p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/QNA수정.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>FAQ 수정 페이지</p>
                  <hr />
                  <p>FAQ 수정 페이지입니다.</p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/마이페이지.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>마이페이지</p>
                  <hr />
                  <p>
                    일반 회원의 마이페이지입니다. <br />
                    즐겨찾기한 운동시설과 식품프로모션을 보여주며, 클릭하면 해당
                    페이지로 이동합니다. DB에 저장된 로그인 날짜를 이용하여
                    마지막 접속일을 출력해줍니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/일기.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>마이페이지-일기</p>
                  <hr />
                  <p>
                    일기 페이지에서는 운동한 날의 기록을 간단하게 남길 수 있으며
                    최신 목록을 최상위에 띄워줍니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/일기쓰기.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>마이페이지-일기쓰기</p>
                  <hr />
                  <p>
                    일기 쓰기 페이지입니다. <br />
                    운동부위를 선택할 수 있으며 간단한 기록을 할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <div className="imgDiv">
                  <img
                    className="pjImgs"
                    src={require("../../assets/projects/dangpert/일기수정.png")}
                    alt="mainP"
                  />
                </div>
                <div className="pjEx">
                  <p>마이페이지-일기수정</p>
                  <hr />
                  <p className="pjEx">
                    일기 수정 페이지입니다.
                    <br /> 해당 페이지에서 일기 삭제가 가능합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="pageTitleWrap">
              <p className="pageTitle">작업한 페이지</p>
              <motion.button
                className="slideBtn"
                style={{ left: "20px" }}
                type="button"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={onClickLeftButton}
              >
                <ArrowBackIosNewIcon
                  theme={theme}
                  fontSize="small"
                  color="grey"
                />
              </motion.button>
              <motion.button
                className="slideBtn"
                style={{ left: "60vw" }}
                type="button"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={onClickRightButton}
              >
                <ArrowForwardIosIcon
                  theme={theme}
                  fontSize="small"
                  color="grey"
                />
              </motion.button>
            </div>
          </motion.div>
        </Grid2>
        <Grid2
          xs={1}
          style={{ width: "3vw" }}
          sx={{ borderLeft: "0px solid pink", height: "300px" }}
        />
        <Grid2 item xs={3} className="pjInfo">
          <p className="pjInfoTitle">
            <p id="pjInfoTitle2">- 당신의 퍼스트 트레이너 -</p>
            당퍼트
          </p>

          <p>
            운동을 시작하고자 하는 사용자에게 운동법 및 각종 칼럼 정보와 일기장
            기능 제공, 사이트와 연계하여 프로모션 중인 운동시설, 식단조절용 식품
            프로모션 서비스 제공
          </p>
          <p>모든 페이지를 반응형으로 작업하였습니다.</p>
          <br />
          <p style={{ textAlign: "center" }}>★ 활용기술 ★</p>
          <p>
            - JAVA, JSP, Servlet, Ajax, HTML5,  CSS3, JavaScript, JQuery, Gson, 
             JSTL
          </p>
          <p>- Oracle11 - SQL Developer</p>
          <p>- KaKao API, Daum API</p>
        </Grid2>

        {/* <motion.img
        className="pjImgs"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0 }}
        src={require("../../assets/projects/메인.png")}
        alt="main"
      />
      <motion.img
        className="pjImgs"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        src={require("../../assets/projects/메인-반응형.png")}
        alt="mainP"
      /> */}
      </Grid2>
    </motion.article>
  );
};

export default ProjectDangpert;
