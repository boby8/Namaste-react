export const RestrauantCard = ({name, cuisines
  , avgRatingString,image}) => {
  return (
    <div className="card">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${"v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"}`} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} stars</h4>
    </div>
  );
};

