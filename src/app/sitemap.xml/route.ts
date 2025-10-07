import { NextResponse } from "next/server";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://emmajanemackinnonlee-highlander.com";

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
   <url>
        <loc>${baseUrl}/</loc>
            ${[
              {imagen: "abbacy", titulo: "Abbacy"},
              {imagen: "abdication", titulo: "Abdication"},
              {imagen: "alliance", titulo: "Alliance"},
              {imagen: "arbroath", titulo: "Arbroath"},
              {imagen: "archbishop", titulo: "Archbishop"},
              {imagen: "argyll", titulo: "Argyll"},
              {imagen: "arrow", titulo: "Arrow"},
              {imagen: "bannockburn", titulo: "Bannockburn"},
              {imagen: "bas", titulo: "Bas"},
              {imagen: "benedictine", titulo: "Benedictine"},
              {imagen: "boar", titulo: "Boar"},
              {imagen: "brander", titulo: "Brander"},
              {imagen: "brunanburh", titulo: "Brunanburh"},
              {imagen: "burning", titulo: "Burning"},
              {imagen: "campbell", titulo: "Campbell"},
              {imagen: "cathead", titulo: "Cat Head"},
              {imagen: "clan1", titulo: "Clan 1"},
              {imagen: "clan2", titulo: "Clan 2"},
              {imagen: "clan3", titulo: "Clan 3"},
              {imagen: "clan4", titulo: "Clan 4"},
              {imagen: "clanfeuds", titulo: "Clan Feuds"},
              {imagen: "clann", titulo: "Clann"},
              {imagen: "clearancerd", titulo: "Clearance Rd"},
              {imagen: "clearances", titulo: "Clearances"},
              {imagen: "columbarelic", titulo: "Columba Relic"},
              {imagen: "crisis", titulo: "Crisis"},
              {imagen: "cross", titulo: "Cross"},
              {imagen: "cross2", titulo: "Cross 2"},
              {imagen: "crownoversight", titulo: "Crown Oversight"},
              {imagen: "domhnall", titulo: "Domhnall"},
              {imagen: "drawing", titulo: "Drawing"},
              {imagen: "dunakin", titulo: "Dunakin"},
              {imagen: "dunringill", titulo: "Dunringill"},
              {imagen: "effigy", titulo: "Effigy"},
              {imagen: "eileannamban", titulo: "Eilean Nam Ban"},
              {imagen: "emigration", titulo: "Emigration"},
              {imagen: "escape", titulo: "Escape"},
              {imagen: "fairymound", titulo: "Fairy Mound"},
              {imagen: "feud1", titulo: "Feud 1"},
              {imagen: "feud2", titulo: "Feud 2"},
              {imagen: "feud3", titulo: "Feud 3"},
              {imagen: "flora", titulo: "Flora"},
              {imagen: "forfeiture", titulo: "Forfeiture"},
              {imagen: "gilbride", titulo: "Gilbride"},
              {imagen: "gribuncave", titulo: "Gribun Cave"},
              {imagen: "griogair", titulo: "Griogair"},
              {imagen: "hauntedwell", titulo: "Haunted Well"},
              {imagen: "highlanders", titulo: "Highlanders"},
              {imagen: "highlanderswomen", titulo: "Highlanders Women"},
              {imagen: "iona", titulo: "Iona"},
              {imagen: "ionaburning", titulo: "Iona Burning"},
              {imagen: "islebloc", titulo: "Isle Bloc"},
              {imagen: "isleofiona", titulo: "Isle of Iona"},
              {imagen: "isleofmull", titulo: "Isle of Mull"},
              {imagen: "isleofskye", titulo: "Isle of Skye"},
              {imagen: "jacobian", titulo: "Jacobian"},
              {imagen: "james", titulo: "James"},
              {imagen: "kingship", titulo: "Kingship"},
              {imagen: "land", titulo: "Land"},
              {imagen: "largs", titulo: "Largs"},
              {imagen: "loyalty", titulo: "Loyalty"},
              {imagen: "macalpine", titulo: "MacAlpine"},
              {imagen: "mackinnonancient", titulo: "MacKinnon Ancient"},
              {imagen: "mackinnoncrest", titulo: "MacKinnon Crest"},
              {imagen: "mackinnoncross", titulo: "MacKinnon Cross"},
              {imagen: "mackinnonhuntingancient", titulo: "MacKinnon Hunting Ancient"},
              {imagen: "mackinnonhuntingmodern", titulo: "MacKinnon Hunting Modern"},
              {imagen: "mackinnonmodernvarient", titulo: "MacKinnon Modern Varient"},
              {imagen: "mackinnonredancient", titulo: "MacKinnon Red Ancient"},
              {imagen: "mackinnonredmodern", titulo: "MacKinnon Red Modern"},
              {imagen: "maol", titulo: "Maol"},
              {imagen: "memorial", titulo: "Memorial"},
              {imagen: "monkmassacre", titulo: "Monk Massacre"},
              {imagen: "mullboats", titulo: "Mull Boats"},
              {imagen: "norsegael", titulo: "Norse Gael"},
              {imagen: "patronage", titulo: "Patronage"},
              {imagen: "pictland", titulo: "Pictland"},
              {imagen: "pictsvanish", titulo: "Picts Vanish"},
              {imagen: "refuge", titulo: "Refuge"},
              {imagen: "revenge", titulo: "Revenge"},
              {imagen: "saucymary", titulo: "Saucy Mary"},
              {imagen: "sconecouncil", titulo: "Scone Council"},
              {imagen: "seanchas", titulo: "Seanchas"},
              {imagen: "sedilia", titulo: "Sedilia"},
              {imagen: "sheriffmuir", titulo: "Sheriff Muir"},
              {imagen: "siol", titulo: "Siol"},
              {imagen: "skyeboats", titulo: "Skye Boats"},
              {imagen: "spider", titulo: "Spider"},
              {imagen: "staffacave", titulo: "Staffa Cave"},
              {imagen: "tartan", titulo: "Tartan"},
              {imagen: "tartan1", titulo: "Tartan 1"},
              {imagen: "tartan10", titulo: "Tartan 10"},
              {imagen: "tartan11", titulo: "Tartan 11"},
              {imagen: "tartan2", titulo: "Tartan 2"},
              {imagen: "tartan3", titulo: "Tartan 3"},
              {imagen: "tartan4", titulo: "Tartan 4"},
              {imagen: "tartan5", titulo: "Tartan 5"},
              {imagen: "tartan6", titulo: "Tartan 6"},
              {imagen: "tartan7", titulo: "Tartan 7"},
              {imagen: "tartan8", titulo: "Tartan 8"},
              {imagen: "tartan9", titulo: "Tartan 9"},
              {imagen: "toll", titulo: "Toll"},
              {imagen: "transmarine", titulo: "Transmarine"},
              {imagen: "ulster", titulo: "Ulster"},
              {imagen: "ulsterraid", titulo: "Ulster Raid"},
              {imagen: "vikingraid", titulo: "Viking Raid"},
              {imagen: "voyagetoargyll", titulo: "Voyage to Argyll"},
              {imagen: "willowing", titulo: "Willowing"},
              {imagen: "witness", titulo: "Witness"}
            ].map(
              (im) =>
                `<image:image>
            <image:loc>${baseUrl}/images/${im.imagen}.png</image:loc>
            <image:title><![CDATA[${im.titulo} | Highlander MacKinnon Clan | Emma-Jane MacKinnon-Lee]]></image:title>
            <image:caption><![CDATA[${im.titulo} | Highlander MacKinnon Clan | Emma-Jane MacKinnon-Lee]]></image:caption>
          </image:image>
          `
            )}
      </url>
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
