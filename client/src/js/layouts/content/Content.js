import Button from "../../components/global/Button";
import image1 from "../../../assets/img/11d-thunderstorm.png";

function Content() {
  return (
    <section className="content">
      <div className="contentWrapper">
        <div className="content__top">
          <div className="switchTemp">
            <Button type="degC" children="°C" active={true} />
            <Button type="degF" children="°F" />
          </div>
        </div>
        <section className="content__forecastWrapper">
          <article className="content__forecast">
            <p className="content__forecast--day">Tomorrow</p>
            <div className="content__forecast--img">
              <img src={image1} alt="" />
            </div>
            <p className="content__forecast--temp">
              <span className="max">16°C</span>
              <span className="min">11°F</span>
            </p>
          </article>
          <article className="content__forecast">
            <p className="content__forecast--day">Tomorrow</p>
            <div className="content__forecast--img">
              <img src={image1} alt="" />
            </div>
            <p className="content__forecast--temp">
              <span className="max">16°C</span>
              <span className="min">11°F</span>
            </p>
          </article>
          <article className="content__forecast">
            <p className="content__forecast--day">Tomorrow</p>
            <div className="content__forecast--img">
              <img src={image1} alt="" />
            </div>
            <p className="content__forecast--temp">
              <span className="max">16°C</span>
              <span className="min">11°F</span>
            </p>
          </article>
          <article className="content__forecast">
            <p className="content__forecast--day">Tomorrow</p>
            <div className="content__forecast--img">
              <img src={image1} alt="" />
            </div>
            <p className="content__forecast--temp">
              <span className="max">16°C</span>
              <span className="min">11°F</span>
            </p>
          </article>
          <article className="content__forecast">
            <p className="content__forecast--day">Tomorrow</p>
            <div className="content__forecast--img">
              <img src={image1} alt="" />
            </div>
            <p className="content__forecast--temp">
              <span className="max">16°C</span>
              <span className="min">11°F</span>
            </p>
          </article>
        </section>
        <section className="content__highlights">
          <h3 className="content__highlights--heading">Today's Highlights</h3>
          <div className="content__highlights--dataContainer">
            <article className="content__highlights--data">
              <p className="type">Wind status</p>
              <p className="measure">
                <span className="number">7</span>
                <span className="unit">mph</span>
              </p>
            </article>
            <article className="content__highlights--data">
              <p className="type">Wind status</p>
              <p className="measure">
                <span className="number">7</span>
                <span className="unit">mph</span>
              </p>
            </article>
            <article className="content__highlights--data">
              <p className="type">Wind status</p>
              <p className="measure">
                <span className="number">7</span>
                <span className="unit">mph</span>
              </p>
            </article>
            <article className="content__highlights--data">
              <p className="type">Wind status</p>
              <p className="measure">
                <span className="number">7</span>
                <span className="unit">mph</span>
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Content;
