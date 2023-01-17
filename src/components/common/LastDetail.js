import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../services/api";
import ReactPlayer from "react-player";
import "./lastdetail.css";

const LastDetail = () => {
  const sliderUrl = "v1/song/slider/latest";
  const { id } = useParams();
  const [data, setData] = useState([]);
  const detail = data[id - 1];
  //   const {duration} = detail;
  console.log(detail?.id);
  console.log(detail);
  //
  useEffect(() => {
    fetchApi(sliderUrl).then((res) => setData(res.results));
  }, []);

  return (
    <section className="last-detail">
      <div
        className="background"
        style={{ backgroundImage: `url(${detail?.image.slider.url})` }}
      ></div>
      <div className="last-detail-content">
        <div>
          <img src={detail?.image.cover.url} alt="cover" />
        </div>
        <div className="last-main">
          <div className="sub-last">
            <h1>{detail?.title}</h1>
            <div className="singer">
              <div>
                <span>{detail?.artists[0].fullName}</span>
                <span>
                  dwonload:{detail?.artists[0].sumSongsDownloadsCount}
                </span>
              </div>
              <div className="music">
                <ReactPlayer
                  height={30}
                  playing={true}
                  controls
                  url={detail?.audio.high.url}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastDetail;
