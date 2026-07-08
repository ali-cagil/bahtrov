"use client";

import { useEffect, useMemo, useState } from "react";

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
  const [activeTeam, setActiveTeam] = useState<Team | null>(null);
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setDepth(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = ["Mission", "Vehicle", "Roadmap", "Team", "Sponsors", "Contact"];

  const cinematicDepth = 1 - Math.pow(1 - depth, 2.4);
  const abyssDepth = Math.max(0, (cinematicDepth - 0.56) / 0.44);

  const bubbles = useMemo(() => Array.from({ length: 44 }), []);
  const marineSnow = useMemo(() => Array.from({ length: 72 }), []);
  const plankton = useMemo(() => Array.from({ length: 34 }), []);

  const depthTimeline = [
    {
      stage: "Surface",
      title: "Mission Definition",
      text: "Research, requirements, and system architecture for a modular underwater platform.",
      depth: "0M",
    },
    {
      stage: "Twilight Zone",
      title: "Engineering Integration",
      text: "Mechanical design, electronics, software, tether communication, and payload planning.",
      depth: "80M",
    },
    {
      stage: "Abyss Approach",
      title: "Reliability Testing",
      text: "Pressure-aware design, buoyancy tuning, leak detection, and controlled pool validation.",
      depth: "180M",
    },
    {
      stage: "Deployment",
      title: "Competition Readiness",
      text: "Mission execution, documentation, sponsor presentation, and continuous improvement.",
      depth: "300M",
    },
  ];

  const vehicleCards = [
    {
      title: "Mechanical Design",
      text: "A corrosion-resistant HDPE open-frame chassis with a precision acrylic pressure vessel and aluminum end caps, engineered for stability and modularity.",
    },
    {
      title: "Electronics",
      text: "A reliable power and control system integrating ESCs, pressure sensing, internal leak detection, and robust onboard electronics.",
    },
    {
      title: "Software",
      text: "ArduSub-based control architecture with vectored thruster mixing, real-time telemetry, and high-speed video over Ethernet tether.",
    },
  ];

  const roadmap = [
    "Concept Design",
    "CAD & Simulation",
    "Manufacturing",
    "Electronics Integration",
    "Pool Testing",
    "Competition Deployment",
  ];

  const sponsorTiers = [
    {
      name: "Platinum Partner",
      label: "Flagship Support",
      description: "Premium visibility across the BAHT website, vehicle branding, competition materials, and technical showcases.",
      benefits: ["Primary logo placement", "Vehicle branding", "Competition visibility"],
    },
    {
      name: "Gold Sponsor",
      label: "Core Mission Support",
      description: "High-impact sponsorship for prototyping, testing, manufacturing, and field operations.",
      benefits: ["Large logo placement", "Sponsor highlight", "Event visibility"],
    },
    {
      name: "Silver Sponsor",
      label: "Development Support",
      description: "Support for components, electronics, materials, software tools, and team logistics.",
      benefits: ["Website recognition", "Team appreciation post", "Competition deck listing"],
    },
    {
      name: "Technical Partner",
      label: "Engineering Collaboration",
      description: "For companies providing parts, machining, sensors, software, mentorship, or technical services.",
      benefits: ["Partner badge", "Product mention", "Collaboration credit"],
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

  const surfaceLight = Math.max(0.04, 1 - cinematicDepth * 1.2);
  const deepDarkness = Math.min(0.82, cinematicDepth * 1.02);
  const particleOpacity = 0.12 + cinematicDepth * 0.38;
  const rayOpacity = Math.max(0, 1 - cinematicDepth * 1.65);

  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        background: `linear-gradient(145deg,
          rgb(${8 - cinematicDepth * 7}, ${50 - cinematicDepth * 44}, ${78 - cinematicDepth * 60}) 0%,
          rgb(${5 - cinematicDepth * 4}, ${34 - cinematicDepth * 28}, ${62 - cinematicDepth * 50}) 38%,
          rgb(${2 - cinematicDepth * 1}, ${18 - cinematicDepth * 14}, ${38 - cinematicDepth * 30}) 72%,
          rgb(1, ${8 - cinematicDepth * 6}, ${18 - cinematicDepth * 14}) 100%
        )`,
        "--depth": cinematicDepth,
        "--abyss": abyssDepth,
      } as React.CSSProperties}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: surfaceLight,
            background:
              "radial-gradient(circle at 35% 0%, rgba(186,230,253,0.38), transparent 34%), radial-gradient(circle at 80% 55%, rgba(14,165,233,0.12), transparent 35%)",
          }}
        />

        <div className="caustics" style={{ opacity: surfaceLight * 0.22 }} />

        <div
          className="absolute left-0 top-0 h-[42vh] w-full transition-opacity duration-300"
          style={{
            opacity: surfaceLight,
            background: "linear-gradient(180deg, rgba(186,230,253,0.13), transparent)",
          }}
        />

        <div className="absolute inset-0 bg-black transition-opacity duration-300" style={{ opacity: deepDarkness }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.45)_100%)]" />

        <div className="light-ray left-[22%]" style={{ opacity: rayOpacity }} />
        <div className="light-ray left-[58%]" style={{ opacity: rayOpacity * 0.7 }} />

        <div className="abyss-fog" style={{ opacity: depth * 0.42 }} />

        {bubbles.map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="bubble"
            style={{
              left: `${(i * 23) % 100}%`,
              width: `${4 + (i % 5) * 3}px`,
              height: `${4 + (i % 5) * 3}px`,
              animationDelay: `${(i % 14) * 0.7}s`,
              animationDuration: `${10 + (i % 10)}s`,
              opacity: particleOpacity * 0.55,
            }}
          />
        ))}

        {marineSnow.map((_, i) => (
          <div
            key={`snow-${i}`}
            className="marine-snow"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 19) % 100}%`,
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              animationDelay: `${(i % 30) * 0.22}s`,
              animationDuration: `${12 + (i % 14)}s`,
              opacity: 0.04 + cinematicDepth * 0.3,
            }}
          />
        ))}

        {plankton.map((_, i) => (
          <div
            key={`plankton-${i}`}
            className="star"
            style={{
              left: `${(i * 29) % 100}%`,
              top: `${10 + ((i * 23) % 82)}%`,
              animationDelay: `${i * 0.28}s`,
              opacity: 0.05 + cinematicDepth * 0.24,
            }}
          >
            ✦
          </div>
        ))}

        <div className="depth-vignette" />
      </div>

      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#031426]/55 px-6 py-4 backdrop-blur-xl">
        <div className="relative inline-block">
          <span className="text-xl font-black tracking-[0.3em]">BAHT</span>
          <span className="absolute -right-7 bottom-0 text-[8px] italic tracking-[0.15em] text-white/20">@nevai</span>
        </div>

        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          {sections.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 text-[10px] tracking-[0.24em] text-white/30 md:flex">
        <div className="h-36 w-px overflow-hidden rounded-full bg-white/10">
          <div className="w-full rounded-full bg-white/60 transition-all duration-300" style={{ height: `${12 + cinematicDepth * 88}%` }} />
        </div>
        <span>{Math.round(cinematicDepth * 300)}M</span>
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center">
        <p className="mb-6 text-xs font-semibold tracking-[0.5em] text-cyan-100/90">
          BLUEWATER ADVANCED HYDROGRAPHIC TEAM
        </p>

        <h1 className="text-7xl font-black tracking-tight md:text-9xl">BAHT</h1>

        <p className="mt-6 max-w-4xl text-2xl font-light tracking-tight text-white/92 md:text-5xl">
          Deep-Sea Engineering for the Twilight Zone
        </p>

        <p className="mt-7 max-w-3xl text-base leading-8 text-white/58">
          BAHT designs modular Remotely Operated Vehicles for high-pressure subsurface exploration, hydrographic research, and competition-ready underwater missions.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#sponsors" className="rounded-full bg-white px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-100">
            Become a Sponsor
          </a>

          <a href="#vehicle" className="rounded-full border border-white/25 px-8 py-4 font-bold text-white/86 backdrop-blur transition hover:border-white/70">
            Explore Vehicle
          </a>
        </div>

        <p className="mt-24 animate-bounce text-sm tracking-[0.35em] text-white/38">
          SCROLL TO DIVE
        </p>
      </section>

      <section id="mission" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.4em] text-cyan-100/90">MISSION</p>
          <h2 className="mt-4 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">
            Conquering the pressures of subsurface exploration.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/60">
            BAHT develops reliable underwater platforms that bridge mechanical design, electronics, software, and communication systems into a complete engineering mission.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-4">
            {depthTimeline.map((item) => (
              <div key={item.stage} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100/80">{item.stage}</p>
                  <span className="font-mono text-xs text-white/38">{item.depth}</span>
                </div>
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vehicle" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.4em] text-cyan-100/90">VEHICLE</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Built for the Deep</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {vehicleCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/[0.09]"
              >
                <h3 className="text-2xl font-bold text-cyan-100">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.4em] text-cyan-100/90">ROADMAP</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            From concept to competition.
          </h2>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-white/15 md:block" />

            <div className="grid gap-5">
              {roadmap.map((item, index) => (
                <div key={item} className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl md:ml-14">
                  <div className="absolute -left-[3.95rem] top-8 hidden h-4 w-4 rounded-full border border-white/30 bg-cyan-100/80 shadow-[0_0_18px_rgba(207,250,254,0.35)] md:block" />
                  <p className="text-xs font-bold tracking-[0.35em] text-white/35">
                    PHASE {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.4em] text-cyan-100/90">TEAM</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Bluewater Advanced Hydrographic Team
          </h2>

          <p className="mt-6 max-w-3xl text-white/60">
            Click on a sub-team card to explore members and LinkedIn profiles.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {teams.map((team) => (
              <button
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.08]"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-100 transition group-hover:border-white/25 group-hover:bg-white/[0.1]">
                  <TeamIcon team={team.name} />
                </div>
                <h3 className="font-bold">{team.name}</h3>
                <p className="mt-3 text-xs text-white/42">View members</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(186,230,253,0.12),transparent_42%)]" />

            <div className="relative">
              <p className="text-sm tracking-[0.4em] text-cyan-100/90">SPONSORS</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                Power the next generation of underwater robotics.
              </h2>
              <p className="mt-6 max-w-3xl text-white/60">
                Partner with BAHT to support vehicle development, field testing, competition logistics, and student-led engineering.
              </p>
            </div>

            <div className="relative mt-12 grid gap-6 lg:grid-cols-2">
              {sponsorTiers.map((tier) => (
                <div key={tier.name} className="sponsor-tier group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/15 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.07]">
                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-100/75">
                      {tier.label}
                    </p>

                    <h3 className="mt-4 text-2xl font-black text-white">
                      {tier.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/58">
                      {tier.description}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {tier.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/68">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-100/80" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 md:p-10">
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-100/90">
                    Become Our Partner
                  </p>
                  <h3 className="mt-3 text-3xl font-black">
                    Help BAHT dive deeper.
                  </h3>
                  <p className="mt-4 max-w-2xl text-white/60">
                    Sponsor support directly helps BAHT manufacture, test, and deploy a competition-ready underwater robotic system.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a href="mailto:info@baht.com" className="rounded-full bg-white px-7 py-4 text-center font-bold text-slate-950 transition hover:bg-cyan-100">
                    Contact for Sponsorship
                  </a>
                  <a href="#" className="rounded-full border border-white/25 px-7 py-4 text-center font-bold text-white/85 transition hover:border-white/70">
                    Download Sponsorship Deck
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mt-10 grid gap-4 text-center md:grid-cols-3">
              {["Vehicle Development", "Competition Readiness", "Engineering Education"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/15 px-5 py-5 text-sm font-semibold text-white/65">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 py-36 text-center">
        <div className="pointer-events-none absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/8 blur-3xl" />

        <h2 className="relative text-4xl font-black tracking-tight md:text-6xl">Join Our Mission</h2>
        <p className="relative mx-auto mt-6 max-w-2xl text-white/60">
          Partner with BAHT and help us build the future of underwater robotics.
        </p>

        <a href="mailto:info@baht.com" className="relative mt-10 inline-block rounded-full bg-white px-10 py-4 font-bold text-slate-950 transition hover:bg-cyan-100">
          Contact Us
        </a>
      </section>

      {activeTeam && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#031426]/95 p-8 shadow-[0_0_80px_rgba(0,0,0,0.35)]">
            <button
              onClick={() => setActiveTeam(null)}
              className="absolute right-6 top-6 rounded-full border border-white/20 px-3 py-1 text-white/70 hover:text-white"
            >
              ✕
            </button>

            <p className="text-sm tracking-[0.35em] text-cyan-100/90">SUB-TEAM</p>
            <h3 className="mt-3 text-4xl font-black">{activeTeam.name}</h3>

            <div className="mt-8 space-y-4">
              {activeTeam.members.map((member) => (
                <div key={member.name} className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-5 sm:flex-row sm:items-center">
                  <h4 className="font-bold">{member.name}</h4>

                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-100">
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
        .caustics {
          position: absolute;
          inset: -20%;
          background-image:
            linear-gradient(115deg, transparent 0 44%, rgba(255,255,255,0.06) 46%, transparent 50%),
            linear-gradient(65deg, transparent 0 42%, rgba(125,211,252,0.05) 45%, transparent 52%);
          background-size: 220px 220px, 280px 280px;
          mix-blend-mode: screen;
          filter: blur(14px);
          animation: causticDrift 22s linear infinite;
        }

        @keyframes causticDrift {
          from { transform: translate3d(-2%, -1%, 0) rotate(0deg); }
          to { transform: translate3d(2%, 1%, 0) rotate(1deg); }
        }

        .depth-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 12%, transparent 0 28%, rgba(0,0,0,calc(0.20 + var(--depth)*0.38)) 84%),
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,calc(var(--abyss)*0.48)) 70%, rgba(0,0,0,calc(var(--abyss)*0.72)) 100%);
        }

        .light-ray {
          position: absolute;
          top: -10%;
          height: 120vh;
          width: 110px;
          transform: rotate(18deg);
          background: linear-gradient(to bottom, rgba(186,230,253,0.13), transparent 70%);
          filter: blur(22px);
          animation: rayMove 10s ease-in-out infinite alternate;
          transition: opacity 300ms ease;
        }

        @keyframes rayMove {
          from { transform: rotate(18deg) translateX(-14px); }
          to { transform: rotate(18deg) translateX(14px); }
        }

        .abyss-fog {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 80%, rgba(14,165,233,0.08), transparent 35%),
            radial-gradient(circle at 80% 90%, rgba(34,211,238,0.05), transparent 40%);
          filter: blur(32px);
          transition: opacity 300ms ease;
        }

        .bubble {
          position: absolute;
          bottom: -80px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.035);
          animation: rise infinite ease-in;
        }

        @keyframes rise {
          from { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.45; }
          to { transform: translateY(-120vh) scale(1.25); opacity: 0; }
        }

        .marine-snow {
          position: absolute;
          border-radius: 999px;
          background: rgba(226,246,255,0.55);
          box-shadow: 0 0 8px rgba(125,211,252,0.22);
          animation: snowDrift linear infinite;
        }

        @keyframes snowDrift {
          from { transform: translate3d(0, -10vh, 0); }
          to { transform: translate3d(22px, 110vh, 0); }
        }

        .star {
          position: absolute;
          color: rgba(255,255,255,0.24);
          font-size: 10px;
          animation: pulse 3.4s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.35); }
        }

        .sponsor-tier::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent);
          opacity: 0;
          transform: translateX(-40%);
          transition: opacity 300ms ease;
        }

        .sponsor-tier:hover::before {
          opacity: 1;
          animation: sponsorShine 1.1s ease forwards;
        }

        @keyframes sponsorShine {
          from { transform: translateX(-60%); }
          to { transform: translateX(70%); }
        }

        .mechanical-icon {
          animation: toolSwing 3.8s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes toolSwing {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(5deg); }
        }

        .electronics-icon {
          animation: circuitGlow 3s ease-in-out infinite;
        }

        @keyframes circuitGlow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(207,250,254,0.18)); opacity: 0.75; }
          50% { filter: drop-shadow(0 0 9px rgba(207,250,254,0.5)); opacity: 1; }
        }

        .software-icon {
          animation: codePulse 3.2s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes codePulse {
          0%, 100% { transform: scale(1); opacity: 0.78; }
          50% { transform: scale(1.08); opacity: 1; }
        }
      `}</style>
    </main>
  );
}
