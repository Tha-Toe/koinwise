import React from "react";
import { useState } from "react";
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
  return (
    <div className="koinSports_container">
      <img src="/sports-left.png" alt="" className="sport_left_img" />
      <img src="/sport-right.png" alt="" className="sport_right_img" />
      <img src="/Rectangle 17.png" alt="" className="rectangle_img" />
      <div className="koinSports_header">Koin-Sports</div>
      <div className="koinSports_title">
        Introducing the Next-Generation Sports Betting App
      </div>
      <div className="koinSports_content">
        Unlike any other sports betting app, Koinwise provides the most betting
        options - you can place bets against the house, create your own bets
        against other customers, or place bets with your friends! You can bet on
        our cryptocurrency, Koinwise!
      </div>
      {koinSportsContent.map((each, index) => (
        <div className="koinContent_container">
          <div className="koin_content_header">{each.header}</div>
          <div className="koin_content_bar"></div>
          <div className="koin_content">{each.content}</div>
        </div>
      ))}
      <div className="margin_bar"></div>
      <div className="koin_detail_header">Koinwise - Sports Utility Token</div>
      <div className="koin_detail">
        In addition to Bitcoin and fiat (USD), Koinwise also offers its own
        cryptocurrency utility token for betting and paying fees. If you place
        bets with Koinwise tokens, you'll pay discounted betting fees, get cash
        back for reaching certain betting volumes, and get bonuses for doing
        other stuff. You can also deposit and withdraw Koinwise from/to your
        Wallet anytime. BSC is the blockchain that powers Koinwise.
      </div>
      <div className="margin_bar"></div>
      <div className="color_header">Sports NFT:</div>
      <div className="special">
        Here's a special marketplace where you can trade your sports NFTs.
      </div>
      <div className="what_are">What are Sport’s NFT?</div>
      <div className="what_are_content">
        Sports NFTs are digital collectibles and trading cards that are
        available for you to buy and they are a perfect way to show your support
        for your favourite players!
      </div>
      <div className="margin_bar"></div>
      <div className="ourPartner_container">
        <div className="ourPartner">Our Partnership with</div>
        <div className="esport_container">
          <img src="/esport_live.png" alt="" className="esportImg" />
        </div>
      </div>
      <div className="margin_bar"></div>
      <div className="ourTeam">Our Team</div>
      <div className="ourTeam_content">
        With a combination of technical mastery and professional stability,
        Koinwise's team is composed of researchers, developers, marketing
        specialists as well as proven business leaders from global technology
        companies.
      </div>
      <div className="team_member_container">
        {teamMember.map((each, index) => (
          <div className="team_member" key={index}>
            <img src={each.img} alt="" className="team_member_img" />
            <div className="team_member_bottom_container">
              <div className="team_member_name">{each.name}</div>
              <div className="team_member_position">{each.position}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
