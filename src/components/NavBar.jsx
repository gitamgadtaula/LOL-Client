import axios from "axios";
import { getRegionName, showError, hideError } from "../scripts";

export default function NavBar(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  let regions = [
    <option key="euw" value="euw1">
      EUW
    </option>,
    <option key="eun" value="eun1">
      EUNE
    </option>,
    <option key="na" value="na1">
      NA
    </option>,
    <option key="kr" value="kr">
      KR
    </option>,
    <option key="oce" value="oc1">
      OCE
    </option>,
    <option key="jp" value="jp1">
      JP
    </option>,
    <option key="br" value="br1">
      BR
    </option>,
    <option key="lan" value="la1">
      LAN
    </option>,
    <option key="las" value="la2">
      LAS
    </option>,
    <option key="ru" value="ru">
      RU
    </option>,
    <option key="tr" value="tr1">
      TR
    </option>,
  ];

  function handleGet(event) {
    const summoner = event.target.value;
    const region = document.getElementById("region").value;
    const regionName = getRegionName(region);

    if (event.key === "Enter") {
      axios({
        url:
          "https://" +
          region +
          ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
          summoner +
          "?api_key=" +
          API_KEY,
        method: "GET",
      })
        .then((res1) => {
          axios({
            url:
              "https://" +
              region +
              ".api.riotgames.com/lol/league/v4/entries/by-summoner/" +
              res1.data.id +
              "?api_key=" +
              API_KEY,
            method: "GET",
          })
            .then((res2) => {
              props.props.addAccount(res1, res2, region, regionName);
              props.props.loadAccount(res1, region);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          showError("Summoner not found", "Please check the username again.");
          setTimeout(() => {
            hideError();
          }, 6000);
        });

      event.target.value = "";
    }
  }

  function pageRefresh() {
    window.location.reload();
  }

  return (
    <nav
      id="navbar"
      className="fixed flex flex-row flex-nowrap justify-between items-center z-10 w-full h-16 pr-4 pl-4 backdrop-blur-md shadow-sm shadow-slate-800"
    >
      <div onClick={pageRefresh} style={{ cursor: "pointer" }}>
        <img
          loading="lazy"
          src="//siriusnet.io/wp-content/uploads/2022/09/1d1ddasddffd.png"
          srcSet="//siriusnet.io/wp-content/uploads/2022/09/1d1ddasddffd.png 2x"
          alt="Siriusnet"
          className="w-36"
        ></img>{" "}
        {/* <img
          src="https://media.licdn.com/dms/image/D560BAQHc_Y8GIaqw7A/company-logo_200_200/0/1686983106139/siriusnet_logo?e=2147483647&v=beta&t=O3Xjtq7rVSvh58g0AFkfG7tFTXC-n_H5-Kz-oVMkMtE"
          alt="logo"
        /> */}
      </div>
      <div>
        <select
          id="region"
          className="h-10 p-2 rounded-l outline-none bg-slate-200 text-gray-900 font-bold"
        >
          {regions}
        </select>
        <input
          id="searchBar"
          type="text"
          placeholder="Summoner name here"
          onKeyPress={handleGet}
          className="w-64 h-10 p-2 rounded-r outline-none text-gray-900 font-medium"
        />
      </div>
      <div>
        {/* <a
          href="https://github.com/iyy0v/LOL-analyzer/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon"></span>
        </a> */}
      </div>
    </nav>
  );
}
