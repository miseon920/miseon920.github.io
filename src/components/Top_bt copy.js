const Top_bt = () => {
  //   const [ScrollY, setScrollY] = useState(0);
  //   const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  //   const handleFollow = () => {
  //     setScrollY(window.pageYOffset);
  //     if (ScrollY > 100) {
  //       // 100 이상이면 버튼이 보이게
  //       console.log("zzz");
  //       setBtnStatus(true);
  //     } else {
  //       // 100 이하면 버튼이 사라지게
  //       setBtnStatus(false);
  //     }
  //   };

  //   const top_bt = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //     setScrollY(0);
  //     setBtnStatus(false);
  //   };

  //   useEffect(() => {
  //     const watch = () => {
  //       window.addEventListener("scroll", handleFollow);
  //     };
  //     watch();
  //     return () => {
  //       window.removeEventListener("scroll", handleFollow);
  //     };
  //   });
  return (
    <>
      {/* {BtnStatus && (
                
            )} */}
      <button className={`top_bt ${scrollY > 400 && "on"}`} onClick={top_bt}>
        <FiArrowUp />
      </button>
    </>
  );
};
