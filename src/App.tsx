import React from "react";
import Img from "./Assets/img/Pamflet.jpeg";
const Zoom = require("react-reveal/Zoom");

const App = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Zoom>
          <div className="mt-4 contain-img">
            <img
              src={Img}
              alt="Pamplet"
              className="img-thumbnail rounded"
              style={{ width: "100%" }}
            />
          </div>
        </Zoom>
        <Zoom>
          <div className="container-text text-white px-3 px-lg-5 py-4 my-4 overflow-auto fs-5">
            <h4 className="text-center">[KOMUNITAS OLAHRAGA VOLI]</h4>
            <br />
            <h4 className="text-center">⚠️ ALERT⚠️</h4>
            <br />
            <h5>Halo Mahasiswa Kimia👋🏻</h5>
            <br />

            <p>
              Pemberitahuan kepada teman-teman yang sudah mendaftar Komunitas
              Olahraga Voli🏐 akan diadakan latihan perdana nih 🙀
            </p>
            <br />

            <p>Wahh.. kira-kira kapan ya?🤔</p>
            <br />

            <p>
              Latihan perdana ini akan dilaksanakan pada :
              <p>📆 Hari, Tanggal : Kamis, 27 Maret 2022</p>
              <p>⏰ Pukul : 15.30 WIB</p>
              <p>🥅 Tempat : Lapangan Voli (sebelah dekanat FMIPA UNNES)</p>
            </p>
            <br />

            <p>
              Latihan perdana ini akan dilaksanakan pada :
              <p>📆 Hari, Tanggal : Kamis, 27 Maret 2022</p>
              <p>⏰ Pukul : 15.30 WIB</p>
              <p>🥅 Tempat : Lapangan Voli (sebelah dekanat FMIPA UNNES)</p>
            </p>
            <br />

            <p>Jangan lupa join 🤩</p>
            <p>Terima kasih banyak atas partisipasinya 🙌🏻</p>
            <br />

            <p>CP : 0895411324038 (Fara)</p>
            <br />

            <p>
              #DenganBakatKitaHebat <br />
              #HimamiaBERAKSI <br />
              #KimiaJaya <br />
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default App;
