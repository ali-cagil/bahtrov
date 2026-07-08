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

  const sections = ["Mission", "Vehicle", "Team", "Sponsors", "Contact"];

  const cinematicDepth = 1 - Math.pow(1 - depth, 2.4);
  const abyssDepth = Math.max(0, (cinematicDepth - 0.56) / 0.44);

  const fish = useMemo(() => Array.from({ length: 28 }), []);
  const bubbles = useMemo(() => Array.from({ length: 92 }), []);
  const marineSnow = useMemo(() => Array.from({ length: 120 }), []);
  const plankton = useMemo(() => Array.from({ length: 62 }), []);

  const missionTimeline = [
    {
      depth: "SURFACE",
      title: "Concept & Research",
      text: "Mission requirements, hydrodynamic constraints, system architecture, and sponsor-facing engineering goals are defined.",
    },
    {
      depth: "TWILIGHT ZONE",
      title: "Integrated Engineering",
      text: "Mechanical, electronics, and software systems converge into a modular ROV platform built for controlled underwater operation.",
    },
    {
      depth: "ABYSS APPROACH",
      title: "Reliability Testing",
      text: "Pressure vessel sealing, tether communication, leak detection, power distribution, and thruster response are validated.",
    },
    {
      depth: "DEPLOYMENT",
      title: "Competition-Ready Vehicle",
      text: "The BAHT ROV is prepared for demonstrations, competitions, sponsor showcases, and field-ready engineering presentation.",
    },
  ];

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

  const dashboard = [
    ["Pressure", `${(1 + cinematicDepth * 30).toFixed(1)} bar`],
    ["Battery", "15.8V"],
    ["Thrusters", "6 ACTIVE"],
    ["Tether Link", "ETHERNET"],
    ["Camera Feed", "H.264 LIVE"],
  ];

  const sponsorTiers = [
    {
      name: "Platinum Partner",
      label: "Flagship Support",
      description: "Premium visibility across the BAHT website, vehicle branding, competition materials, social media announcements, and technical showcase content.",
      benefits: ["Primary logo placement", "Vehicle branding area", "Competition visibility", "Engineering showcase feature"],
    },
    {
      name: "Gold Sponsor",
      label: "Core Mission Support",
      description: "High-impact sponsorship for companies supporting underwater robotics, student engineering, prototyping, testing, and field operations.",
      benefits: ["Large logo placement", "Sponsor highlight section", "Social media mention", "Event presentation visibility"],
    },
    {
      name: "Silver Sponsor",
      label: "Development Support",
      description: "Ideal for organizations that want to contribute to components, manufacturing, electronics, materials, software, and team logistics.",
      benefits: ["Logo on sponsor wall", "Website recognition", "Team appreciation post", "Competition deck listing"],
    },
    {
      name: "Technical Partner",
      label: "Engineering Collaboration",
      description: "For companies providing parts, manufacturing support, software tools, sensors, machining, materials, or technical mentorship.",
      benefits: ["Technical partner badge", "Product/service mention", "Use-case visibility", "Project collaboration credit"],
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

  const surfaceLight = Math.max(0.03, 1 - cinematicDepth * 1.28);
  const deepDarkness = Math.min(0.88, cinematicDepth * 1.04);
  const particleOpacity = 0.18 + cinematicDepth * 0.62;
  const rayOpacity = Math.max(0, 1 - cinematicDepth * 1.8);

  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        background: `linear-gradient(145deg,
          rgb(${8 - cinematicDepth * 7}, ${54 - cinematicDepth * 48}, ${84 - cinematicDepth * 66}) 0%,
          rgb(${6 - cinematicDepth * 5}, ${38 - cinematicDepth * 31}, ${70 - cinematicDepth * 56}) 34%,
          rgb(${3 - cinematicDepth * 2}, ${22 - cinematicDepth * 18}, ${45 - cinematicDepth * 36}) 68%,
          rgb(1, ${9 - cinematicDepth * 7}, ${22 - cinematicDepth * 18}) 100%
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
              "radial-gradient(circle at 35% 0%, rgba(186,230,253,0.46), transparent 34%), radial-gradient(circle at 80% 55%, rgba(14,165,233,0.18), transparent 35%)",
          }}
        />

        <div className="caustics" style={{ opacity: surfaceLight * 0.38 }} />

        <div
          className="absolute left-0 top-0 h-[45vh] w-full transition-opacity duration-300"
          style={{
            opacity: surfaceLight,
            background: "linear-gradient(180deg, rgba(186,230,253,0.18), transparent)",
          }}
        />

        <div className="absolute inset-0 bg-black transition-opacity duration-300" style={{ opacity: deepDarkness }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />

        <div className="light-ray left-[18%]" style={{ opacity: rayOpacity }} />
        <div className="light-ray left-[46%]" style={{ opacity: rayOpacity * 0.85 }} />
        <div className="light-ray left-[72%]" style={{ opacity: rayOpacity * 0.7 }} />

        <div className="abyss-fog" style={{ opacity: depth * 0.55 }} />

        {fish.map((_, i) => (
          <div
            key={`fish-${i}`}
            className={`fish fish-${(i % 6) + 1}`}
            style={{
              opacity: 0.08 + particleOpacity * 0.32,
              transform: `translateY(${cinematicDepth * (i % 5) * 28}px) scale(${1 - cinematicDepth * 0.22})`,
            }}
          >
            {["𓆝", "𓆟", "𓆜"][i % 3]}
          </div>
        ))}

        {bubbles.map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="bubble"
            style={{
              left: `${(i * 17) % 100}%`,
              width: `${5 + (i % 6) * 4}px`,
              height: `${5 + (i % 6) * 4}px`,
              animationDelay: `${(i % 14) * 0.65}s`,
              animationDuration: `${8 + (i % 10)}s`,
              opacity: particleOpacity * (0.45 + abyssDepth * 0.7),
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
              width: `${1 + (i % 4)}px`,
              height: `${1 + (i % 4)}px`,
              animationDelay: `${(i % 30) * 0.22}s`,
              animationDuration: `${10 + (i % 14)}s`,
              opacity: 0.05 + cinematicDepth * 0.46,
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
              animationDelay: `${i * 0.25}s`,
              opacity: 0.08 + cinematicDepth * 0.42,
            }}
          >
            ✦
          </div>
        ))}

        <div className="depth-vignette" />
      </div>

      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#031426]/60 px-6 py-4 backdrop-blur-xl">
        <div className="relative inline-block">
          <span className="text-xl font-black tracking-[0.3em]">BAHT</span>
          <span className="absolute -right-7 bottom-0 text-[8px] italic tracking-[0.15em] text-white/20">@nevai</span>
        </div>

        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          {sections.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-cyan-200">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 text-[10px] tracking-[0.24em] text-white/35 md:flex">
        <div className="h-36 w-px overflow-hidden rounded-full bg-white/10">
          <div className="w-full rounded-full bg-cyan-200/70 transition-all duration-300" style={{ height: `${12 + cinematicDepth * 88}%` }} />
        </div>
        <span>{Math.round(cinematicDepth * 300)}M</span>
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center">
        <p className="mb-6 text-xs font-semibold tracking-[0.5em] text-cyan-200">
          BLUEWATER ADVANCED HYDROGRAPHIC TEAM
        </p>

        <h1 className="text-7xl font-black tracking-tight md:text-9xl">BAHT</h1>

        <p className="mt-6 max-w-4xl text-2xl font-light text-white/90 md:text-4xl">
          Deep-Sea Engineering for the Twilight Zone
        </p>

        <p className="mt-6 max-w-4xl text-white/65">
          BAHT is a multidisciplinary engineering team developing robust, modular Remotely Operated Vehicles (ROVs) tailored for high-pressure subsurface exploration and hydrographic research.
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
            BAHT is dedicated to designing reliable, modular underwater platforms engineered to bridge the gap between subsurface logistics and deep-sea environments through robust mechanical, payload, and communication architectures.
          </p>

          <div className="mission-timeline relative mt-20 overflow-hidden rounded-[3rem] border border-cyan-200/10 bg-black/20 p-6 backdrop-blur-xl md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(103,232,249,0.18),transparent_42%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200/80">Ocean Descent</p>
                <h3 className="mt-3 text-3xl font-black md:text-4xl">From surface concept to deep-sea deployment.</h3>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/50">
                The BAHT development path is designed like a descent: each stage takes the vehicle closer to reliable underwater operation.
              </p>
            </div>

            <div className="relative grid gap-5 lg:grid-cols-4">
              {missionTimeline.map((step, index) => (
                <div key={step.title} className="timeline-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-200/40 hover:bg-cyan-200/[0.08]">
                  <div className="absolute right-5 top-5 font-mono text-5xl font-black text-white/[0.04]">0{index + 1}</div>
                  <div className="relative">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-200/10 font-mono text-sm font-black text-cyan-100 shadow-[0_0_24px_rgba(103,232,249,0.12)]">
                      {index + 1}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-200/75">{step.depth}</p>
                    <h4 className="mt-3 text-xl font-black text-white">{step.title}</h4>
                    <p className="mt-4 text-sm leading-7 text-white/55">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vehicle" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.4em] text-cyan-200">VEHICLE</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Built for the Deep</h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
              {vehicleCards.map((card) => (
                <div key={card.title} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-[0_0_40px_rgba(34,211,238,0.16)]">
                  <h3 className="text-2xl font-bold text-cyan-200">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-black/30 p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.08)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
              <div className="relative">
                <p className="text-xs tracking-[0.35em] text-cyan-200">LIVE SYSTEM</p>
                <h3 className="mt-3 text-2xl font-black">Vehicle Telemetry</h3>

                <div className="mt-7 space-y-4">
                  {dashboard.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-xs text-white/45">{label}</span>
                      <span className="font-mono text-sm text-cyan-100">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-cyan-200/10 bg-cyan-200/5 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs text-white/45">
                    <span>THRUSTER VECTOR MATRIX</span>
                    <span>45°</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="thruster-bar h-full rounded-full bg-cyan-200/80" />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-xs text-cyan-100/80">
                  <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                  AUTOPILOT LINK ACTIVE
                </div>
              </div>
            </div>
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
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[3rem] border border-cyan-200/10 bg-black/25 p-8 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)] md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.18),transparent_42%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />

            <div className="relative">
              <p className="text-sm tracking-[0.4em] text-cyan-200">SPONSORS</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
                Power the next generation of underwater robotics.
              </h2>
              <p className="mt-6 max-w-3xl text-white/60">
                BAHT partners with forward-thinking companies to develop competition-ready underwater systems, support student engineering, and create professional visibility for sponsors across web, events, vehicle branding, and technical showcases.
              </p>
            </div>

            <div className="relative mt-12 grid gap-6 lg:grid-cols-2">
              {sponsorTiers.map((tier) => (
                <div key={tier.name} className="sponsor-tier group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-200/40 hover:bg-cyan-200/[0.08] hover:shadow-[0_0_55px_rgba(34,211,238,0.16)]">
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-cyan-200/10 blur-2xl transition group-hover:bg-cyan-200/20" />

                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200/80">
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
                        <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-cyan-200/[0.08] p-8 md:p-10">
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.18),transparent_65%)]" />

              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
                    Become Our Partner
                  </p>
                  <h3 className="mt-3 text-3xl font-black">
                    Help BAHT dive deeper.
                  </h3>
                  <p className="mt-4 max-w-2xl text-white/60">
                    Sponsor funding and technical partnerships directly support ROV manufacturing, electronics, testing, sensors, competition logistics, and student engineering development.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a href="mailto:info@baht.com" className="rounded-full bg-cyan-300 px-7 py-4 text-center font-bold text-slate-950 transition hover:bg-white">
                    Contact for Sponsorship
                  </a>
                  <a href="#" className="rounded-full border border-white/25 px-7 py-4 text-center font-bold text-white/85 transition hover:border-cyan-200 hover:text-cyan-100">
                    Download Sponsorship Deck
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mt-10 grid gap-4 text-center md:grid-cols-3">
              {["Vehicle Development", "Competition Readiness", "Engineering Education"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-5 py-5 text-sm font-semibold text-white/65">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 py-36 text-center">
        <div className="pointer-events-none absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

        <h2 className="relative text-4xl font-black md:text-6xl">Join Our Mission</h2>
        <p className="relative mx-auto mt-6 max-w-2xl text-white/65">
          Partner with BAHT and help us build the future of underwater robotics.
        </p>

        <a href="mailto:info@baht.com" className="relative mt-10 inline-block rounded-full bg-white px-10 py-4 font-bold text-slate-950 transition hover:bg-cyan-200">
          Contact Us
        </a>
      </section>

      {activeTeam && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-[2rem] border border-cyan-200/20 bg-[#031426]/95 p-8 shadow-[0_0_80px_rgba(34,211,238,0.18)]">
            <button
              onClick={() => setActiveTeam(null)}
              className="absolute right-6 top-6 rounded-full border border-white/20 px-3 py-1 text-white/70 hover:text-white"
            >
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
        .caustics {
          position: absolute;
          inset: -20%;
          background-image:
            linear-gradient(115deg, transparent 0 44%, rgba(255,255,255,0.08) 46%, transparent 50%),
            linear-gradient(65deg, transparent 0 42%, rgba(125,211,252,0.08) 45%, transparent 52%);
          background-size: 180px 180px, 240px 240px;
          mix-blend-mode: screen;
          filter: blur(10px);
          animation: causticDrift 18s linear infinite;
        }

        @keyframes causticDrift {
          from { transform: translate3d(-3%, -2%, 0) rotate(0deg); }
          to { transform: translate3d(3%, 2%, 0) rotate(1deg); }
        }

        .depth-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 12%, transparent 0 24%, rgba(0,0,0,calc(0.24 + var(--depth)*0.42)) 82%),
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,calc(var(--abyss)*0.54)) 70%, rgba(0,0,0,calc(var(--abyss)*0.82)) 100%);
        }

        .light-ray {
          position: absolute;
          top: -10%;
          height: 120vh;
          width: 120px;
          transform: rotate(18deg);
          background: linear-gradient(to bottom, rgba(186,230,253,0.18), transparent 70%);
          filter: blur(18px);
          animation: rayMove 8s ease-in-out infinite alternate;
          transition: opacity 300ms ease;
        }

        @keyframes rayMove {
          from { transform: rotate(18deg) translateX(-20px); }
          to { transform: rotate(18deg) translateX(20px); }
        }

        .abyss-fog {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 80%, rgba(14,165,233,0.12), transparent 35%),
            radial-gradient(circle at 80% 90%, rgba(34,211,238,0.08), transparent 40%);
          filter: blur(28px);
          transition: opacity 300ms ease;
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
          from { translate: 0 0; }
          to { translate: 125vw 0; }
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

        .marine-snow {
          position: absolute;
          border-radius: 999px;
          background: rgba(226,246,255,0.75);
          box-shadow: 0 0 10px rgba(125,211,252,0.35);
          animation: snowDrift linear infinite;
        }

        @keyframes snowDrift {
          from { transform: translate3d(0, -10vh, 0); }
          to { transform: translate3d(28px, 110vh, 0); }
        }

        .star {
          position: absolute;
          color: rgba(255,255,255,0.32);
          font-size: 11px;
          animation: pulse 3s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.5); }
        }

        .timeline-card::before,
        .sponsor-tier::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(120deg, transparent, rgba(103,232,249,0.12), transparent);
          opacity: 0;
          transform: translateX(-40%);
          transition: opacity 300ms ease;
        }

        .timeline-card:hover::before,
        .sponsor-tier:hover::before {
          opacity: 1;
          animation: sponsorShine 1.1s ease forwards;
        }

        @keyframes sponsorShine {
          from { transform: translateX(-60%); }
          to { transform: translateX(70%); }
        }

        .mission-timeline::after {
          content: "";
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(103,232,249,0.22), transparent);
        }

        .thruster-bar {
          width: 72%;
          animation: thrusterPulse 2.2s ease-in-out infinite;
          box-shadow: 0 0 18px rgba(103,232,249,0.45);
        }

        @keyframes thrusterPulse {
          0%, 100% { width: 54%; opacity: 0.6; }
          50% { width: 88%; opacity: 1; }
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
