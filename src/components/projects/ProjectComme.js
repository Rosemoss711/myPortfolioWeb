import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Project.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { createTheme } from "@mui/material";

const ProjectComme = () => {
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
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/메인.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>메인페이지</p>
                  <hr />
                  <p>
                    컨트롤러에서 세션값을 받아서 JSTL을 이용해 로그인 상태를
                    표현해줍니다. 봉사 후기 중 가장 조회수가 높은 3개의 글을
                    DB에서 받아와서 JSTL을 이용해 메인화면에 노출해줍니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/유기동물-리스트.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>유기동물 조회 페이지</p>
                  <hr />
                  <p>
                    공공데이터 포털의 Open API를 Json형식으로 변환하여 JSTL로
                    출력해줍니다. Open API를 처음 받아 올 때에만 DB에 저장하도록
                    기능을 구성해 놓았고 중복된 고유번호는 저장하지 않도록
                    쿼리를 만들었습니다. 
                    <br />
                    DB에 쌓인 데이터로 검색 기능과 카테고리 탭으로 원하는
                    축종이나 검색어로 조회가 가능하며  Ajax를 이용하여 사용자가
                    원하는 결과를 표시해줍니다. <br />
                    API 데이터를 받아올 때에 다른 페이지에 비해 시간이 소요되어
                    로딩 중 스피너 이미지가 나오도록 구성하였습니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/유기동물-상세.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>유기동물 상세 페이지</p>
                  <hr />
                  <p>
                    리스트에서 선택한 유기동물의 정보를 DB에서 불러와서
                    보여줍니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/유기동물-페이지없음.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>검색결과 페이지</p>
                  <hr />
                  <p>검색한 결과가 없을 경우 해당 페이지를 띄워줍니다.</p>
                </div>
              </div>
              <div className="pjInBox">
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/자유게시판-리스트.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>커뮤니티 게시판 페이지</p>
                  <hr />
                  <p>
                    게시글들의 출력은 테이블로 구성하였고 일부 부트스트랩을
                    사용하였습니다. 반응형일 때에 글자수가 넘치는 경우 CSS를
                    이용해 말줄임으로 처리하였습니다. <br />
                    레이아웃만 참여한 페이지입니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/실종동물-리스트.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>실종동물 페이지</p>
                  <hr />
                  <p>
                    게시판 특성상 사진까지 같이 나오는게 좋겠다고 판단하였기
                    때문에 Bootstrap을 이용해 카드로 구성하였습니다. 반응형일
                    때에 글자수가 넘치는 경우 CSS를 이용해 말줄임으로
                    처리하였습니다. <br />
                    레이아웃만 참여한 페이지입니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/실종동물-상세.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>실종동물 수정 페이지</p>
                  <hr />
                  <p>
                    해당 게시판 특성상 실종정보가 중요하기때문에 상단에 따로
                    사진과 실종정보를 띄워서 먼저 확인이 가능하게끔
                    구성했습니다.
                    <br />
                    레이아웃만 참여한 페이지입니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/매니저-전체회원.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>관리자 - 전체회원 목록</p>
                  <hr />
                  <p>
                    전체 회원 목록을 DB데이터를 이용해 가져온 후 JSTL로
                    출력해줍니다. 기본적으로 읽기전용이 적용되어있고 수정하고
                    싶은 회원의 수정버튼을 누르면 수정 가능하도록 창이 바뀝니다.
                    <br />
                    회원 등급을 선택하면 등급별 목록 확인이 가능합니다. Ajax를
                    이용하여 검색기능과 회원 등급별 목록을 구현했습니다.
                  </p>
                </div>
              </div>
              <div className="pjInBox">
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/매니저-블랙리스트.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>관리자 - 블랙리스트 목록</p>
                  <hr />
                  <p>블랙리스트만 따로 추려진 회원목록입니다.</p>
                </div>
              </div>
              <div className="pjInBox">
                <img
                  className="pjImgs"
                  src={require("../../assets/projects/comme/사업자회원가입.png")}
                  alt="mainP"
                />
                <div className="pjEx">
                  <p>사업자회원 회원가입</p>
                  <hr />
                  <p>
                    공공데이터포털 Open API 를 이용하여 Ajax로 input에 입력된
                    사업자등록번호에 대한 상태를 검사한 후 중복확인까지 이어서
                    Ajax로 진행하여 결과를 출력해줍니다.
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
          sx={{ borderLeft: "1px solid pink", height: "300px" }}
        />
        <Grid2 item xs={3} className="pjInfo">
          <p className="pjInfoTitle">
            <p id="pjInfoTitle2">- 애완동물 커뮤니티 -</p>
            COMME
          </p>
          <p>
            반려동물을 키우거나 유기동물에 관심 있는 사람들을 위한 커뮤니티
            사이트로 전국 유기동물의 현황을 실시간으로 알려주고 연계된 보호소에
            봉사활동이나 후원을 진행할 수 있도록 도와주는 사이트
          </p>
          <p>모든 페이지를 반응형으로 작업하였습니다.</p>
          <br />
          <p style={{ textAlign: "center" }}>★ 활용기술 ★</p>
          <p>
            - JAVA, JSP, Servlet, Spring Framework, Ajax, HTML5, CSS3,
            JavaScript, JQuery, Gson, JSTL, MyBatis
          </p>
          <p>- Oracle11 - SQL Developer</p>
          <p>- 공공데이터포털 Open API</p>
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

export default ProjectComme;
