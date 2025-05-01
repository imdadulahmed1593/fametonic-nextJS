const AnnouncementBar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-[linear-gradient(90deg,#FC004E_0%,#fc0050c6_25%,#10CBE0_85%,#10CBE0_100%)]  text-base lg:text-xl flex items-center justify-center px-6 text-center font-bold h-[76px] lg:h-[46px]">
      <p>
        {" "}
        <span className="font-bold text-secondary">
          🚀 FRESH BEGINNINGS SALE:
        </span>{" "}
        Extra 25% OFF, Limited Spots - start your journey today!
      </p>
    </div>
  );
};

export default AnnouncementBar;
