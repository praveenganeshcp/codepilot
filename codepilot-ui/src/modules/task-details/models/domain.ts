export interface Task {
  id: string;
  title: string;
  spec: {
    description: string;
    images: { id: string; src: string; caption?: string }[];
    tables: { id: string; headers: string[]; rows: string[][] }[];
  };
}
