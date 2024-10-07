"use client";

import { ChampionsType } from "@/types/Champion";
import fetchChampionList, { fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RotationPage() {
  const [rotationFilter, setRotationFilter] = useState<ChampionsType[]>([]);
  const [latestVersion, setLatestVerstion] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchChampionData() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/rotation");
        const rotationData = await res.json();
        if (!rotationData) {
          return <div>로테이션 데이터를 찾을 수 없습니다.</div>;
        }
        const championData = await fetchChampionList();
        const latestVersion = await fetchLatestVersion();

        const filterChampionsByRotation = Object.values(championData).filter(
          (champ) => rotationData.freeChampionIds.includes(Number(champ.key))
        );
        setRotationFilter(filterChampionsByRotation);
        setLatestVerstion(latestVersion);
      } catch (error) {
        console.error("로테이션 목록 에러", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchChampionData();
  }, []);

  if (isLoading) return <div>Rotation List Loading...✨</div>;

  return (
    <div className="top-container">
      <h1 className="list-h1">로테이션 챔피언 목록</h1>
      <div className="grid-setting">
        {rotationFilter.map((champion) => (
          <div key={champion.id}>
            <Link href={`/champions/${champion.id}`}>
              <div className="border rounded p-4 list-hover">
                <Image
                  className="rounded-sm object-scale-down"
                  width={80}
                  height={80}
                  src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`}
                  alt={champion.title}
                />
                <h2 className="mt-2 text-xl font-semibold">{champion.name}</h2>
                <p className="text-gray-500">{champion.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
