import SceneController from "@/components/SceneController";

function parseInitialScene(scene: string | string[] | undefined): number {
  if (typeof scene !== "string" || !/^[1-9]$/.test(scene)) return 0;
  return Number(scene) - 1;
}

export default async function CinematicPage({
  searchParams,
}: {
  searchParams: Promise<{ scene?: string | string[] }>;
}) {
  const { scene } = await searchParams;
  return <SceneController initialScene={parseInitialScene(scene)} />;
}
