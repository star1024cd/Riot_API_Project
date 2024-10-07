import { ItemsType } from "@/types/Item";
import { fetchItemDetailList, fetchLatestVersion } from "@/utils/serverApi";
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
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
  );
  const data: ItemsType = await res.json();

  return {
    title: data.data[params.id].name,
  };
}

const ItemDetailPage = async ({ params }: Props) => {
  const latestVersion = await fetchLatestVersion();
  const itemId = await fetchItemDetailList();
  const itemDetail: ItemsType = itemId[params.id];

  if (!itemDetail) {
    return <div>그런 아이템은 없습니다.</div>;
  }
  return (
    <div className="text-gray-900 gap-x-5 grid grid-cols-1 items-center text-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <Image
          className="rounded-sm object-scale-down mx-auto"
          width={100}
          height={560}
          sizes="(max-width: 768px) 100vw, 33vw"
          src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${itemDetail.image.full}`}
          alt={itemDetail.name}
        />
        <h1 className="text-4xl mb-2 font-bold">{itemDetail.name}</h1>
        <p className="text-xl mb-5 text-gray-700">{itemDetail.plaintext}</p>
        <p>
          가격 : <span>{itemDetail.gold.base}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemDetailPage;
