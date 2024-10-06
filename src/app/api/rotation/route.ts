import { ChampionRotationType } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export const GET = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY as string;
  if (!API_KEY) {
    throw new Error("API키가 없습니다.");
  }

  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": API_KEY || "",
      },
    }
  );
  const rotation_data: ChampionRotationType = await res.json();
  return NextResponse.json(rotation_data);
};
