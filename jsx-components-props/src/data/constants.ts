export type Profile = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  tags?: string[];
};

export const PROFILES: Profile[] = [
  {
    id: "1",
    name: "Ada Lovelace",
    role: "Mathematician",
    avatarUrl: "https://i.pravatar.cc/100?img=1",
    tags: ["pioneer", "analytical engine"],
  },
  {
    id: "2",
    name: "Grace Hopper",
    role: "Computer Scientist",
    avatarUrl: "https://i.pravatar.cc/100?img=2",
    tags: ["COBOL", "rear admiral"],
  },
  {
    id: "3",
    name: "Alan Turing",
    role: "Computer Scientist",
    avatarUrl: "https://i.pravatar.cc/100?img=3",
    tags: ["turing machine", "AI"],
  },
];
