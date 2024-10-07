import fetchChampionList, { fetchLatestVersion } from "@/utils/serverApi";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function ChampionsPage() {
  const championList = await fetchChampionList();
  const latestVersion = await fetchLatestVersion();

  return (
    <div className="top-container">
      <h1 className="list-h1">챔피언 목록</h1>
      <div className="grid-setting">
        {Object.values(championList).map((champion) => (
          <div key={champion.id}>
            <Link href={`/champions/${champion.id}`}>
              <div className=" border rounded p-4 list-hover">
                <Image
                  className="rounded-sm object-scale-down"
                  width={80}
                  height={80}
                  src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`}
                  alt={champion.title}
                />
                <h2>{champion.name}</h2>
                <p className="text-gray-500">{champion.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
