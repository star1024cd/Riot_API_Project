import { ChampionDataType, ChampionsType } from "@/types/Champion";
import { fetchChampionDetailList, fetchLatestVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const latestVersion = await fetchLatestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${params.id}.json`,
    {
      cache: "no-store",
    }
  );
  const data: ChampionDataType = await res.json();

  return {
    title: data.data[params.id].name,
  };
}

const ChampionDetailPage = async ({ params }: Props) => {
  const championId = await fetchChampionDetailList(params.id);
  const championDetail: ChampionsType = championId[params.id];
  if (!championDetail) {
    return <div>그런 챔피언은 없습니다.</div>;
  }
  return (
    <div className="bg-black text-red-800 gap-x-5 grid grid-cols-[1fr_1fr] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="">
        <Image
          className="rounded-sm object-scale-down"
          width={308}
          height={560}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championDetail.id}_0.jpg`}
          alt={championDetail.title}
        />
      </div>
      <div className="w-3/4">
        <div className="w-full">
          <h1 className="text-8xl mb-2 font-bold">{championDetail.name}</h1>
          <p className="text-xl mb-32 text-right text-red-900">
            {championDetail.title}
          </p>
        </div>
        <p>{championDetail.blurb}</p>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-2">스탯</h2>
          <p>
            공격력 : <span>{championDetail.info.attack}</span>
          </p>
          <p>
            방어력 : <span>{championDetail.info.defense}</span>
          </p>
          <p>
            마법력 : <span>{championDetail.info.magic}</span>
          </p>
          <p>
            난이도 : <span>{championDetail.info.difficulty}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
