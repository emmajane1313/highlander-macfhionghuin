"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="relative w-full flex-col items-center flex">
      <div className="relative max-w-md w-full h-fit flex flex-col items-center pt-6 md:pt-12 justify-center gap-3 px-4">
        <div className="relative w-fit h-fit flex leading-tight md:leading-3 font-clana text-4xl md:text-5xl lg:text-6xl text-center">
          Clann Mhic Fhionghuin
        </div>
        <div className="relative w-fit h-fit flex font-king text-sm md:text-base text-center">
          Cuimhnich Bàs Ailpein!
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-center gap-2 md:gap-4 flex-wrap px-4 py-4">
        {[
          { titulo: "MacKinnon Ancient Tartan", image: "mackinnonancient" },
          {
            titulo: "MacKinnon Ancient Hunting Tartan",
            image: "mackinnonhuntingancient",
          },
          {
            titulo: "MacKinnon Ancient Red Tartan",
            image: "mackinnonredancient",
          },
          {
            titulo: "MacKinnon Modern Hunting Tartan",
            image: "mackinnonhuntingmodern",
          },
          {
            titulo: "MacKinnon Modern Tartan",
            image: "mackinnonmodernvarient",
          },
          {
            titulo: "MacKinnon Modern Red Tartan",
            image: "mackinnonredmodern",
          },
        ].map((el, i) => (
          <div
            key={i}
            className="relative w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)]"
            title={el.titulo}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
            }}
          >
            <div className="relative w-8 rounded-full h-8 flex overflow-hidden border border-white/40">
              <Image
                draggable={false}
                fill
                className="rounded-full"
                objectFit="cover"
                src={`/images/${el.image}.png`}
                alt={el.image}
              />
              <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] flex mx-auto scale-75 sm:scale-90 md:scale-100">
        <div className="absolute bottom-32 md:bottom-auto -right-3 md:right-auto md:left-16 md:left-20 w-fit h-fit flex">
          <div className="absolute -left-24 md:-left-28 top-12 sm:top-16 md:top-20 w-fit h-fit flex flex-row gap-1 sm:gap-2">
            <div className="relative w-fit h-fit text-[10px] sm:text-xs font-clana text-white whitespace-nowrap">
              An t-Eilean Sgitheanach
            </div>
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 rotate-80 flex">
              <Image
                alt="Arrow"
                layout="fill"
                objectFit="contain"
                src={"/images/arrow.png"}
                draggable={false}
              />
            </div>
          </div>
          <div className="relative w-48 h-64 sm:w-52 sm:h-72 md:w-60 md:h-80 flex">
            <Image
              alt="Isle of Skye"
              layout="fill"
              objectFit="contain"
              src={"/images/isleofskye.png"}
              draggable={false}
            />
          </div>
        </div>
        <div className="absolute left-5 md:-left-9 -bottom-6 md:bottom-24 w-fit h-fit flex">
          <div className="absolute -left-12 sm:-left-14 md:-left-16 w-fit h-fit flex flex-row gap-1 sm:gap-2">
            <div className="relative w-fit h-fit text-[10px] sm:text-xs font-clana text-white whitespace-nowrap">
              Eilean I
            </div>
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 rotate-90 flex">
              <Image
                alt="Arrow"
                layout="fill"
                objectFit="contain"
                src={"/images/arrow.png"}
                draggable={false}
              />
            </div>
          </div>
          <div className="relative w-6 h-10 sm:w-8 sm:h-14 flex">
            <Image
              alt="Isle of Iona"
              layout="fill"
              objectFit="contain"
              src={"/images/isleofiona.png"}
              draggable={false}
            />
          </div>
        </div>
        <div className="absolute right-12 md:right-auto top-32 md:top-40 w-fit h-fit flex">
          <div className="absolute -right-20 sm:-right-24 md:-right-28 top-24 sm:top-32 md:top-40 w-fit h-fit flex flex-row gap-1 sm:gap-2">
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 rotate-180 flex">
              <Image
                alt="Arrow"
                layout="fill"
                objectFit="contain"
                src={"/images/arrow.png"}
                draggable={false}
              />
            </div>
            <div className="relative w-fit h-fit text-[10px] sm:text-xs font-clana text-white whitespace-nowrap">
              An t-Eilean Muileach
            </div>
          </div>
          <div className="relative w-48 h-64 sm:w-52 sm:h-72 md:w-60 md:h-80 flex">
            <Image
              alt="Isle of Mull"
              layout="fill"
              objectFit="contain"
              src={"/images/isleofmull.png"}
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full border-t-8 flex flex-col items-center bg-white min-h-screen">
        <div className="relative w-full h-fit flex flex-row justify-between items-start">
          <div className="absolute md:relative left-0 top-0 w-fit h-fit flex justify-start">
            <div className="relative mix-blend-difference h-24 w-24 md:w-48 md:h-48 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 flex">
              <Image
                alt="Ulster"
                layout="fill"
                objectPosition="top left"
                objectFit="contain"
                src={"/images/ulster.png"}
                draggable={false}
              />
            </div>
          </div>
          <div className="relative max-w-md w-full flex flex-col px-4 md:px-2 py-4">
            <div className="relative text-[5vw] flex font-mayon py-2 text-left">
              Dál Riata
            </div>
            <div className="relative w-full h-fit text-left gap-2 flex flex-col">
              {[
                "2000–1200 R.C. → Thòisich muinntir Indo-Eòrpach a'ruigsinn nan Eileanan Bhreatannach.",
                "1200–800 R.C. → Chaidh cultar Ceilteach a chruthachadh ann an Èirinn.",
                "Mu 1000 R.C. → Bha na Ceiltich stèidhichte gu daingeann ann an Èirinn.",
                "Mu 800–400 R.C. → Dh' fhas cultar nan Gàidheal; thòisich an eagrachadh treubhach (na túatha) a' gabhail cruth.",
                "Mu 400–100 R.C. → Chaidh na prìomh threubhan is rìoghachdan roinneil a chur air dòigh.",
                "100–200 A.D. → Bha rìoghachdan nan Gàidheal a' neartachadh ann an ceann a tuath na h-Èireann.",
                "Thòisich muinntir roinne Aontroma is Doire a' fàs cumhachdach.",
                "Mu 200–300 A.D. → Dh'èirich an sinnsear uirsgeulach, Ríada; chaidh treubh Dháil Ríata a stèidheachadh. \"Muinntir Ríada\". Co-bhanntachd shocair de bhuidhnean-càirdeis, na Cenél nGabráin, Cenél Loairn, is Cenél Chomgaill, a' sgaoileadh tarsainn Uladh is Earra-Ghàidheal.",
              ].map((teacsa, i) => (
                <div
                  key={i}
                  className="relative w-full h-fit flex text-[10px] sm:text-xs font-king"
                >
                  {teacsa}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute md:relative right-0 top-0 w-fit h-fit flex justify-end">
            <div className="relative mix-blend-difference h-24 w-24 md:w-48 md:h-48 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 flex">
              <Image
                alt="Argyll"
                layout="fill"
                objectPosition="top right"
                objectFit="contain"
                src={"/images/argyll.png"}
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit border-2 flex border-dashed"></div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-black z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/voyagetoargyll.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/voyagetoargyll.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10 flex"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Ruigsinn ann an Earra-Ghàidheal
                </div>
                <div className="relative w-full justify-center md:justify-start h-fit flex text-xs sm:text-sm font-king">
                  Ann an linn nan 500an, dh&apos;fhàg Dál Riata cladach Uladh, agus
                  sheòl iad thairis air Sruth na Maoile gu fearann ùr ann an
                  Earra-Ghàidheal.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm font-wind  justify-center md:justify-start">
                  Ì agus Eilean Nam Ban
                </div>
                <div className="relative w-full justify-center md:justify-start h-fit flex text-xs font-king">
                  Ann an 563, stèidhich Calum Cille an manachainn aig Ì Chaluim
                  Chille, air an eilean bheag Ì, ri taobh Eilean Mhuile. Far am
                  bi bo bidh bean, s&apos; far am bi bean bidh mallachadh. Nach eil
                  fhios agad...
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:pl-8 w-full order-1 md:order-2">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/eileannamban.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/eileannamban.mp4" />
              </video>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm font-wind justify-center md:justify-start">
                  Rìoghachd Ghàidhealach thar a&apos; chuain
                </div>
                <div className="relative w-full justify-center md:justify-start h-fit flex text-xs font-king">
                  Lean Cenél nGabráin orra a&apos; cumail an rìgh-chathair tron
                  t-seachdamh linn. Dh&apos;fhàs lìon manachail Ì gu luath, agus rinn
                  e Ì mar an ionad creideimh as buadhmhoire ann am Breatainn. Fo
                  Dhòmhnall Brecc, dh&apos;fhuiling Dál Riata callan-cogaidh mòra
                  agus thàinig i fo uachdranas Oswy ann an Northumbria. Aig an
                  aon àm, rinn na Cruithnich aonachadh fo Bhridei mac Beli, às
                  dèidh dhaibh Northumbria a&apos; chùis a chur orra ann an 685.
                  Dh&apos;fhàs na còmhstrithean eadar na cinnidhean Gàidhealach fhèin
                  nas làidire, agus dh&apos;fhàg sin Dál Riata lag, air a pronnadh
                  eadar nàbaidhean nas treasa.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:pl-8 w-full order-1 md:order-2">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Transmarine"
                  draggable={false}
                  src="/images/transmarine.png"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/pictland.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/pictland.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:pl-8 w-full">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm font-wind justify-center md:justify-start">
                  Gabhal nan Cruithneach
                </div>
                <div className="relative w-full justify-center md:justify-start h-fit flex text-xs font-king">
                  Bha farpais eadar Cenél nGabráin san deas agus Cenél Loairn
                  san tuath, agus dh&apos;fhàg sin structar a-staigh Dháil Ríata lag
                  is briste. Ghabh na Cruithnich fo Onuist mac Uurguist
                  (732–761) brath air na sgarraidhean sin. Eadar 734 agus 736,
                  chuir Onuist iomairtean-cogaidh an aghaidh Dháil Ríata. Ghlac
                  e agus mharbh e prionnsaichean Gàidhealach a bha nan nàimhdean
                  dha. Ghabh e Dùn Add, dùn rìoghail Dháil Ríata agus samhla na
                  rìoghachd fhèin. Cha deach Dál Riata a sgrios, ach dh&apos;fhàs i
                  na prìomh-roinn fo smachd nan Cruithneach, le uaislean
                  Gàidhealach fhathast beò fo an uachdranas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center bg-black min-h-screen px-4">
        <div className="relative w-full h-fit border-t-2 border-white flex border-dashed p-2"></div>
        <div className="relative max-w-4xl w-full h-fit flex text-center font-king text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-6 md:py-8">
          Ann an 795, thòisich ionnsaighean nan Lochlannach.
        </div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 text-white">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-white z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/vikingraid.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/vikingraid.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan1.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:pl-8 w-full">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm font-wind justify-center md:justify-start">
                  802 A&apos; Chiad Ionnsaigh Lochlannach air Ì
                </div>
                <div className="relative w-full h-fit flex text-xs font-king justify-center md:justify-start">
                  Chuir an ionnsaigh air Ì bun os cionn ùghdarras creideimh nan
                  Gàidheal, agus nochd i cho so-leònte &apos;s a bha cladach
                  Earra-Ghàidheal.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  806 Mortadh nam Manach aig Ì
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Thill na creachadairean Lochlannach, agus mharbh iad sia-deug
                  is trì fichead de na manaich. Ghluais na feadhainn a thàinig
                  beò pàirt den choimhearsnachd manachail gu Ceanannas ann an
                  Èirinn, ged a dh&apos;fhuirich cuid eile fhathast air Ì.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan1.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:pl-8 w-full order-1 md:order-2">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/ionaburning.png"
                className="relative w-full max-w-xs sm:max-w-sm md:w-80 flex object-contain"
              >
                <source src="/videos/ionaburning.mp4" />
              </video>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/monkmassacre.png"
                className="relative w-full max-w-xs sm:max-w-sm md:w-80 flex object-contain"
              >
                <source src="/videos/monkmassacre.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan1.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:pl-8 w-full">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Ionnsaighean nan Cinneach Cèin
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Tha na h-annala a&apos; clàradh ionnsaighean &quot;paganach&quot; a&apos;
                  leantainn air cladach an iar na h-Alba. Thòisich
                  long-chabhlach nan Lochlannach a&apos; fuireach tro gheamhraidhean
                  anns na h-Eileanan Siar, agus a&apos; stèidheachadh bunaitean
                  leth-sheasmhach. Bha na creachan ag amas air Earra-Ghàidheal,
                  na h-Eileanan a-staigh, agus oirthir nan Cruithneach. Chuir
                  seo bun os cionn dìonan cladaich nan Cruithneach, agus leig e
                  às neart rìoghachdan nan Gàidheal agus nan Cruithneach aig an
                  aon àm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center bg-white py-12">
        <div className="relative w-full h-fit border-2 flex border-dashed"></div>
        <div className="relative w-full max-w-6xl items-center flex flex-col gap-6 py-8">
          <div className="relative w-fit md:w-full flex flex-col md:flex-row justify-between md:items-start gap-8">
            {[
              {
                period: "576–609",
                event: "Aodhán mac Gabráin à Cenél nGabráin",
              },
              {
                period: "631–642",
                event: "Dòmhnall Brecc à Cenél nGabráin",
              },
              {
                period: "701–723",
                event: "Sealbach mac Fhearchair à Cenél Loairn",
              },
              {
                period: "732–761",
                event: "Onuist mac Uurguist, Rìgh nan Cruithneach",
              },
              {
                period: "Deireadh nan 700an",
                event: "Linn mheasgaichte Ghàidhealach–Chruithneach",
              },
              {
                period: "820an–834",
                event: "Èirigh Ailpín mhic Eachdach à Cenél nGabráin",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-2 flex-1"
              >
                <div className="relative w-fit h-fit flex text-sm font-wind">
                  {item.period}
                </div>
                <div className="relative w-fit h-fit flex text-xs font-king text-center">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-fit border-2 flex border-dashed"></div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center bg-[#08088D] text-white">
        <div className="relative w-full">
          <Image
            width={769}
            height={1345}
            src={"/images/bas.png"}
            alt="bualadh mu dheireadh"
            draggable={false}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="relative w-full h-fit border-t-4 border-white flex border-dashed"></div>
        <div className="relative max-w-md h-fit flex flex-col items-center justify-center gap-3 py-6 text-center">
          <div className="relative w-fit h-fit flex font-wind text-lg">
            Gabh Ailpín mac Eachdach brath air aimhreit nan Lochlannach agus bàs
            Eóganáin mhic Óengusa
          </div>
          <video
            loop
            autoPlay
            muted
            draggable={false}
            poster="/images/macalpine.png"
            className="relative w-80 flex object-contain"
          >
            <source src="/videos/macalpine.mp4" />
          </video>
          <div className="relative w-fit h-fit flex font-king">
            Tha rìoghachd nan Cruithneach gun stiùir, gun aonachd. À
            Earra-Ghàidheal, gluaisidh Ailpín le claidheamh &apos;na làimh, a-steach
            do dhùthaich nan Cruithneach, is Ghall-Ghàidheal mar a&apos; chrìoch. Ach
            thuiteas e, air a&apos; chathair, air an talamh, agus thèid a cheann àrd
            a chur air stob. Bidh Dál Riata na tobhta.
            <br />
            <br />
            Ach èiridh a mhac, Coinneach mac Ailpín, fear a&apos; dìoghladh, fear a&apos;
            gabhail an rìgh-chathair. Le cogadh is cealg, bidh e a&apos; ceangal nan
            rìoghachdan fo aon bhratach. Tha na seann sgeulachdan ag ràdh, gun
            tug e cuireadh do uaislean nan Cruithneach gu fleadh mhòr, agus
            nuair a thuit na beingean, thuit iad fhèin gu bàs. Mar sin
            chrìochnaich an seann òrdugh nan Cruithneach ann am fuil is feall.
            <br />
            <br />
            Ann an ochd ceud is trì fichead, tha Coinneach air a ghairm Rex
            Pictorum, Rìgh nan Cruithneach, agus thig Gàidheal is Cruithneach gu
            bhith nan aon sluagh: Alba.
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center bg-white py-12">
        <div className="relative w-full h-fit border-2 flex border-dashed"></div>
        <div className="relative w-full max-w-6xl flex items-center flex-col gap-6 py-8">
          <div className="relative w-fit md:w-full flex flex-col md:flex-row justify-between md:items-start gap-8">
            {[
              {
                period: "843–858",
                event: "Coinneach mac Ailpín",
              },
              {
                period: "858–862",
                event: "Dòmhnall mac Ailpín",
              },
              {
                period: "862–877",
                event: "Còiseam mac Choinnich",
              },
              {
                period: "877–878",
                event: "Aodh mac Choinnich",
              },
              {
                period: "878–889",
                event: "Eòchaidh is Ciric",
              },
              {
                period: "889–900",
                event: "Dòmhnall mac Còiseim",
              },
              {
                period: "900–943",
                event: "Còiseam II mac Ailpín",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-2 flex-1"
              >
                <div className="relative w-fit h-fit flex text-sm font-wind">
                  {item.period}
                </div>
                <div className="relative w-fit h-fit flex text-xs font-king text-center">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-fit border-2 flex border-dashed"></div>
      </div>
      <div className="relative w-full flex flex-col items-center bg-[#CB3B58]  min-h-screen">
        <div className="relative w-full h-fit border-t-2 border-azul flex border-dashed p-2"></div>
        <div className="relative max-w-4xl w-fit h-fit flex text-center font-king text-azul text-xl md:text-6xl">
          Alba. Rìoghachd ùr Ghàidhealach-Chruithneach.
        </div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 text-azul px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-azul z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/pictsvanish.png"
                className="relative w-full max-w-xs sm:max-w-sm md:w-80 flex object-contain"
              >
                <source src="/videos/pictsvanish.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan2.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:pl-8 w-full">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Crìoch nan Cruithneach
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Tha cànan agus aithne nan Cruithneach a&apos; crìonadh mean air
                  mhean às na h-annala, agus gan gabhail a-steach le cultar nan
                  Gàidheal.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  906 Comhairle Shrùin
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Tha Còiseam II agus na h-easbaigean a&apos; cruinneachadh aig Srùn,
                  far a bheil lagh agus creideamh nan Cruithneach is nan
                  Gàidheal air an daingneachadh ann an Alba.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan2.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:pl-8 w-full order-1 md:order-2">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/sconecouncil.png"
                className="relative w-full max-w-xs sm:max-w-sm md:w-80 flex object-contain"
              >
                <source src="/videos/sconecouncil.mp4" />
              </video>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/brunanburh.png"
                className="relative w-full max-w-xs sm:max-w-sm md:w-80 flex object-contain"
              >
                <source src="/videos/brunanburh.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan2.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:pl-8 w-full">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  937 Blàr Bhrunanburh
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Tha Còiseam II agus Amlaíb nan Gàidheal a&apos; tighinn còmhla an
                  aghaidh Aethelstan Shasainn. Blàr mòr, fuilteach; ged a
                  bhuannaicheas na Sasannaich.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  943 Aisig Chòiseim II
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Às dèidh riaghailt trì fichead is trì bliadhna, leig Còiseam
                  II às an rìgh-chathair le a thoil fhèin agus ghluais e gu
                  manachainn Chill Rìmhinn. Rìgh fada na shuidhe, thug e
                  seasmhachd do dh&apos;Alba, ag àrdachadh na rìoghachd air
                  bun-stèidh Choinnich mhic Ailpín.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan2.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-2">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/abdication.png"
                className="relative w-full max-w-xs sm:max-w-sm md:w-80 flex object-contain"
              >
                <source src="/videos/abdication.mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center bg-white py-12">
        <div className="relative w-full h-fit border-2 flex border-dashed"></div>
        <div className="relative w-full max-w-6xl flex flex-col items-center gap-6 py-8">
          <div className="relative w-fit md:w-full flex flex-col md:flex-row justify-between md:items-start gap-8">
            {[
              {
                period: "500an–700an",
                event: "Leudaichidh Dál Riata a-steach do dh’Earra-Ghàidheal",
              },
              {
                period: "730an–760an",
                event: "Gabhal nan Cruithneach air Dál Riata.",
              },
              { period: "834", event: "Crìochnaich an aghaidh Ghàidhealach." },
              { period: "843–877", event: "Cruthachadh Alba" },
              { period: "900–943", event: "Daingneachadh Alba" },
              {
                period: "10mh–12mh linn",
                event: "Cumhachd Lochlannach–Ghàidhealach anns na h-Eileanan",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-2 flex-1"
              >
                <div className="relative w-fit h-fit flex text-sm font-wind">
                  {item.period}
                </div>
                <div className="relative w-fit h-fit flex text-xs font-king text-center">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-fit border-2 flex border-dashed"></div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center bg-[#08088D] text-white">
        <div className="relative w-full">
          <Image
            width={1345}
            height={769}
            src={"/images/griogair.png"}
            alt="Griogair"
            draggable={false}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="relative w-full">
          <Image
            width={1345}
            height={769}
            src={"/images/clann.png"}
            alt="Clann"
            draggable={false}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="relative w-full">
          <Image
            width={1346}
            height={770}
            src={"/images/siol.png"}
            alt="Siol"
            draggable={false}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center bg-[#462941] min-h-screen">
        <div className="relative w-full h-fit border-t-2 border-white flex border-dashed p-2"></div>
        <div className="relative w-full flex flex-col items-center py-12">
          <div className="relative w-full md:gap-0 gap-3 max-w-4xl flex md:flex-row flex-col items-center">
            <div className="relative flex-1 h-0 border-t-2 border-dashed border-white"></div>
            <div className="relative flex flex-col items-center gap-4">
              <div
                className="relative w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-8 rounded-full h-8 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/clan1.png"
                    alt="Álpín mac Echdach"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="relative w-fit h-fit flex text-sm font-king text-white text-center">
                Álpín mac Echdach
              </div>
            </div>
            <div className="relative flex-1 h-0 border-t-2 border-dashed border-white"></div>
            <div className="relative flex flex-col items-center gap-4">
              <div
                className="relative w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-8 rounded-full h-8 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/clan2.png"
                    alt="Griogair"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="relative w-fit h-fit flex text-sm font-king text-white text-center">
                Griogair
              </div>
            </div>
            <div className="relative flex-1 h-0 border-t-2 border-dashed border-white"></div>
            <div className="relative flex flex-col items-center gap-4">
              <div
                className="relative w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-8 rounded-full h-8 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/clan3.png"
                    alt="mac Griogair"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="relative w-fit h-fit flex text-sm font-king text-white text-center">
                mac Griogair
              </div>
            </div>
            <div className="relative flex-1 h-0 border-t-2 border-dashed border-white"></div>
            <div className="relative flex flex-col items-center gap-4">
              <div
                className="relative w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-8 rounded-full h-8 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/clan4.png"
                    alt="Fionghuin"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="relative w-fit h-fit flex text-sm font-king text-white text-center">
                Fionghuin
              </div>
            </div>
            <div className="relative flex-1 h-0 border-t-2 border-dashed border-white"></div>
          </div>
        </div>
        <div className="relative max-w-4xl w-fit h-fit flex text-center font-king text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4">
          880–920 Èirigh Fhionghuin, a&apos; Chiad Tighearna Clainne
        </div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 text-white px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-white z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/norsegael.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/norsegael.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan3.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Crìoch Ghàidhealach–Lochlannach
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Ann an iar fo smachd nan Lochlannach, tha teaghlaichean
                  Ghàidhealach ag atharrachadh ris an òrdugh phoilitigeach ùr,
                  a&apos; daingneachadh an cumhachd tro chàirdeas-fala, fearann, agus
                  ùghdarras ionadail. Tro phòsadh is caidreachas leis na
                  tuineachaidhean Lochlannach, èiridh uaislean measgaichte
                  Ghàidhealach–Lochlannach, teaghlaichean a tha a&apos; measgachadh
                  neart mara nan Lochlannach le fuil rìoghail nan Gàidheal.
                  Ceanglaichidh na h-aonaidhean sin na clanna ri rìoghachd nan
                  Gàidheal agus ri cumhachd-mara nan Lochlannach, a&apos; cruthachadh
                  cultar sònraichte Ghàidhealach–Lochlannach a tha a&apos; mìneachadh
                  nan Eilean san linn seo.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Càirdeas Pòsaidh
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Phòs Fionghuin a&apos; bhana-phrionnsa Lochlannach ris an canar
                  &quot;Màiri Ghrinn,&quot; nighean rìgh no iarail nan Lochlannach sna
                  h-Eileanan, mar a chanas an sgeul.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan3.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/saucymary.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/saucymary.mp4" />
              </video>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Maol"
                  draggable={false}
                  src="/images/maol.png"
                />
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan3.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Caisteal Maol
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Tro a phòsadh ri Màiri Ghrinn, gheibh Fionghuin Caisteal Maol
                  air Eilean Sgitheanach. Tha an dùn seo a&apos; cumail smachd air
                  Caol Àcain, an caolas-mara cudromach eadar an t-eilean agus am
                  mòr-thìr.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Uirsgeul a&apos; Chìs-Mhara
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Tha dualchas na cloinne ag innse gun do shìn Fionghuin agus
                  Màiri Ghrinn slabhraidh thairis air a&apos; chaolas, a&apos; togail chìs
                  air na bàtaichean a chaidh seachad — gnìomh clasaigeach de
                  thighearnan nan Eilean. Tha ainm-àite Caol Àcain fhathast a&apos;
                  gleidheadh cuimhne air na ceanglaichean Lochlannach a thàinig
                  an dèidh sin.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan3.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Toll"
                  draggable={false}
                  src="/images/toll.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center min-h-screen bg-[#FDEFC7]">
        <div className="relative w-full">
          <Image
            width={2128}
            height={1277}
            src={"/images/iona.png"}
            alt="Abad Ì"
            draggable={false}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-black z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Abbacy"
                  draggable={false}
                  src="/images/abbacy.png"
                />
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan4.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Deireadh nan 800an
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Rè dheireadh nan 800an, faighidh sìol Mhic Fhionghuin sealbh
                  oighreachail air coarbachd Ì, ceannas nan abadan. Le seo,
                  gluaiseas stiùir eaglaiseil Ì bho na teaghlaichean Èireannach
                  Chinéil Conaill gu uaislean dùthchasach Ghàidhealach Dháil
                  Ríata. Tha iad a&apos; cumail smachd air tiodhlacadh nan rìghrean,
                  air gleidheadh nan luaithre agus nan naomh-thasg, agus air
                  fearann air Muile agus Ì fhèin.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  849 Annala Uladh
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Fo ionnsaighean nan Lochlannach, roinnear luaithre Naomh
                  Chaluim Chille, pàirt gan gluasad gu Dùn Chailleann fo dhìon
                  Choinnich mhic Ailpín, agus pàirt eile gan cur air ais gu
                  Èirinn. Mar abhadan oighreachail Ì, tha Clann Mhic Fhionghuin
                  a&apos; cumail sùil air an gluasad seo, àm deatamach ann a bhith a&apos;
                  dìon dìleab spioradail Ì fo bhrùthadh nan Lochlannach.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan4.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Columba Relic"
                  draggable={false}
                  src="/images/columbarelic.png"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Benedictine"
                  draggable={false}
                  src="/images/benedictine.png"
                />
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan4.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  1203 Ath-leasachadh Beanntraich Ì
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Ann an 1203, stèidhicheas sliochd Shomhairle, Tighearnan nan
                  Eilean, manachainn Bheinidictach air Ì, ag atharrachadh gu
                  h-oifigeil structar na coarbachd. Tha na h-Abadan Mhic
                  Fhionghuin a&apos; gluasad bho choarb Ghàidhealach gu taic-làidir
                  shaoghalta mar luchd-taic no abadan urramach, a&apos; gleidheadh an
                  cuid buaidh is fearainn eadhon le teachd nan òrdughan
                  manachail à tìr-mòr.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Bho na 1300an air adhart
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Bho na 1300an air adhart, tha Clann Mhic Fhionghuin fhathast
                  ri fhaicinn sna h-eachdraidh mar luchd-taic oighreachail agus
                  luchd-dìon fearainn Ì. Tha iad a&apos; dìon theachd-a-steach na
                  manachainn, a&apos; cumail suas an àite naomh, agus uaireannan an
                  sàs ann an connspaidean mu chìsean is còirichean le tighearnan
                  eile nan Eilean, leithid Clann Dòmhnaill. Tha an coarbachd
                  agus an abbachd a&apos; toirt dhaibh ùghdarras cràbhach seasmhach,
                  rud tearc am measg nan cinnidhean Gàidhealach.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan4.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Patronage"
                  draggable={false}
                  src="/images/patronage.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center bg-girasol min-h-screen gap-3">
        <div className="relative w-full h-fit border-t-2 border-ama flex border-dashed p-2"></div>
        <div className="relative max-w-4xl w-fit h-fit flex text-center font-celtica text-ama text-2xl md:text-7xl py-4">
          1263 Blàr na Leargaidh
        </div>
        <div className="relative h-fit flex text-sm font-king text-center max-w-md py-4 text-ama">
          Ro mheadhan na 1200an, tha cladach an iar na h-Alba fo chothrom lag
          cumhachd.
          <br />
          <br />
          Air pàipear, tha na h-Eileanan agus Eilean Mhanainn fhathast aig Rìgh
          Lochlainn, ach ann an da-rìribh, tha uaislean Ghàidhealach–Lochlannach
          a&apos; riaghladh nan eilean.
          <br />
          <br />
          Nam measg, tha Clann Mhic Fhionghuin a&apos; cumail Caol Àcain, doras na
          mara eadar Eilean Sgitheanach agus am mòr-thìr.
        </div>
        <div className="flex px-4">
          <video
            loop
            autoPlay
            muted
            draggable={false}
            poster="/images/largs.png"
            className="relative w-full max-w-sm md:w-96 flex object-contain"
          >
            <source src="/videos/largs.mp4" />
          </video>
        </div>
        <div className="relative h-fit flex text-sm font-king text-center max-w-md py-4 text-ama">
          Nuair a phutas Alasdair III na h-Alba an iar, ag iarraidh nan eilean
          bho Haakon IV Lochlainn, thig cogadh orra. Bidh feachdan na h-Alba a&apos;
          losgadh tuineachaidhean nan Lochlannach air Sgitheanach, ach tha na
          Mhic Fhionghuin air an sàbhaladh, oir tha an dìlseachd Ghàidhealach
          follaiseach.
          <br />
          <br />
          Ann an 1263, seòlas Haakon le cabhlach mòr, ach thèid e air chall le
          stoirmean aig Leargaidh. Bheir Albannaich is Gàidheil nan Eilean
          ionnsaigh orra air an tràigh, agus mu dheireadh, teichidh na
          Lochlannaich air ais dhan mhuir.
          <br />
          <br />
          Le Cùmhnant Pheairt (1266), thèid na h-Eileanan agus Eilean Mhanainn a
          thoirt do dh&apos;Alba. Tha Clann Mhic Fhionghuin, uair
          Ghàidheil–Lochlannach, a-nis nan Gàidheil Gàidhealach cruaidh, dìleas
          do Chrùn na h-Alba.
        </div>
        <div className="relative w-full flex flex-col items-center">
          <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 text-ama px-4">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-ama z-0"></div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
                <video
                  loop
                  autoPlay
                  muted
                  draggable={false}
                  poster="/images/refuge.png"
                  className="relative w-full max-w-xs md:w-80 flex object-contain"
                >
                  <source src="/videos/refuge.mp4" />
                </video>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan5.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                    1306 Buaireadh Bhruis agus a Theicheadh an Iar
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                    Aig toiseach 1306, an dèidh dha Iain Comyn a mharbhadh agus
                    an rìgh-chathair Albannach a ghlacadh, thèid Raibeart Bruis
                    a&apos; bhualadh aig Meadhan (Methven) agus thèid a shealg
                    tarsainn na rìoghachd le feachdan Shasainn. Teichidh e dhan
                    Iar le beagan luchd-dìleas na chuideachd. Air cladach nan
                    Eilean Siar, èiridh dìlseachd Ghàidhealach shàmhach, agus
                    fosglaidh Clann Mhic Fhionghuin na calaichean aca airson
                    fògarrach is trannsa. Tro Mhuile is Sgitheanach, gheibh e
                    fasgadh is beathachadh bho na daoine a chumas ri còd nan
                    Gàidheal — càirdeas is misneachd.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                    Feuch a-rithist
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                    Air fearann Mhic Fhionghuin ann an Sgitheanach, faisg air
                    Caol Àcain, gabh Bruis fasgadh ann an uamh-mhara dhorcha.
                    Tha beul-aithris ionadail ag innse gun do choimhead e an sin
                    damhan-allaidh a&apos; strì ri lìon a fhighe, a&apos; fàiligeadh sia
                    tursan mus do shoirbhich leis air an t-seachdamh oidhirp.
                    Ghabh Bruis seo mar chomharra, &quot;feuch a-rithist.&quot; Bhon
                    mhionaid sin, cruaidhichidh a rùn, agus thòisicheas slighe
                    fhada saorsa na h-Alba às ùr.
                  </div>
                </div>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan5.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
                <div className="relative w-full max-w-xs md:w-80 flex h-44">
                  <Image
                    layout="fill"
                    alt="Spider Legend"
                    draggable={false}
                    src="/images/spider.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
                <div className="relative w-full max-w-xs md:w-80 flex h-44">
                  <Image
                    layout="fill"
                    alt="Pass of Brander"
                    draggable={false}
                    src="/images/brander.png"
                  />
                </div>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan5.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                    1308 Iomairt Bhràigh Bhrandaidh
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                    Ann an 1308, gluaiseas feachd Bhruis tro chaolas cumhang
                    faisg air Loch Obha, fhad &apos;s a bhios daoine nan Eilean, fo
                    stiùir Aonghais Òig Mhic Dhòmhnaill, a&apos; tighinn bhon taobh
                    Loch Èiteim, a&apos; dùnadh air Clann Dhùghaill. &apos;s e seo buille
                    dhearbhte an aghaidh Chlann Dhùghaill Latharna, a&apos; briseadh
                    an aghaidh Ghàidhealach mu dheireadh ri Bruis. Tha Clann
                    Mhic Fhionghuin, mar phàirt den chaidreachas Ghàidhealach
                    nan Eilean, a&apos; sabaid taobh ri taobh ri na Gàidheil eile fo
                    Aonghas Òg, a&apos; toirt dhaibh daoine eòlach air cruth garbh
                    nan Gàidheal agus sgil-mhara nan slòigh eileanach.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                    1309–1313 Ùghdarras Cràbhach is Smachd Ro-innleachdail
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                    Eadar 1309 is 1313, daingnicheas Bruis a chumhachd thairis
                    air Earra-Ghàidheal agus na h-Eileanan. Cumaidh e Pàrlamaid
                    aig Cill Rìmhinn ann an 1309 agus daingnicheas e a rìoghachd
                    thar nan sgìrean Ghàidhealach. Tha suidheachadh nan Abadan
                    Mhic Fhionghuin air Ì a&apos; toirt dha Bruis àrdachadh
                    samhlachail cudromach, tha gabhail ris le coimhearsnachd Ì
                    a&apos; sealltainn gur esan &quot;Rìgh nan Gàidheal,&quot; chan e dìreach
                    ionnsaighear bho na crìochan ìosal.
                  </div>
                </div>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan5.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
                <div className="relative w-full max-w-xs md:w-80 flex h-44">
                  <Image
                    layout="fill"
                    alt="Kingship"
                    draggable={false}
                    src="/images/kingship.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-4xl w-fit h-fit flex text-center font-celtica text-ama text-7xl py-4">
          1314 Blàr Allt nam Bàn
        </div>
        <div className="relative h-fit flex text-sm font-king text-center max-w-md py-4 text-ama">
          Tha Aonghas Òg MacDhòmhnaill a&apos; tighinn le sluagh mòr nan Eilean, air
          an ainmeachadh le Barbour mar &quot;fhir armach mhath on iar-mhuir.&quot;
          <br />
          <br />
          Tha Clann Mhic Fhionghuin còmhla ris fo a stiùir, taobh ri taobh ri
          Clann Dòmhnaill, Clann MhicLeòid, Clann MhicNèill, agus na Gàidheil
          eile à na h-Eileanan Siar is a&apos; Ghàidhealtachd.
          <br />
          <br />
          Bidh iad mar choisridh aotrom is luchd-ionnsaigh luath, eòlaich air
          gluasad luath, freiceadan nan leathadan, agus strì ann an talamh bog
          is fliuch. Bidh iad a&apos; cur dragh air taobhan Shasainn, a&apos; dìon nan
          àiteachan garbh, agus a&apos; milleadh orra san riasladh.
        </div>
        <div className="flex px-4">
          <video
            loop
            autoPlay
            muted
            draggable={false}
            poster="/images/bannockburn.png"
            className="relative w-full max-w-sm md:w-96 flex object-contain"
          >
            <source src="/videos/bannockburn.mp4" />
          </video>
        </div>
        <div className="relative h-fit flex text-sm font-king text-center max-w-md py-4 text-ama">
          Tha Blàr Allt nam Bàn (23–24 Ògmhios) chan ann a-mhàin na bhuannachd
          armachd, ach crìoch mhòr cogaidh na neo-eisimeileachd.
          <br />
          <br />
          Tha feachd bheag Bhruis, air a dheagh eagrachadh, a&apos; sgrios arm mòr
          Eideard II, ga chur air teicheadh agus a&apos; daingneachadh saorsa na
          h-Alba.
          <br />
          <br />
          Tha pàirt Chlann Mhic Fhionghuin anns a&apos; bhlàr seo gan ceangal gu
          bràth ri miotas-bunait na saorsa Albannaich — agus a&apos; toirt cliù
          maireannach don chinneadh a sheas ri Bruis aig Allt nam Bàn.
        </div>
        <div className="relative w-full flex flex-col items-center">
          <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 text-ama px-4">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-ama z-0"></div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
                <div className="relative w-full max-w-xs md:w-80 flex h-44">
                  <Image
                    layout="fill"
                    alt="Isle Bloc"
                    draggable={false}
                    src="/images/islebloc.png"
                  />
                </div>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan6.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                    1315–1322 Iomairtean Armailteach nan Eilean
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                    Às dèidh Allt nam Bàn, cleachdaidh Raibeart Bruis na
                    càirdean Ghàidhealach aige san Iar mar fheachd-mara is
                    talmhainn gluasadach. Bho 1315 air adhart, cuiridh sluagh
                    nan Eilean ionnsaighean thar Chuain Èireann, a&apos; taic ri
                    Iomairt Eideard Bhruis ann an Èirinn (1315–1318) agus a&apos;
                    bualadh air ceann a tuath Shasainn ann an iomairtean
                    co-òrdanaichte. Tha an neart mara aca a&apos; toirt do Bhruis
                    ruigsinneachd ro-innleachdail, a&apos; seachnadh dhùin nan
                    Anglo-Normannach agus a&apos; leudachadh cumhachd Albannach
                    domhainn a-steach do fhearann an nàmhaid.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                    Aithne Fearainn air an Eilean Sgitheanach
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                    Mar a chumas dualchas na cloinne ag ràdh, agus a rèir
                    poileasaidh Bhruis ann a bhith a&apos; duais do thighearnan
                    dìleas Ghàidhealach, fhuair cinn-chinnidh Mhic Fhionghuin
                    aithne fhoirmeil air an cuid fearainn air an Eilean
                    Sgitheanach. Bidh an suidheachadh aca ann an Srath Àird agus
                    timcheall air Caol Àcain air a dhaingneachadh gu laghail rè
                    na h-ùine seo, duais chinnidh airson dìlseachd is seirbheis.
                  </div>
                </div>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan6.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
                <div className="relative w-full max-w-xs md:w-80 flex h-44">
                  <Image
                    layout="fill"
                    alt="Land"
                    draggable={false}
                    src="/images/land.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                    Foillseachadh Obar Dheathain
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                    Tha Alba na rìoghachd shaor is neo-eisimeileach, agus bha i
                    riamh. Fhad &apos;s a mhaireas ceudnar againn beò, cha tèid sinn
                    fo smachd Shasainn gu bràth. Tha cinnidhean Ghàidhealach is
                    uaislean nan Gleann-Ìosal a&apos; tighinn fo aon adhbhar is aon
                    bhratach. Tha Alba saor.
                  </div>
                </div>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan6.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
                <div className="relative w-full max-w-xs md:w-80 flex h-44">
                  <Image
                    layout="fill"
                    alt="Arbroath"
                    draggable={false}
                    src="/images/arbroath.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          width={768}
          height={1280}
          src={"/images/highlanders.png"}
          alt="Highlanders"
          draggable={false}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="relative w-full flex flex-col items-center bg-maroon  min-h-screen text-crema">
        <div className="relative w-full h-fit border-t-2 border-crema flex border-dashed p-2"></div>
        <div className="relative max-w-4xl w-fit h-fit flex text-center font-king text-6xl">
          Ìochdaran Chlann Dòmhnaill
        </div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-crema z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/alliance.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/alliance.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan7.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Dìlseachd do Chlann Dòmhnaill
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Bidh Clann Mhic Fhionghuin nan uaislean dìleas do Chlann
                  Dòmhnaill, Tighearnan nan Eilean. Mar chaidreachan urramach
                  meadhan-inbhe, bheir iad bàtaichean, gaisgich, agus taic
                  ionadail do na h-uachdarain Mhic Dòmhnaill aca.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Eadar-theachd ann an Uladh
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Tha na slighean-mara eadar na h-Eileanan agus Uladh nan rathad
                  Ghàidhealach. Bho iomairt Eideard Bhruis ann an Èirinn
                  (1315–1318) gu turais nas anmoiche san 14mh is 15mh linn a
                  stèidhicheas cumhachd Chlann Dòmhnaill ann an Aontroim,
                  cuiridh cabhlaichean nan Eilean ionnsaighean air tìr,
                  giùlaineas iad feachdan, agus cuiridh iad taic ri fineachan
                  Èireannach mar na h-Ó Néill agus na Mhic Dhomhnaill. Bidh
                  Clann Mhic Fhionghuin a&apos; cur bàtaichean is daoine riutha, a&apos;
                  cuideachadh le bhith a&apos; leudachadh cumhachd nan Eilean ann an
                  Uladh.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan7.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Ulster Raid"
                  draggable={false}
                  src="/images/ulsterraid.png"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/witness.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/witness.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan7.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Cairtichean is Fianais
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Tha fianais sgrìobhte air inbhe phoilitigeach Chlann Mhic
                  Fhionghuin ri fhaicinn nan ainm mar fhianaisean ann an
                  cairtichean a chaidh fhoillseachadh le Tighearnan nan Eilean
                  tron 14mh is 15mh linn. Sgrìobhas agus soidhnicheas
                  cinn-chinnidh Mhic Fhionghuin air toirt-thabhartasan fearainn
                  ann an Ìle, Sgitheanach, agus feadh na Tighearnachd.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          width={768}
          height={1280}
          src={"/images/highlanderswomen.png"}
          alt="Women of the Highlands"
          draggable={false}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="relative w-full">
        <Image
          width={1281}
          height={769}
          src={"/images/forfeiture.png"}
          alt="Forfeiture of the Lordship of the Isles"
          draggable={false}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="relative w-full flex text-white flex-col items-center bg-gris min-h-screen">
        <div className="relative w-full h-fit border-t-2 border-rojo flex border-dashed p-2"></div>
        <div className="relative h-fit flex flex-col items-center justify-center gap-3 py-6 text-center">
          <div className="relative max-w-md  h-fit flex font-king">
            Ann an 1493, cuiridh Crùn na h-Alba às gu h-oifigeil do
            Thighearnachd nan Eilean, a&apos; toirt air falbh an tiotal agus na
            fearainn bho Eòin MacDhòmhnaill II às dèidh a chaidreachasan tric ri
            Sasainn.
          </div>
          <video
            loop
            autoPlay
            muted
            draggable={false}
            poster="/images/crownoversight.png"
            className="relative w-full max-w-sm md:w-80 flex object-contain"
          >
            <source src="/videos/crownoversight.mp4" />
          </video>
          <div className="relative max-w-md h-fit flex font-king">
            Tha faisg air dà cheud bliadhna de riaghladh leth-eisimeileach
            Ghàidhealach fo Chlann Dòmhnaill a&apos; tighinn gu crìch. Tha an
            Tighearnachd Ghàidhealach–Lochlannach, poilitigeach leth-shaor,
            cultarach Ghàidhealach, agus eaconamach ceangailte ri Èirinn is na
            h-Eileanan, a-nis fo sheilbh a&apos; Chrùin.
            <br />
            <br />
            Tha rìghrean na h-Alba, gu h-àraidh Seumas I, II, is III, ag
            iarraidh cumhachd a mheadhanachadh agus an rìoghachd a thoirt fo aon
            chrùn. Tha Tighearnan nan Eilean a&apos; strì ri an cuid fèin-riaghlaidh
            agus cultar a ghleidheadh, a&apos; cluich Shasainn is Crùn nan
            Gleann-Ìosal an aghaidh a chèile gus seasamh an aghaidh teannachadh
            ùghdarrais rìoghail.
            <br />
            <br />
            Tha fearann Chlann Mhic Fhionghuin ann an Sgitheanach is Muile a-nis
            fo ùghdarras dìreach rìghrean na h-Alba, a&apos; comharrachadh
            tòiseachadh linn ùr. Bidh iad a-nis nan ìochdaran do rìgh fad às, le
            cultar is poileasaidh choimheach dhaibh, àm de mhì-chinnt,
            mì-thuigse, is bròn.
          </div>
          <div className="relative text-white w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 text-black px-4">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-white z-0"></div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
                <div className="relative w-full max-w-xs md:w-80 flex h-44">
                  <Image
                    layout="fill"
                    alt="James IV"
                    draggable={false}
                    src="/images/james.png"
                  />
                </div>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan8.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                    1494–1498 Turasan Iar Shèumas IV & Sgrùdadh Rìoghail
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                    Ann an 1494, seòlas Seumas IV an Iar le cabhlaich rìoghail,
                    airson smachd a chur air na h-Eileanan agus uaislean
                    Ghàidhealach fhàgail fo eagal. Chan eil na Mhic Fhionghuin,
                    còmhla ri luchd-dìlse Chlann Dòmhnaill, a&apos; gabhail ùmhlachd
                    sa bhad. Seachnaidh iad còmhstri dhìreach, ach chan eil iad
                    a&apos; cur taic làn ris a&apos; Chrùn, a&apos; coimhead fhad &apos;s a tha
                    siorraman rìoghail agus riochdairean Chaimbeulach air an cur
                    an àiteachan-cumhachd nan sgìrean aca.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                    1501 Ar-a-mach Dhòmhnaill Duibh
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                    Dhòmhnall Dubh, ogha Eòin Mhic Dòmhnaill, mu dheireadh
                    Tighearna nan Eilean, teicheas e à glèidheadh rìoghail agus
                    tog e ar-a-mach mòr gus an Tighearnachd ath-stèidheachadh.
                    Clann Dòmhnaill Shlèite aig ceann an ar-a-mach, le taic bho
                    chinnidhean càirdeil, nam measg Clann Mhic Fhionghuin. Bidh
                    ionnsaighean-mara, strì ionadail, agus daingnichean
                    eileanach a&apos; comharrachadh an t-sabaid seo. Ach tha an
                    ar-a-mach a&apos; fàiligeadh, air sgàth neart cabhlaich rìoghail
                    agus dìth aonachd nan Gàidheal. Thèid Dòmhnall Dubh a
                    ghlacadh a-rithist.
                  </div>
                </div>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan8.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
                <div className="relative w-full max-w-xs md:w-80 flex h-44">
                  <Image
                    layout="fill"
                    alt="Domhnall Dubh Rebellion"
                    draggable={false}
                    src="/images/domhnall.png"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
                <div className="relative w-full max-w-xs md:w-80 flex h-44">
                  <Image
                    layout="fill"
                    alt="Campbell Expansion"
                    draggable={false}
                    src="/images/campbell.png"
                  />
                </div>
              </div>
              <div
                className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
                }}
              >
                <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                  <Image
                    draggable={false}
                    fill
                    className="rounded-full"
                    objectFit="cover"
                    src="/images/tartan8.png"
                    alt="Tartan"
                  />
                  <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
                </div>
              </div>
              <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
                <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                  <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                    1506–1510an Peanasan Rìoghail & Leudachadh Chaimbeulach
                  </div>
                  <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                    Às dèidh fàilligeadh an ar-a-mach, bheir Seumas IV peanas
                    cruaidh air cinnidhean reubalta. Suidhichidh e Caimbeulaich
                    agus càirdean dìleas eile ann an dreuchdan cumhachd tro na
                    h-Eileanan, a&apos; cur an àite nan tighearnan Gàidhealach tùsail
                    le riochdairean a&apos; Chrùin.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          width={1280}
          height={768}
          src={"/images/clanfeuds.png"}
          alt="Clan Feuds"
          draggable={false}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="relative w-full flex flex-col items-center bg-[#DB0424] min-h-screen">
        <div className="relative w-full h-fit border-t-2 border-black flex border-dashed p-2"></div>
        <div className="relative max-w-4xl w-fit h-fit flex text-center font-king text-black text-6xl">
          Linn nan Còmhstri
        </div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-black z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/feud1.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/feud1.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  1500–1580an Còmhstri Chlann Dòmhnaill Shlèite & Chlann
                  MhicLeòid Dhùn Bheagain
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Còmhstri fhada thar fhearann Throtarnais agus smachd air
                  slighean-mara Sgitheanais. Tha Clann Mhic Fhionghuin, mar
                  chàirdean Chlann Dòmhnaill Shlèite, a&apos; toirt taic-armachd is
                  cuideachadh bho cheann a deas Sgitheanais, a&apos; dìon nan
                  slighean-mara agus a&apos; cuideachadh ann an ionnsaighean.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Tràth gu Meadhan na 1500an Clann Dòmhnaill vs. Clann
                  Mhic&apos;Illeathain
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Tha còmhstri a&apos; fàs nas teinne eadar Clann Dòmhnaill
                  Ìle/Shlèite agus Clann Mhic&apos;Illeathain Dhuairt mu Mhùil is na
                  h-eileanan mun cuairt. Le ceanglaichean fearainn ann am Muile
                  agus dìlseachd do Chlann Dòmhnaill, bheir Clann Mhic
                  Fhionghuin taic-mhara ionadail, gu h-àraidh eadar Mhuile is
                  Sgitheanach.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/feud2.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/feud2.mp4" />
              </video>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/feud3.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/feud3.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Deireadh na 1500an Tràth 1600an — Clann Mhic Fhionghuin vs.
                  Clann MhicLeòid Dhùn Bheagain
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Sreath de chòmhstri ionadail eadar Clann Mhic Fhionghuin Srath
                  Àird agus Clann MhicLeòid Dhùn Bheagain, mu fèidh, sprèidh,
                  agus slighean-mara air taobh deas is iar Sgitheanais. Blàran
                  beaga, creachan, agus dìoghaltasan, a&apos; cur cuideam air
                  crìonadh nan seann cheanglaichean Gàidhealach.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Meadhan an 16mh Linn Còmhstri A-staigh Chlann Mhic Fhionghuin
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Tha strì chlàraichte taobh a-staigh na cloinne fhèin mu
                  shliochd cinn-cinnidh agus seilbh fearainn ann an Srath Àird.
                  Còmhstri ionadail, laghail, agus uaireannan fòirneartach, a&apos;
                  nochdadh sgaoileadh is laigse nan cinnidhean fon bhrùthadh
                  rìoghail a tha a&apos; meudachadh.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative"></div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44"></div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  16mh linn Clann Mhic Fhionghuin & Clann Raonaild
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Co-obrachadh bho àm gu àm, ach cuideachd teannachadh is
                  frith-bhuaidhean fearainn, gu h-àraidh mu shlighean-mara eadar
                  Sgitheanach agus na h-Eileanan Beaga. Bidh Clann Mhic
                  Fhionghuin a&apos; cumail dàimh chaoimhneil ach dhuilich ri Clann
                  Raonaild, mar a bhios gach clan eileannach a&apos; strì airson
                  smachd air a&apos; mhuir.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Clann Mhic Fhionghuin & Clann Nèill Bharraigh
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Deireadh na 16mh – Tràth an 17mh linn. Iomraidhean sgapte air
                  blàran beaga is casaidean mu spùinneadaireachd eadar clanna
                  Sgitheanach, MhicLeòid, Mhic Fhionghuin, agus Clann Nèill
                  Bharraigh, cliùiteach airson ionnsaighean-mara anns na
                  h-Eileanan Siar. Bidh na Mhic Fhionghuin an sàs ann an
                  connspaidean mu sheilbh bàtaichean agus dìon nan slighean-mara
                  malairteach eadar Sgitheanach, Muile, agus Barraigh.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative"></div>
            </div>
          </div>
        </div>
        <div className="relative h-fit flex text-sm font-king text-center max-w-md py-4 px-4">
          Rè Linn nan Còmhstri, bidh an Crùn, tro Chaimbeulaich, a&apos; brosnachadh
          sgapadh nan cinnidhean, a&apos; toirt taic an toiseach do aon taobh, an
          uair sin dhan taobh eile, gus freasdal Ghàidhealach cholleachail a
          lagachadh.
          <br />
          <br />
          Bidh iad tric a&apos; cur taic ris an taobh as laige, gus uachdaranan nas
          treasa a lagachadh tro fhòirneart is sgìths.
          <br />
          <br />
          Nuair a bhios an dà thaobh air an sgìosadh, ceumaidh na Caimbeulaich
          a-steach mar &quot;bhritheamhan dìleas don Chrùn,&quot; a&apos; faighinn fearainn,
          pòsaidhean, agus buaidh phoilitigeach tro innleachd rìoghail is sgil
          phoilitigeach.
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center bg-white py-12">
        <div className="relative w-full h-fit border-2 flex border-dashed"></div>
        <div className="relative w-full max-w-6xl flex items-center flex-col gap-6 py-8">
          <div className="relative w-fit md:w-full flex flex-col md:flex-row justify-between md:items-start gap-8">
            {[
              {
                period: "1715",
                event: "Siorram Mòr",
              },
              {
                period: "1716–1745",
                event: "Fon-ùir nan Seumasach",
              },
              { period: "1745", event: "Tighinn air tìr a’ Phrionnsa" },
              { period: "1746", event: "Às dèidh Chùil Lodair" },
              { period: "1746–1750an", event: "Brùthadh nan Hannoverach" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-2 flex-1"
              >
                <div className="relative w-fit h-fit flex text-sm font-wind">
                  {item.period}
                </div>
                <div className="relative w-fit h-fit flex text-xs font-king text-center">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-fit border-2 flex border-dashed"></div>
      </div>
      <div className="relative w-full">
        <Image
          width={1345}
          height={769}
          src={"/images/jacobian.png"}
          alt="Jacobian Alliance"
          draggable={false}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="relative w-full flex flex-col items-center bg-[#FCF704] min-h-screen">
        <div className="relative w-full h-fit border-t-2 border-black flex border-dashed p-2"></div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-black z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Loyalty"
                  draggable={false}
                  src="/images/loyalty.png"
                />
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan11.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  1603–1688 Dìlseachd do na Stiùbhartaich
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Às dèidh Aonadh nan Crùintean (1603), agus an uair sin
                  Ar-a-mach Glòrmhor (1688), caillidh na Stiùbhartaich an
                  rìgh-chathair do Uilleam agus Màiri, rìghrean Pròstanach. Tha
                  Clann Mhic Fhionghuin, còmhla ri mòran chinnidhean Gàidhealach
                  eile, a&apos; fuireach dìleas do dh&apos;oghainn nan Stiùbhartach, a&apos;
                  cumail beò an dualchas rìoghail is an creideamh traidiseanta.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  1715 An &quot;Còig-deug&quot; agus Blàr Shiorramhùir
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Faisg air Dùn Bhlàthain ann an Siorrachd Shruighlea, tha Clann
                  Mhic Fhionghuin mar phàirt de fhorsa nan Eilean Siar fo Chlann
                  Dòmhnaill, dualtach timcheall air ceud fear, a&apos; sabaid mar
                  choisridh aotrom air taobh deas nan Seumasach. Ghabh iad pàirt
                  anns an toiseach soirbheachail den chrith-ghairm Ghàidhealach,
                  ach chrìochnaich am blàr gun cho-dhùnadh cinnteach, agus le
                  tuiteam an ar-a-mach, dh&apos;fhàs iad so-leònte gu poilitigeach.
                  Ach chaill iad gun na forfheithean mòra, a&apos; cumail orra mar
                  chinneadh dìleas, ged fo eagal a&apos; Chrùin.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan11.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/sheriffmuir.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/sheriffmuir.mp4" />
              </video>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/skyeboats.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/skyeboats.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan11.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Bàtaichean Sgitheanaich
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Às dèidh Blàr Shiorramhùir, teannaichidh riaghladh nan
                  Hannoverach an sgrùdadh air cinnidhean na Gàidhealtachd. Tha
                  Clann Mhic Fhionghuin fhathast air liostaichean faire an
                  riaghaltais, fo amharas airson an dìlseachd Seumasaich. Tha an
                  Eaglais Easbaigeach fhathast làidir ann an Sgitheanach, agus
                  leis gun robh an t-eilean aig cridhe &quot;rathaidean-mara&quot; nan
                  Gàidheal, bidh bàtaichean Sgitheanaich a&apos; gluasad teachdairean
                  is airm bho Fhraing is Èirinn chun tìr-mòr tro chalaichean
                  bheaga clainne, ceangal cudromach san lìon-dìomhair
                  Sheumasaich.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Sultain 1745 Blàr Prestonpans{" "}
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Air 21 Sultain 1745, aig Prestonpans, coileanas na Seumasaich
                  buaidh iongantach air feachdan an riaghaltais fo Chope. Bha
                  clanna nan Eilean, nam measg na Mhic Fhionghuin, nan cridhe
                  air taobh deas nan Gàidheal, a&apos; cleachdadh ionnsaighean luath
                  coltach ri 1715. Soirbheas tràth is buadhach, samhla air
                  dòchas ùr do adhbhar nan Stiùbhartach.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan11.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative"></div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44"></div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan11.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Samhain–Dùbhlachd 1745 Am Mairs gu Derby
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Bidh daoine Mhic Fhionghuin nam pàirt den arm a tha a&apos; gluasad
                  deas gu Derby. Ach lùghdaichidh an àireamh, air sgàth dìth
                  solair is teicheadh, agus fàsaidh an turas doirbh. Bidh fir
                  Sgitheanaich gan cleachdadh mar speuradairean is saighdearan
                  aotrom, eòlach air gluasad luath tro mhòinteach is coille,
                  agus air biadh is fiosrachadh a lorg far nach robh dad eile ri
                  fhaighinn.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  16 Giblean 1746 Blàr Chùil Lodair
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Aig Cùil Lodair, tha Clann Mhic Fhionghuin nam pàirt de
                  chinnidhean an Iar air taobh deas nan Seumasach, fo stiùir
                  Chlann Dòmhnaill fhathast. Bidh iad a&apos; fulang le briseadh
                  tubaisteach, mar a chleachd feachdan an riaghaltais fo Diùc
                  Chumberland sreath-thilgeadh musgaidean is gunna-mòra gus
                  briseadh a chur air a&apos; chrith-ghairm Ghàidhealach. Cha deach
                  taobh deas a thoirt do Chlann Dòmhnaill, an àite urramach anns
                  gach blàr traidiseanta, mì-chinnt mhòr is beàrn cultarach
                  dhona a thug crith air spiorad nan Gàidheal. Tha mòran dhen
                  bheachd gur e seo an t-adhbhar as motha a thug air arm nan
                  Seumasach tuiteam aig Cùil Lodair.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan11.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative"></div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Teicheadh a&apos; Phrionnsa
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Às dèidh na briseadh, tha Iain Dubh MacFhionghuin a&apos; cluich
                  dreuchd deatamach ann a bhith a&apos; falach agus a&apos; dìon Theàrlach
                  Eideard Stiùbhart, le duais £30,000 air a cheann. Air oidhche
                  27–28 Ògmhios 1746, Flòra, an Prionnsa, agus sgioba bheag de
                  MhacFhionghuin is MhicDhòmhnaill a&apos; dol tarsainn nan cuantan
                  cunnartach bho Bheinn na Faoghla gu Sgitheanach. Tha an
                  Prionnsa air a cheilt mar &quot;Betty Burke,&quot; ban-bhàrd Èireannach
                  le cuibhle-shnìomha. Bidh e a&apos; seachnadh ghlacadh tro
                  bhàtaichean is taighean-falaich nan Mhic Fhionghuin air feadh
                  Sgitheanais, fhad &apos;s a bhios patralaidhean Breatannach a&apos;
                  rannsachadh gach eilean. Tha eòlas air brath is cunnart a
                  bhith faisg, agus mu dheireadh thèid Iain Dubh fhèin a
                  ghlacadh ann an 1746 agus a chur dhan phrìosan ann an
                  Lunnainn. Ach cha tèid a chur gu bàs, agus thèid a leigeil ma
                  sgaoil ann an 1748, cuimhneachain air dìlseachd, cunnart, agus
                  urram.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan11.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          width={1345}
          height={769}
          src={"/images/escape.png"}
          alt="Bonnie Escape"
          draggable={false}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="relative w-full flex flex-col items-center bg-white min-h-screen text-black">
        <div className="relative w-full h-fit border-t-2 border-black flex border-dashed p-2"></div>
        <div className="relative max-w-4xl w-fit h-fit flex text-center font-king text-6xl px-4">
          Lagh, Brùthadh, is Milleadh nan Gàidheal
        </div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-black z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative"></div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  1746 Achd an Dì-armachaidh
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Feumaidh a h-uile Gàidheal an armachd a thoirt seachad — fiù
                  &apos;s na pìoban-mòra, air am meas mar ionnstramaidean-cogaidh fo
                  lagh ùr na h-Alba. Nì saighdearan an riaghaltais ionnsaighean
                  is rannsachaidhean tro na Gàidhealtachdan gus an lagh a chur
                  an gnìomh. Tha peanasan airson armachd a chur am falach
                  cruaidh, prìosanachadh, às-mhalairt, no eadhon bàs. &apos;s e seo
                  tionndadh nas cruaidhe air an Achd Dì-armachaidh 1716.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  1746 Achd an Eudach Ghàidhealaich
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Amas an lagha: cuir às do aithne Ghàidhealach is samhlan strì.
                  Toirmisgidh e aodach nan Gàidheal, breacan, fèileadh, agus
                  plaideachan. An càin: a&apos; chiad eucoir: 6 mìosan sa phrìosan,
                  an dàrna turas: 7 bliadhna dh&apos;às-mhalairt. Tha an cultar fhèin
                  air a chur fo smachd na lagha.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative"></div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative"></div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  1747 Achd nan Ùghdarrasan Oighreachail
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Tha ùghdarras laghail nan cinn-cinnidh is nan uachdaran air a
                  chur às. Cha bhi barain no britheamhan prìobhaideach
                  tuilleadh; thèid a h-uile cumhachd laghail a thoirt don Chrùn.
                  Tha an siostam càirdeis is feodachais a chum aonaichte na
                  Gàidhealtachd fad linntean air a bhriseadh.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  1747 Comann SSPCK
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Chaidh an &quot;Society in Scotland for Propagating Christian
                  Knowledge (SSPCK)&quot; a stèidheachadh ann an 1709, le amas &quot;an
                  Gàidhealtachd a shìobhaltaich.&quot; Toirmisgidh iad Gàidhlig mar
                  chànan teagaisg, ag ràdh gur e &quot;cànan barbarach&quot; a th&apos; ann a
                  chuireas bacadh air dìlseachd don stàit Bhreatannach. Ann an
                  1747, ni an SSPCK co-dhùnadh oifigeil gun Bhìobaill no
                  leabhraichean Gàidhlig fhoillseachadh no sgaoileadh. Tha clann
                  ann an Sgitheanach, Muile, agus àiteachan eile air am
                  brosnachadh an cànan fhèin a thrèigsinn &quot;airson adhartais.&quot;
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative"></div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44"></div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Gabhail Armachd is Smachd Mìleanta
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Thèid daingneachan, gàrraidhean, agus tùir-faire a leudachadh
                  tro na Gàidhealtachdan, agus nàbaidhean-mara timcheall nan
                  Eilean Siar a&apos; cumail sùil air reubaltachd no smuagalachd.
                  Thèid an cànan Ghàidhealach a chur fo bhacadh trom, toirmisgte
                  ann an rianachd, sgoiltean, is eaglaisean. Thèid na Gàidheil a
                  thionndadh gu bhith nan tuathanaich is sealbhadairean beaga,
                  fo lagh is siostam nan Hannoverach.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center max-w-md py-4 h-fit text-center font-king text-sm gap-4 px-4">
          <div className="relative h-fit w-fit flex">
            Bha iomallachd Shgitheanais mar sgeith-dìon don chànan, oir bha
            cur-an-gnìomh riaghailtean an riaghaltais nas slaodaiche is nas
            neo-chunbhaltaiche an seo na anns a&apos; Ghàidhealtachd Mheadhanach.
            <br />
            <br />
            Air fearann Mhic Fhionghuin ann an Srath Àird is meadhan
            Shgitheanais, bha Gàidhlig fhathast làidir ann an leughadh is
            sgrìobhadh, taing do sgoiltean-ìmich ionadail agus pàrantan is
            tidsearan a sheas an aghaidh nan toirmisg, tric a&apos; mìneachadh an
            leasanan gu dìomhair ann an Gàidhlig.
            <br />
            <br />
            Ann an dùthaich Mhic Fhionghuin, lean an teannachadh eadar dà
            chànan, ach bha beatha làitheil is cainnt na coimhearsnachd fhathast
            Gàidhealach gu tur gus na tachartasan mòra den 1800an thug buaidh
            air an t-saoghal sin.
          </div>
          <video
            loop
            autoPlay
            muted
            draggable={false}
            poster="/images/clearances.png"
            className="relative w-full max-w-sm md:w-80 flex object-contain"
          >
            <source src="/videos/clearances.mp4" />
          </video>
          <div className="relative max-w-md h-fit flex font-king">
            Ro dheireadh an 18mh linn, bha cinn-cinnidh air feadh na
            Gàidhealtachd fo bhrùthadh gus na oighreachdan aca &quot;ùrachadh.&quot;
            <br />
            <br />
            Bha iad air an teagasg gus màil-airgid a chur an àite seirbheis
            thraidiseanta, fearann a thoirt air màl do luchd-tuatha malairteach
            mòra, agus gluasad air falbh bho tuathanaich-beòshlaint is
            luchd-tacais.
            <br />
            <br />
            Bha mòran cheannardan, nam measg cinnidhean Sgitheanach, ann an
            fiachan mòra às dèidh taic a thoirt do na Seumasaich agus air sgàth
            atharrachaidhean eaconamach na dùthcha.
            <br />
            <br />
            Bha cinn Mhic Fhionghuin Srath Àird a&apos; seasamh air an aon
            chas-chrìche: am bu chòir dhaibh fuireach mar stiùirichean clannach
            no a bhith nan uachdarain a bha a&apos; sireadh prothaid.
            <br />
            <br />
            Dh&apos;fhàs sluagh Shgitheanais nas motha, a&apos; cur brùthadh air an
            fhearann bheag àiteach, agus thòisich na cinn-chinnidh ag àrdachadh
            mhàil gus co-fhreagairt ri inbhe nan Ìosalach.
            <br />
            <br />
            Chaidh mòran de na tacksmen traidiseanta fhògradh, agus thòisich an
            seann òrdugh cinnidh a&apos; crìonadh.
          </div>
          <div className="flex w-fit h-fit relative">
            <div className="relative w-full max-w-xs md:w-80 flex h-44">
              <Image
                layout="fill"
                alt="Clearance Rd"
                draggable={false}
                src="/images/clearancerd.png"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-black z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/burning.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/burning.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Tràth–Meadhan an 19mh Linn Fuadaichean na Gàidhealtachd{" "}
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Chunnaic an t-Eilean Sgitheanach cuid de na prògraman-fuadaich
                  as cruaidhe anns na h-Eileanan, gu h-àraidh eadar na 1820an is
                  na 1850an. Bha strì ann, petisean, gearanan beaga, ach chaidh
                  iad a chur fodha le cumhachd laghail is eaconamach. Ann an
                  1828, chaidh Srath Àird a reic le Clann Mhic Fhionghuin ri
                  Clann Dòmhnaill nan Ìosalach à Slèite. Airson Chlann Mhic
                  Fhionghuin, b&apos; e seo milleadh mòr: chaidh ar fearann
                  dualchasach à ar làmhan fhèin. Bhris an structar clannach a
                  bha air mairsinn tro linntean cogaidh mu dheireadh thall. Fo
                  shealbhadairean ùra, chaidh tuathanaich a fhògradh à Srath
                  Àird agus sgìrean faisg air làimh gus àite a dhèanamh airson
                  rathaidean-chaorach nas prothaidiche, far an deach ar
                  teaghlaichean fhèin a chur air bàtaichean às-imrich no an
                  gluasad gu croitichean bochda air an oirthir. Cha robh na
                  sealbhadairean ùra ceangailte ri dìlseachd clannach, ach ri
                  prothaid a-mhàin. Chaidh taighean a leagail no an losgadh gus
                  casg a chur air tilleadh. Sreath fhada dhaoine a&apos; coiseachd
                  casruisgte, a&apos; giùlan am beagan thogalaichean air an
                  guailnean, a&apos; gluasad sìos chun na tràghad.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  1840an–1850an — Èiginn nan Gàidheal
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Nuair a bhuail galar buntàta, bha Sgitheanach is na h-Eileanan
                  Siar fo sgrios. Cha robh na sealbhadairean ùra — a&apos; mhòr-chuid
                  dhiubh gun Ghàidhlig, deònach no comasach air an sluagh a
                  chumail beò. Bha cobhair beag, cha mhòr idir. Acras, fògradh,
                  agus às-imrich a lean. Air Sgitheanach, bhàsaich mìltean, agus
                  chaidh cladhan mòra a dhèanamh airson na mairbh gun ainm.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  alt="Highland Crisis"
                  draggable={false}
                  src="/images/crisis.png"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <video
                loop
                autoPlay
                muted
                draggable={false}
                poster="/images/emigration.png"
                className="relative w-full max-w-xs md:w-80 flex object-contain"
              >
                <source src="/videos/emigration.mp4" />
              </video>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan9.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  An Sgapadh Fada
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Dh&apos;fhoillsich uachdarain is an Crùn planaichean às-imrich gus
                  an &quot;èiginn&quot; fhuasgladh. Bàtaichean a&apos; falbh à Port Rìgh is
                  calaidhean eile, le ceudan gach turas. Teaghlaichean air an
                  sgaradh: seann daoine air am fàgail airson bàsachadh, òigridh
                  air an cur thall thairis. Ràinig cuid Ceanada, Alba Nuadh,
                  Astràilia, cuid eile air am fògradh gun roghainn, gun dòchas.
                  Thàinig crìoch air an t-seann shaoghal Ghàidhealach, ach cha
                  do bhàsaich cuimhne nan daoine.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full justify-center bg-white flex h-fit text-center px-4">
        <div className="relative max-w-md text-xs h-fit flex font-mayon">
          Uiread de sgeulachdan falaichte fhathast ri am foillseachadh, air an
          clàradh le uaill, le cianalas, le gràdh-cian, agus le cridhe trom
          beagan.
        </div>
      </div>
      <div className="relative w-full">
        <Image
          width={1345}
          height={769}
          src={"/images/seanchas.png"}
          alt="Seanchas"
          draggable={false}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="relative w-full flex flex-col items-center bg-[#4F244B] min-h-screen text-white">
        <div className="relative w-full h-fit border-t-2 border-white flex border-dashed p-2"></div>
        <div className="relative w-full flex flex-col items-center py-6 md:py-12 gap-8 md:gap-16 px-4">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-white z-0"></div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="Boar Crest"
                  draggable={false}
                  src="/images/boar.png"
                  className="grayscale"
                />
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan1.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Am Muc-fhèidh is an Cnàimh-fhèidh
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Bha ceann-cinnidh Mhic Fhionghuin aon uair a&apos; sealg fèidh le a
                  dhaoine. Mar a thàinig an oidhche, tharraing e air falbh on
                  chompanaich agus lorg e fasgadh ann an uamh bheag. Tron
                  oidhche, thàinig muc-fhèidh fhiadhaich mhòr a-steach don uamh,
                  a&apos; ruith air. Gun arm deiseil, gheibh an ceann-cinnidh
                  cnàimh-shliasaid an fhèidh a bha e air ithe, agus shàth e sìos
                  ann am beul na muc-fhèidh gus an robh i marbh. Thàinig esan
                  beò, i air chall — agus rugadh suaicheantas Mhic Fhionghuin.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Uamh Mhic Fhionghuin Earra-Ghàidheal (Eilean Muile / Ulbha)
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Is e seo aon de na h-uamhan-mara as fhaide anns na h-Eileanan,
                  cha ghabh inntrigeadh ach aig làn-ìosal, agus sìneadh i faisg
                  air 80 meatair a-staigh. an seo san 15mh linn, rè aimhreit ri
                  Clann &apos;Ill-Eathain, agus theich e air muir às dèidh sin. Tha
                  leac mhòr a-staigh ris an canar &quot;Bòrd Fhinn&quot;, air a ràdh gun
                  deach a chleachdadh mar altair nan cràbhadhich. Ann an
                  tionndadh eile den sgeul, chaidh 12 fear den chloinn a-steach
                  le pìobaire, fhad &apos;s a bha daoine eile a&apos; coiseachd os an
                  cionn, a&apos; comharrachadh an àite as fhaide leis an
                  fheadhainn-ciùil ro-aontaichte. Cha tàinig ach an cù a-mach —
                  lom, gun fhalt, le eagal.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan1.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="Gribun Cave"
                  draggable={false}
                  src="/images/gribuncave.png"
                  className="grayscale"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="MacKinnon&apos;s Cross"
                  draggable={false}
                  src="/images/mackinnoncross.png"
                  className="grayscale"
                />
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan1.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Crois Mhic Fhionghuin
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Air a snaidheadh ann an 1489, tha a&apos; chrois a&apos; cur an cuimhne
                  Lachlainn MacFhionghuin agus a mhac Iain, Aba Ì Chaluim
                  Chille. Air aghaidh na crois, deilbh eireachdail de bhirlinn
                  Ghàidhealach le bratach aig a&apos; bheul agus stiùir shoilleir aig
                  an earball. Aig bonn an t-slat, figear de ghrìffon, leòmhann
                  is iolaire còmhla, samhla air treibhdhireas, misneachd, is
                  neart. Nochd an creutair seo an toiseach ann am Peirsia san
                  5mh linn RC, agus thàinig e gu bhith na shuaicheantas anns a&apos;
                  Ghàidhealtachd.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Dìoghaltas Mhic Fhionghuin
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  Aig toiseach an 17mh linn ann an Sgitheanach, bhàsaich
                  tuathanach bochd, agus thàinig teachdaire an uachdarain air
                  latha an tiodhlacaidh. Bhuail e a&apos; bhantrach agus ghabh e an
                  t-each aice, a rèir lagh chruaidh a thug còir dhan uachdaran
                  &quot;each as fhearr&quot; an dèidh bàis tuathanaich. Bhòidich
                  Lachlainn, mac na bantraich, dìoghaltas. Còig bliadhna fichead
                  às dèidh sin, nuair a thàinig an aon teachdaire gus each eile
                  a ghabhail bho bhantrach eile, rinn Lachlainn, a-nis duine
                  làidir, freagairt. Thug e ionnsaigh air, gheàrr e a cheann
                  dheth, nigh e e san tobar faisg air làimh, agus mharcaich e
                  dhan chaisteal leis a&apos; cheann air a dhirge. Chuir an
                  ceann-cinnidh iongnadh air an uabhas, ach an àite peanas, thug
                  e maitheanas dha Lachlainn, thug e dha fearann is tiotalan an
                  teachdaire, agus dh&apos;fhàg e às leth an lagh-choir as fhearr air
                  eich ann an sgìrean Mhic Fhionghuin. Canar fhathast ris an
                  tobar sin &quot;Tobar a&apos; Cheann.&quot;
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan1.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="MacKinnon&apos;s Revenge"
                  draggable={false}
                  src="/images/revenge.png"
                  className="grayscale"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-1 md:order-1">
              <div className="relative w-full max-w-xs md:w-80 flex h-44">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="Fairy Mounds"
                  draggable={false}
                  src="/images/fairymound.png"
                  className="grayscale"
                />
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan1.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 md:pl-8 w-full order-2 md:order-2">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-left">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-start">
                  Sìthean is Tobraichean Shrath Àird
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-start">
                  Tha beul-aithris ionadail ag innse gun robh muinntir Mhic
                  Fhionghuin a&apos; seachnadh uisge a thogail à cuid thobraichean
                  air an oidhche, oir bhiodh na sìthichean a&apos; cruinneachadh an
                  sin às dèidh dol fodha na grèine. Bha aon chnoc faisg air Cill
                  Màiri, faisg air dùn meadhan-aoiseach Mhic Fhionghuin ann an
                  Srath Àird, air a mheas mar dhachaidh nan sìth. Bhiodh
                  boireannaich a&apos; fàgail tabhartasan beaga, bainne, prìneachan,
                  agus aran-coirce, airson dìon is beannachd.
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 flex justify-center md:justify-end md:pr-8 w-full order-2 md:order-1">
              <div className="relative w-full h-fit flex flex-col gap-2 text-center md:text-right">
                <div className="relative w-full h-fit flex text-sm sm:text-base font-wind justify-center md:justify-end">
                  Tobar a&apos; Chinn
                </div>
                <div className="relative w-full h-fit flex text-xs sm:text-sm font-king justify-center md:justify-end">
                  &apos;s e seo an tobar far an do nigh Lachlann Òg MacFhionghuin
                  ceann an teachdaire ain-diadhaich às dèidh an dìoghaltais
                  mhòir. Thuirt daoine ionadail às dèidh sin gun robh an tobar
                  &quot;air a thàthadh&quot; no fo dhìon nan sìthichean, agus gun èireadh
                  builgeanan bhuaithe air an oidhche, soidhne clasaigeach
                  làthaireachd nan sìth ann an seanchas na Gàidhealtachd.
                </div>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-fit h-fit flex rounded-full shadow-[0_8px_16px_rgba(8,31,62,0.6),0_2px_4px_rgba(8,31,62,0.4),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-2px_8px_rgba(8,31,62,0.25)] z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(8,31,62,0.1) 100%)",
              }}
            >
              <div className="relative w-6 rounded-full h-6 flex overflow-hidden border border-white/40">
                <Image
                  draggable={false}
                  fill
                  className="rounded-full"
                  objectFit="cover"
                  src="/images/tartan1.png"
                  alt="Tartan"
                />
                <div className="absolute top-0 left-0 w-full h-1/3 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] pointer-events-none" />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start md:pl-8 w-full order-1 md:order-2">
              <div className="w-full max-w-xs md:w-80 h-44 flex relative">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="Haunted Well"
                  draggable={false}
                  src="/images/hauntedwell.png"
                  className="grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-72 flex relative w-full bg-offWhite cursor-empireA overflow-hidden pb-10 items-center justify-center">
        <Marquee className="flex" pauseOnHover pauseOnClick direction="right">
          {[
            {
              titulo: "Sedilia, piscina and effigy of Abbot MacKinnon",
              imagen: "sedilia",
              enlace: "https://www.trove.scot/image/2523212",
            },
            {
              titulo: "Clan MacKinnon War memorial plaque",
              imagen: "memorial",
              enlace: "https://www.trove.scot/image/2222983",
            },
            {
              titulo: "Effigy of Abbot John MacKinnon",
              imagen: "effigy",
              enlace: "https://www.trove.scot/image/369758",
            },
            {
              titulo: "Sculpture of Gilbride, chief of the Mackinnons",
              imagen: "gilbride",
              enlace: "https://www.trove.scot/object/27038",
            },
            {
              titulo: "Mackinnon&apos;s Cross",
              imagen: "cross",
              enlace: "https://www.trove.scot/image/1198175",
            },
            {
              titulo: "Flora MacKinnon spinning outside on Coll, Argyll",
              imagen: "flora",
              enlace: "https://www.trove.scot/image/2813102",
            },
            {
              titulo: "Mackinnon willowing machine",
              imagen: "willowing",
              enlace: "https://www.trove.scot/image/2521490",
            },
            {
              titulo: "Mackinnon&apos;s Cave, Isle of Staffa",
              imagen: "staffacave",
              enlace: "https://www.trove.scot/image/1865018",
            },
            {
              titulo: "Drawing of Abbot MacKinnon&apos;s Tomb",
              imagen: "drawing",
              enlace: "https://www.trove.scot/image/376583",
            },
            {
              titulo: "MacKinnon&apos;s Cross",
              imagen: "cross2",
            },
            {
              titulo: "Cat Head at Iona Abbey Museum",
              imagen: "cathead",
              enlace: "https://www.trove.scot/image/369793",
            },
            {
              titulo: "Effigy of Gilbride",
              imagen: "gilbride",
              enlace: "https://www.trove.scot/image/369772",
            },
            {
              titulo: "Ruins of Dun Ringill",
              imagen: "dunringill",
            },

            {
              titulo: "Ruins of Dunakin",
              imagen: "dunakin",
            },
            {
              titulo: "Tomb of Archbishop MacKinnon",
              imagen: "archbishop",
              enlace: "https://www.trove.scot/image/2523237",
            },
          ].map(
            (
              el: {
                titulo: string;
                imagen: string;
                enlace?: string;
              },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  className={`h-60 w-60 relative mr-4 bg-lightYellow ${
                    el.enlace && "cursor-pointer"
                  }`}
                  onClick={() => el.enlace && window.open(el.enlace)}
                >
                  <Image
                    src={`/images/${el.imagen}.png`}
                    objectFit="contain"
                    layout="fill"
                    priority
                    unoptimized
                    draggable={false}
                    alt={el.titulo}
                  />
                </div>
              );
            }
          )}
        </Marquee>
      </div>
      <div className="relative w-fit pb-2 h-fit items-center justify-center text-center flex flex-col gap-1">
        <div
          className="relative cursor-pointer hover:underline text-xs w-fit h-fit flex font-clana py-3"
          onClick={() =>
            window.open("https://emmajanemackinnonlee-history.com/")
          }
        >
          Air a chumail le Emma-Jane Mac Fhionghuin Vere.
        </div>
        <div className="relative w-20 h-32 flex">
          <Image
            alt="Mac Fhionghuin Crest"
            layout="fill"
            objectFit="contain"
            draggable={false}
            src={"/images/mackinnoncrest.png"}
          />
        </div>
        <div className="relative text-xs w-fit h-fit flex font-wind">
          Tha mòr air a&apos; chrodh fada air falbh adharcan.
        </div>
      </div>
    </div>
  );
}
