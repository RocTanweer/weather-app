import { ReactComponent as LoadingSvg } from "../../../assets/loading.svg";

function Loading({ size }) {
  return (
    <div className={`loadingIcon loadingIcon--${size}`}>
      <LoadingSvg />
    </div>
  );
}

export default Loading;
