/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

export default function Hotels() {
  const data = [
    {
      name: "KIRIAD CHANTILLY SUD *** ",
      link: "https://www.booking.com/hotel/fr/campanile-chaumontel-luzarches.en-gb.html?aid=356931&label=metagha-link-MRFR-hotel-219643_dev-desktop_los-1_bw-1_dow-Saturday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-6626063945_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20220917__lp-20321_r-3732239312122359077&sid=6dfc5a54699cf5e16103546004f4a214&age=0&checkin=2026-07-12&checkout=2026-07-13&dest_id=-1419464&dest_type=city&dist=0&do_availability_check=1&group_adults=2&group_children=1&hp_avform=1&hp_group_set=0&no_rooms=1&origin=hp&sb_price_type=total&src=hotel&type=total&#group_recommendation",
      tel: "+33134099090",
      desc: " 5km | START FROM 97€",
    },
    {
      name: "NOVOTEL MAFFLIERS **** ",
      link: "https://all.accor.com/ssr/app/accor/rates/0383/index.en.shtml?dateIn=2026-07-12&nights=1&compositions=2&stayplus=false&snu=false&accessibleRooms=false&hideWDR=false&productCode=null&hideHotelDetails=true",
      tel: "+33134083535",
      desc: " 10km | START FROM 167€",
    },
    {
      name: "DOLCE CHANTILLY **** ",
      link: "https://all.accor.com/ssr/app/accor/rates/B4C3/index.fr.shtml?dateIn=2026-07-12&nights=1&compositions=2&stayplus=false&snu=false&accessibleRooms=false&hideWDR=false&productCode=null&hideHotelDetails=true",
      tel: "+33344584777",
      desc: " 18km | START FROM 179€",
    },
    {
      name: "CHÂTEAU DE LA TOUR *** ",
      link: "https://reservations.hotelspreference.com/?adult=2&arrive=2026-07-12&chain=5460&child=0&currency=EUR&depart=2026-07-13&hotel=75790&level=hotel&locale=fr-FR&productcurrency=EUR&rooms=1",
      tel: "+33344623838",
      desc: " 14km | START FROM 200€",
    },
    {
      name: "LE DOMAINE DES VANNEAUX **** ",
      link: "https://all.accor.com/ssr/app/accor/rates/B4D0/index.fr.shtml?dateIn=2026-07-12&nights=1&compositions=2&stayplus=false&snu=false&accessibleRooms=false&hideWDR=false&productCode=null&hideHotelDetails=true",
      tel: "+33124084060",
      desc: " 19km | START FROM 201€",
    },
  ];

  return (
    <div
      style={{
        marginTop: "10em",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <img src="hotel.png" />
      <h1 style={{ margin: 0, lineHeight: 1 }}>HOTEL RESERVATION</h1>
      <h3 style={{ marginBottom: "40px", lineHeight: 1 }}>
        RECOMMEND TO BOOK TO ENJOY THE PARTY !
      </h3>
      <div>
        {data.map((hotel) => {
          return (
            <div
              style={{
                // width: "420px",
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  width: "100%",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                <a
                  style={{ textAlign: "left", fontSize: "1.6em" }}
                  href={hotel.link}
                  target="_blank"
                >
                  {hotel.name}
                </a>
              </p>
              <p style={{ textAlign: "left" }}>
                {hotel.desc}
                {" | "}
                <a inputMode="tel" target="_blank" href={`tel:${hotel.tel}`}>
                  {hotel.tel}
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
