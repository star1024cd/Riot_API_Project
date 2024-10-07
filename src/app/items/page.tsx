import { fetchItemList, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ItemsPage() {
  const itemsList = await fetchItemList();
  const latestVersion = await fetchLatestVersion();

  return (
    <div className="top-container">
      <h1 className="list-h1">아이템 목록</h1>
      <div className="grid-setting">
        {Object.entries(itemsList).map(([id, item]) => (
          <div key={id}>
            <Link href={`/items/${id}`}>
              <div className="border rounded p-4 list-hover h-60 overflow-hidden">
                <Image
                  className="rounded-sm object-scale-down"
                  width={80}
                  height={80}
                  src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`}
                  alt={item.name}
                />
                <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500 line-clamp-3">{item.plaintext}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
