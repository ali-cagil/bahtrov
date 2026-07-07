"use client";

import { useState } from "react";

type Team = {
  name: string;
  members: {
    name: string;
    linkedin?: string;
  }[];
};

function TeamIcon({ team }: { team: string }) {
  if (team === "Mechanical") {
    return (
      <svg className="team-icon mechanical-icon" width="38" height="38" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-3.1 3.1-3-3 3.1-3.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (team === "Electronics") {
    return (
      <svg className="team-icon electronics-icon" width="38" height="38" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className="team-icon software-icon" width="38" height="38" viewBox="0 0 24 24" fill="none">
      <path d="M8 8L4 12l4 4M16 8l4 4-4 4M14 4l-4 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const sections = ["Mission", "Vehicle", "Team", "Sponsors", "Contact"];

  const vehicleCards = [
    {
      title: "Mechanical Design",
      text: "Featuring a robust, corrosion-resistant HDPE open-frame chassis and a high-precision cast acrylic pressure vessel with hard-anodized 6061-T6 aluminum end caps. Engineered for an optimized low center of gravity (CG) and high hydrostatic stability.",
    },
    {
      title: "Electronics",
      text: "Powered by a high-capacity 4S LiPo battery coupled with a 150A power distribution network. Integrates 6x bidirectional BLHeli ESCs, digital MS5837 depth/pressure sensors, and hardware-level internal leak detection systems.",
    },
    {
      title: "Software",
      text: "Driven by ArduSub autopilot architecture running on a Pixhawk flight controller with a custom 45° vectored thruster mixing matrix. Handles real-time H.264 video streaming and telemetry over a high-speed Ethernet tether via Raspberry Pi.",
    },
  ];

  const teams: Team[] = [
    {
      name: "Mechanical",
      members: [
        { name: "Ali Çağıl", linkedin: "https://www.linkedin.com/in/alicagil" },
        { name: "Ömer Faruk Köşeli" },
        { name: "Ebu Derda Erdem Aydın" },
      ],
    },
    {
      name: "Electronics",
      members: [
        { name: "Yunus Emre Altıparmak" },
        { name: "Kadir Mehmet Güleç" },
        { name: "Hüseyin Efe Gürbüz" },
      ],
    },
    {
      name: "Software",
      members: [
        { name: "Osman Emir Özkan" },
        { name: "Oktay Çağıl" },
      ],
    },
  ];

  const [activeTeam, setActiveTeam] = useState<Team | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#082f49_0%,#061f3a_30%,#031426_65%,#010814_100%)] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_0%,rgba(125,211,252,0.35),transparent_35%),radial-gradient(circle_at_80%_55%,rgba(14,165,233,0.16),transparent_35%)]" />
        <div className="absolute left-0 top-0 h-[45vh] w-full bg-[linear-gradient(180deg,rgba(186,230,253,0.16),transparent)]" />
        <div className="light-ray left-[18%]" />
        <div className="light-ray left-[46%]" />
        <div className="light-ray left-[72%]" />

        {Array.from({ length: 14 }).map((_, i) => (
          <div key={`fish-${i}`} className={`fish fish-${(i % 6) + 1}`}>
            {["𓆝", "𓆟", "𓆜"][i % 3]}
          </div>
        ))}

        {Array.from({ length: 45 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="bubble"
            style={{
              left: `${(i * 17) % 100}%`,
              width: `${6 + (i % 5) * 4}px`,
              height: `${6 + (i % 5) * 4}px`,
              animationDelay: `${(i % 12) * 0.8}s`,
              animationDuration: `${10 + (i % 9)}s`,
            }}
          />
        ))}

        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: `${(i * 29) % 100}%`,
              top: `${10 + ((i * 23) % 82)}%`,
              animationDelay: `${i * 0.25}s`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#031426]/60 px-6 py-4 backdrop-blur-xl">
        <div className="relative inline-block">
          <span className="text-xl font-black tracking-[0.3em]">BAHT</span>
          <span className="absolute -right-7 bottom-0 text-[8px] italic tracking-[0.15em] text-white/20">
            @nevai
          </span>
        </div>

        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          {sections.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-cyan-200">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center">
        <p className="mb-6 text-xs font-semibold tracking-[0.5em] text-cyan-200">
          BLUEWATER ADVANCED HYDROGRAPHIC TEAM
        </p>

        <h1 className="text-7xl font-black tracking-tight md:text-9xl">BAHT</h1>

        <p className="mt-6 max-w-4xl text-2xl font-light text-white/90 md:text-4xl">
          Deep-Sea Engineering for the Twilight Zone
        </p>

        <p className="mt-6 max-w-4xl text-white/65">
          BAHT is a multidisciplinary engineering team developing robust,
          modular Remotely Operated Vehicles (ROVs) tailored for high-pressure
          subsurface exploration and hydrographic research.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#sponsors" className="rounded-full bg-cyan-300 px-8 py-4 font-bold text-slate-950 shadow-[0_0_45px_rgba(103,232,249,0.55)] transition hover:bg-white">
            Become a Sponsor
          </a>

          <a href="#vehicle" className="rounded-full border border-white/30 px-8 py-4 font-bold text-white/90 backdrop-blur transition hover:border-cyan-200">
            Explore Vehicle
          </a>
        </div>

        <p className="mt-24 animate-bounce text-sm tracking-[0.35em] text-white/45">
          SCROLL TO DIVE
        </p>
      </section>

      <section id="mission" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.4em] text-cyan-200">MISSION</p>
          <h2 className="mt-4 max-w-5xl text-4xl font-black md:text-6xl">
            Conquering the Pressures of Subsurface Exploration.
          </h2>
          <p className="mt-6 max-w-4xl text-lg text-white/65">
            BAHT is dedicated to designing reliable, modular underwater
            platforms engineered to bridge the gap between subsurface logistics
            and deep-sea environments through robust mechanical, payload, and
            communication architectures.
          </p>
        </div>
      </section>

      <section id="vehicle" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.4em] text-cyan-200">VEHICLE</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Built for the Deep</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {vehicleCards.map((card) => (
              <div key={card.title} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-[0_0_40px_rgba(34,211,238,0.16)]">
                <h3 className="text-2xl font-bold text-cyan-200">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.4em] text-cyan-200">TEAM</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Bluewater Advanced Hydrographic Team
          </h2>

          <p className="mt-6 max-w-3xl text-white/65">
            Click on a sub-team card to explore members and LinkedIn profiles.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {teams.map((team) => (
              <button
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="group rounded-[2rem] border border-white/10 bg-slate-950/30 p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.14)]"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_35px_rgba(103,232,249,0.18)] transition group-hover:border-cyan-200/50 group-hover:bg-cyan-300/20 group-hover:shadow-[0_0_50px_rgba(103,232,249,0.32)]">
                  <TeamIcon team={team.name} />
                </div>
                <h3 className="font-bold">{team.name}</h3>
                <p className="mt-3 text-xs text-white/45">View members</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl rounded-[3rem] border border-cyan-200/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)]">
          <p className="text-sm tracking-[0.4em] text-cyan-200">SPONSORS</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Support the next generation of engineers.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Gold Sponsor", "Silver Sponsor", "Bronze Sponsor"].map((item) => (
              <div key={item} className="flex h-44 items-center justify-center rounded-[2rem] border border-dashed border-white/30 bg-white/5 text-white/60 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 py-36 text-center">
        <h2 className="text-4xl font-black md:text-6xl">Join Our Mission</h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/65">
          Partner with BAHT and help us build the future of underwater robotics.
        </p>

        <a href="mailto:info@baht.com" className="mt-10 inline-block rounded-full bg-white px-10 py-4 font-bold text-slate-950 transition hover:bg-cyan-200">
          Contact Us
        </a>
      </section>

      {activeTeam && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-[2rem] border border-cyan-200/20 bg-[#031426]/95 p-8 shadow-[0_0_80px_rgba(34,211,238,0.18)]">
            <button onClick={() => setActiveTeam(null)} className="absolute right-6 top-6 rounded-full border border-white/20 px-3 py-1 text-white/70 hover:text-white">
              ✕
            </button>

            <p className="text-sm tracking-[0.35em] text-cyan-200">SUB-TEAM</p>
            <h3 className="mt-3 text-4xl font-black">{activeTeam.name}</h3>

            <div className="mt-8 space-y-4">
              {activeTeam.members.map((member) => (
                <div key={member.name} className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center">
                  <h4 className="font-bold">{member.name}</h4>

                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" className="rounded-full bg-cyan-300 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-white">
                      LinkedIn
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .light-ray {
          position: absolute;
          top: -10%;
          height: 120vh;
          width: 120px;
          transform: rotate(18deg);
          background: linear-gradient(to bottom, rgba(186,230,253,0.16), transparent 70%);
          filter: blur(18px);
          animation: rayMove 8s ease-in-out infinite alternate;
        }

        @keyframes rayMove {
          from { opacity: 0.25; transform: rotate(18deg) translateX(-20px); }
          to { opacity: 0.6; transform: rotate(18deg) translateX(20px); }
        }

        .fish {
          position: absolute;
          left: -10%;
          color: rgba(255,255,255,0.28);
          font-size: 22px;
          animation: swim linear infinite;
        }

        .fish-1 { top: 16%; animation-duration: 24s; }
        .fish-2 { top: 28%; animation-duration: 31s; animation-delay: 3s; font-size: 16px; }
        .fish-3 { top: 44%; animation-duration: 27s; animation-delay: 7s; font-size: 24px; }
        .fish-4 { top: 58%; animation-duration: 36s; animation-delay: 2s; font-size: 18px; }
        .fish-5 { top: 72%; animation-duration: 42s; animation-delay: 5s; font-size: 14px; }
        .fish-6 { top: 86%; animation-duration: 33s; animation-delay: 9s; font-size: 20px; }

        @keyframes swim {
          from { transform: translateX(0); }
          to { transform: translateX(125vw); }
        }

        .bubble {
          position: absolute;
          bottom: -80px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.06);
          animation: rise infinite ease-in;
        }

        @keyframes rise {
          from { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.65; }
          to { transform: translateY(-120vh) scale(1.4); opacity: 0; }
        }

        .star {
          position: absolute;
          color: rgba(255,255,255,0.32);
          font-size: 11px;
          animation: pulse 3s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.5); }
        }

        .mechanical-icon {
          animation: toolSwing 3s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes toolSwing {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(7deg); }
        }

        .electronics-icon {
          animation: circuitGlow 2.4s ease-in-out infinite;
        }

        @keyframes circuitGlow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(103,232,249,0.2)); opacity: 0.75; }
          50% { filter: drop-shadow(0 0 12px rgba(103,232,249,0.85)); opacity: 1; }
        }

        .software-icon {
          animation: codePulse 2.8s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes codePulse {
          0%, 100% { transform: scale(1); opacity: 0.78; }
          50% { transform: scale(1.12); opacity: 1; }
        }
      `}</style>
    </main>
  );
}