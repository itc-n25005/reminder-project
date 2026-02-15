import { client } from "@/lib/microcms";

type Setting = {
  notifyEnabled: boolean;
  notifyTime: number;
};

export const getSetting = async (): Promise<Setting> => {
  const setting = await client.get<Setting>({
    endpoint: "setting",
  });
  return setting;
};
