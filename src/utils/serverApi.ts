import { ChampionsType } from "@/types/Champion";
import { ItemsType } from "@/types/Item";
import { ChampionRotationType } from "@/types/ChampionRotation";

//챔피언 API

export async function fetchLatestVersion() {
  const allVersionRes = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );

  const version = await allVersionRes.json();
  if (!allVersionRes.ok) {
    return "버전 정보가 없습니다.";
  }

  const latestVersion: string = version[0];
  return latestVersion;
}

// 챔피언 리스트
export default async function fetchChampionList() {
  const latestVersion = await fetchLatestVersion();
  const chmpionRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400, // 하루
      },
    }
  );

  const championList: { data: { [key: string]: ChampionsType } } =
    await chmpionRes.json();

  if (!chmpionRes.ok) {
    return "챔피언 정보가 없습니다.";
  }

  return championList.data;
}

// 챔피언 디테일
export async function fetchChampionDetailList(id: string) {
  const latestVersion = await fetchLatestVersion();
  const chmpionDetailRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );
  const championList = await chmpionDetailRes.json();
  if (!chmpionDetailRes.ok) {
    return "챔피언 상세 정보가 없습니다.";
  }
  return championList.data;
}

// 챔피언 로테이션
export async function fetchChampionRotation() {
  const res = await fetch("api/rotation");
  const data: ChampionRotationType = await res.json();
  return data;
}

// 아이템 리스트
export async function fetchItemList() {
  const itemRes = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json"
  );
  const itemList: { data: { [id: string]: ItemsType } } = await itemRes.json();
  if (!itemRes.ok) {
    return "아이템 정보가 없습니다.";
  }
  return itemList.data;
}

// 아이템 디테일
export async function fetchItemDetailList() {
  const latestVersion = await fetchLatestVersion();
  const itemDetailRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
  );

  const itemList = await itemDetailRes.json();

  if (!itemDetailRes.ok) {
    return "아이템 상세 정보가 없습니다.";
  }

  return itemList.data;
}
