import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./koinSports.css";
export default function KoinSports() {
  const [koinSportsContent] = useState([
    {
      header: "Buy Koinwise instantly",
      content: "Neither a long wait time nor a deposit fee are required",
    },
    {
      header: "Choice & control",
      content:
        "Take any cool bet you find, or make your own. Koinwise is the way to go. You're always in charge.",
    },
    {
      header: "Rewards & Bonuses",
      content:
        "Get cash back bonuses, referral bonuses, and other cool perks when you bet with Koinwise tokens.",
    },
  ]);

  const [teamMember] = useState([
    { name: "Mr. John Doe", position: "Founding Team", img: "/team1.png" },
    { name: "Mr. John Doe", position: "Developer Team", img: "/team2.png" },
    { name: "Mr. John Doe", position: "Marketing Team", img: "/team3.png" },
    { name: "Mr. John Doe", position: "Advisors", img: "/team4.png" },
  ]);

  const [koinSportsHeaderTrueVisible, setKoinSportsHeaderTrueVisible] =
    useState(false);
  const { ref: koinSportsHeaderRef, inView: koinSportsHeaderVisible } =
    useInView();

  const [koinSportsContentTrueVisible, setKoinSportsContentTrueVisible] =
    useState(false);
  const { ref: koinSportsContentRef, inView: koinSportsContentVisible } =
    useInView();

  const [koinSportsDetailTrueVisible, setKoinSportsDetailTrueVisible] =
    useState(false);
  const { ref: koinSportsDetailRef, inView: koinSportsDetailVisible } =
    useInView();

  const [koinSportsNftTrueVisible, setKoinSportsNftTrueVisible] =
    useState(false);
  const { ref: koinSportsNftRef, inView: koinSportsNftVisible } = useInView();

  const [partanerShipTrueVisible, setPartanerShipTrueVisible] = useState(false);
  const { ref: partanerShipRef, inView: partanerShipVisible } = useInView();

  const [teamTrueVisible, setTeamTrueVisible] = useState(false);
  const { ref: teamRef, inView: teamVisible } = useInView();

  useEffect(() => {
    if (koinSportsHeaderVisible) {
      setKoinSportsHeaderTrueVisible(true);
    }
    if (koinSportsContentVisible) {
      setKoinSportsContentTrueVisible(true);
    }
    if (koinSportsDetailVisible) {
      setKoinSportsDetailTrueVisible(true);
    }
    if (koinSportsNftVisible) {
      setKoinSportsNftTrueVisible(true);
    }
    if (partanerShipVisible) {
      setPartanerShipTrueVisible(true);
    }
    if (teamVisible) {
      setTeamTrueVisible(true);
    }
  }, [
    koinSportsHeaderVisible,
    koinSportsContentVisible,
    koinSportsDetailVisible,
    koinSportsNftVisible,
    partanerShipVisible,
    teamVisible,
  ]);

  return (
    <div className="koinSports_container">
      <img src="/sports-left.png" alt="" className="sport_left_img" />
      <img src="/sport-right.png" alt="" className="sport_right_img" />
      <img src="/Rectangle 17.png" alt="" className="rectangle_img" />
      <div
        className={`${"koinSports_header"} ${
          koinSportsHeaderTrueVisible ? "koinSportsAnimation" : ""
        }`}
        id="koin_sports"
      >
        Koin-Sports
      </div>
      <div
        className={`${"koinSports_title"} ${
          koinSportsHeaderTrueVisible ? "koinSportsAnimation" : ""
        }`}
        ref={koinSportsHeaderRef}
      >
        Introducing the Next-Generation Sports Betting App
      </div>
      <div
        className={`${"koinSports_content"} ${
          koinSportsHeaderTrueVisible ? "koinSportsAnimation" : ""
        }`}
      >
        Unlike any other sports betting app, Koinwise provides the most betting
        options - you can place bets against the house, create your own bets
        against other customers, or place bets with your friends! You can bet on
        our cryptocurrency, Koinwise!
      </div>
      {koinSportsContent.map((each, index) => (
        <div
          className={`${"koinContent_container"} ${
            koinSportsContentTrueVisible ? "koinSportsAnimation" : ""
          }`}
          key={index}
          ref={koinSportsContentRef}
        >
          <div className="koin_content_header">{each.header}</div>
          <div className="koin_content_bar"></div>
          <div className="koin_content">{each.content}</div>
        </div>
      ))}
      <div className="margin_bar"></div>
      <div
        className={`${"koin_detail_header"} ${
          koinSportsDetailTrueVisible ? "koinSportsAnimation" : ""
        }`}
        ref={koinSportsDetailRef}
      >
        Koinwise - Sports Utility Token
      </div>
      <div
        className={`${"koin_detail"} ${
          koinSportsDetailTrueVisible ? "koinSportsAnimation" : ""
        }`}
      >
        In addition to Bitcoin and fiat (USD), Koinwise also offers its own
        cryptocurrency utility token for betting and paying fees. If you place
        bets with Koinwise tokens, you'll pay discounted betting fees, get cash
        back for reaching certain betting volumes, and get bonuses for doing
        other stuff. You can also deposit and withdraw Koinwise from/to your
        Wallet anytime. BSC is the blockchain that powers Koinwise.
      </div>
      <div className="margin_bar"></div>
      <div
        className={`${"color_header"} ${
          koinSportsNftTrueVisible ? "koinSportsAnimation" : ""
        }`}
        id="our_nfts"
      >
        Sports NFT:
      </div>
      <div
        className={`${"special"} ${
          koinSportsNftTrueVisible ? "koinSportsAnimation" : ""
        }`}
        ref={koinSportsNftRef}
      >
        Here's a special marketplace where you can trade your sports NFTs.
      </div>
      <div
        className={`${"what_are"} ${
          koinSportsNftTrueVisible ? "koinSportsAnimation" : ""
        }`}
      >
        What are Sport’s NFT?
      </div>
      <div
        className={`${"what_are_content"} ${
          koinSportsNftTrueVisible ? "koinSportsAnimation" : ""
        }`}
      >
        Sports NFTs are digital collectibles and trading cards that are
        available for you to buy and they are a perfect way to show your support
        for your favourite players!
      </div>
      <div className="margin_bar"></div>
      {/* <div
        ref={partanerShipRef}
        className={`${"ourPartner_container"} ${
          partanerShipTrueVisible ? "koinSportsAnimation" : ""
        }`}
      >
        <div className="ourPartner">Our Partnership with</div>
        <div className="esport_container">
          <img src="/esport_live.png" alt="" className="esportImg" />
        </div>
      </div>
      <div className="margin_bar"></div>
      <div
        className={`${"ourTeam"} ${
          teamTrueVisible ? "koinSportsAnimation" : ""
        }`}
        id="our_team"
      >
        Our Team
      </div>
      <div
        className={`${"ourTeam_content"} ${
          teamTrueVisible ? "koinSportsAnimation" : ""
        }`}
        ref={teamRef}
      >
        With a combination of technical mastery and professional stability,
        Koinwise's team is composed of researchers, developers, marketing
        specialists as well as proven business leaders from global technology
        companies.
      </div>
      <div
        className={`${"team_member_container"} ${
          teamTrueVisible ? "koinSportsAnimation" : ""
        }`}
      >
        {teamMember.map((each, index) => (
          <div className="team_member" key={index}>
            <img src={each.img} alt="" className="team_member_img" />
            <div className="team_member_bottom_container">
              <div className="team_member_name">{each.name}</div>
              <div className="team_member_position">{each.position}</div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
