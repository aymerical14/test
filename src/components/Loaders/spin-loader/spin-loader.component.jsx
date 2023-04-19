import loader64 from '../../../assets/img/loader-64x64.svg';
import loaderOrange from '../../../assets/img/loader.svg';

const SpinLoader = ({ size = 64, isOrange = false }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={isOrange === true ? loaderOrange : loader64}
        alt="spin-loader"
        width={size}
        height={size}
      />
    </div>
);

export default SpinLoader;